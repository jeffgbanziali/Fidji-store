import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ShippingAddressContext = createContext();

const ShippingAddressProvider = ({ children }) => {
    const userData = useSelector((state) => state.userReducer.user);
    const [shippingAddresses, setShippingAddresses] = useState([]);
    const [pendingUpdate, setPendingUpdate] = useState(null); // ✅ État pour gérer la suppression

    // 🔥 Charger les adresses stockées localement depuis AsyncStorage
    useEffect(() => {
        const loadStoredAddresses = async () => {
            try {
                const storedAddresses = await AsyncStorage.getItem('shippingAddresses');
                if (storedAddresses) {
                    let parsedAddresses = JSON.parse(storedAddresses);

                    // Assurer que chaque adresse a un `id`
                    parsedAddresses = parsedAddresses.map(addr => ({
                        ...addr,
                        id: addr.id || Date.now() + Math.random()
                    }));

                    setShippingAddresses(parsedAddresses);
                } else if (userData?.customerData?.shipping) {
                    const defaultAddress = {
                        ...userData.customerData.shipping,
                        id: Date.now(), // Générer un ID unique
                        isDefault: true
                    };
                    setShippingAddresses([defaultAddress]);
                }
            } catch (error) {
                console.error('Erreur lors du chargement des adresses:', error);
            }
        };
        loadStoredAddresses();
    }, [userData]);

    // 🛠️ Sauvegarder les adresses dans AsyncStorage
    const saveAddressesToStorage = async (addresses) => {
        try {
            await AsyncStorage.setItem('shippingAddresses', JSON.stringify(addresses));
        } catch (error) {
            console.error('Erreur lors de l’enregistrement des adresses:', error);
        }
    };

    // ✅ Ajouter une nouvelle adresse avec un ID unique
    const addShippingAddress = (newAddress) => {
        let updatedAddresses = [...shippingAddresses];

        newAddress.id = Date.now(); // Générer un ID unique
        newAddress.isDefault = updatedAddresses.length === 0; // Première adresse = par défaut

        updatedAddresses.push(newAddress);
        setShippingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses);
    };

    // ✅ Modifier une adresse existante
    const updateShippingAddress = (updatedAddress) => {
        const updatedAddresses = shippingAddresses.map(addr =>
            addr.id === updatedAddress.id ? updatedAddress : addr
        );
        setShippingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses);
    };

    // ✅ Fonction pour marquer une adresse pour suppression
    const deleteShippingAddress = (addressId) => {
        console.log("Demande de suppression de l'adresse ID :", addressId);
        console.log("L'addresse supprimée est là", pendingUpdate)
        setPendingUpdate(addressId); // ✅ Stocker l'ID de l'adresse à supprimer
    };

    // ✅ Exécuter la suppression après le rendu avec `useEffect`
    useEffect(() => {
        const loadStoredAddresses = async () => {
            try {
                const storedAddresses = await AsyncStorage.getItem('shippingAddresses');
                let parsedAddresses = storedAddresses ? JSON.parse(storedAddresses) : [];

                // Vérifier si `userData.customerData.shipping` est défini
                if (userData?.customerData?.shipping) {
                    const defaultAddress = {
                        ...userData.customerData.shipping,
                        id: userData.customerData.shipping.id || Date.now(), // Générer un ID unique si nécessaire
                        isDefault: parsedAddresses.length === 0 // Première adresse par défaut si pas d'adresse stockée
                    };

                    // Vérifier si l’adresse du client est déjà dans la liste
                    const addressExists = parsedAddresses.some(addr =>
                        addr.address_1 === defaultAddress.address_1 &&
                        addr.postcode === defaultAddress.postcode
                    );

                    if (!addressExists) {
                        parsedAddresses = [defaultAddress, ...parsedAddresses]; // Ajouter l’adresse initiale du client
                    }
                }

                setShippingAddresses(parsedAddresses);
            } catch (error) {
                console.error('Erreur lors du chargement des adresses:', error);
            }
        };

        loadStoredAddresses();
    }, [userData]);

    // ✅ Définir une adresse comme "par défaut"
    const setDefaultShippingAddress = (addressId) => {
        let updatedAddresses = shippingAddresses.map(addr => ({
            ...addr,
            isDefault: addr.id === addressId
        }));

        setShippingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses);
    };

    return (
        <ShippingAddressContext.Provider value={{
            shippingAddresses,
            addShippingAddress,
            updateShippingAddress,
            deleteShippingAddress,
            setDefaultShippingAddress
        }}>
            {children}
        </ShippingAddressContext.Provider>
    );
};

export default ShippingAddressProvider;
