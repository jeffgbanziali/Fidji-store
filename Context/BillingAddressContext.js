import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BillingAddressContext = createContext();

const BillingAddressProvider = ({ children }) => {
    const userData = useSelector((state) => state.userReducer.user);
    const [billingAddresses, setBillingAddresses] = useState([]);
    const [pendingUpdate, setPendingUpdate] = useState(null); // Pour gérer la suppression

    // 🔥 Charger les adresses stockées localement depuis AsyncStorage
    useEffect(() => {
        const loadStoredAddresses = async () => {
            try {
                const storedAddresses = await AsyncStorage.getItem('billingAddresses');
                let parsedAddresses = storedAddresses ? JSON.parse(storedAddresses) : [];

                // Vérifier si `userData.customerData.billing` est défini et non vide
                if (userData?.customerData?.billing?.address_1?.trim()) {
                    const defaultAddress = {
                        ...userData.customerData.billing,
                        email: userData.customerData.email,
                        id: userData.customerData.billing.id || Date.now(), // Générer un ID unique si nécessaire
                        isDefault: parsedAddresses.length === 0 // Première adresse = par défaut
                    };

                    // Vérifier si l'adresse est déjà enregistrée
                    const addressExists = parsedAddresses.some(addr =>
                        addr.address_1 === defaultAddress.address_1 &&
                        addr.postcode === defaultAddress.postcode
                    );

                    if (!addressExists) {
                        parsedAddresses = [defaultAddress, ...parsedAddresses];
                    }
                }

                setBillingAddresses(parsedAddresses);
            } catch (error) {
                console.error('Erreur lors du chargement des adresses de facturation:', error);
            }
        };

        loadStoredAddresses();
    }, [userData]);

    // 🛠️ Sauvegarder les adresses dans AsyncStorage
    const saveAddressesToStorage = async (addresses) => {
        try {
            await AsyncStorage.setItem('billingAddresses', JSON.stringify(addresses));
        } catch (error) {
            console.error('Erreur lors de l’enregistrement des adresses de facturation:', error);
        }
    };

    // ✅ Ajouter une nouvelle adresse
    const addBillingAddress = (newAddress) => {
        let updatedAddresses = [...billingAddresses];

        newAddress.id = Date.now(); // Générer un ID unique
        newAddress.isDefault = updatedAddresses.length === 0; // La première adresse devient par défaut

        updatedAddresses.push(newAddress);
        setBillingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses);
    };

    // ✅ Modifier une adresse existante
    const updateBillingAddress = (updatedAddress) => {
        const updatedAddresses = billingAddresses.map(addr =>
            addr.id === updatedAddress.id ? updatedAddress : addr
        );
        setBillingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses);
    };

    // ✅ Supprimer une adresse
    const deleteBillingAddress = (addressId) => {
        setPendingUpdate(addressId);
    };

    // 🔥 Exécuter la suppression après mise à jour de l'état
    useEffect(() => {
        if (pendingUpdate !== null) {
            const updatedAddresses = billingAddresses.filter(addr => addr.id !== pendingUpdate);
            setBillingAddresses(updatedAddresses);
            saveAddressesToStorage(updatedAddresses);
            setPendingUpdate(null);
        }
    }, [pendingUpdate]);

    // ✅ Définir une adresse comme "par défaut"
    const setDefaultBillingAddress = (addressId) => {
        let updatedAddresses = billingAddresses.map(addr => ({
            ...addr,
            isDefault: addr.id === addressId
        }));

        setBillingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses);
    };

    return (
        <BillingAddressContext.Provider value={{
            billingAddresses,
            addBillingAddress,
            updateBillingAddress,
            deleteBillingAddress,
            setDefaultBillingAddress
        }}>
            {children}
        </BillingAddressContext.Provider>
    );
};

export default BillingAddressProvider;
