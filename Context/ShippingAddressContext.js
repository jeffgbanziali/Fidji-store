import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ShippingAddressContext = createContext();

const ShippingAddressProvider = ({ children }) => {
    const userData = useSelector((state) => state.userReducer.user);
    const [shippingAddresses, setShippingAddresses] = useState([]);

    // 🔥 Charger les adresses stockées localement depuis AsyncStorage
    useEffect(() => {
        const loadStoredAddresses = async () => {
            try {
                const storedAddresses = await AsyncStorage.getItem('shippingAddresses');
                if (storedAddresses) {
                    setShippingAddresses(JSON.parse(storedAddresses));
                } else if (userData?.customerData?.shipping) {
                    setShippingAddresses([userData.customerData.shipping]);
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

    // ✅ Ajouter une nouvelle adresse et la stocker en local
    const addShippingAddress = (newAddress) => {
        const updatedAddresses = [...shippingAddresses, newAddress];
        setShippingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses); // Stocker dans AsyncStorage
    };

    // ✅ Modifier une adresse existante et la stocker
    const updateShippingAddress = (updatedAddress) => {
        const updatedAddresses = shippingAddresses.map(addr =>
            addr.id === updatedAddress.id ? updatedAddress : addr
        );
        setShippingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses); // Stocker dans AsyncStorage
    };

    // ✅ Supprimer une adresse et mettre à jour AsyncStorage
    const deleteShippingAddress = (addressId) => {
        const updatedAddresses = shippingAddresses.filter(addr => addr.id !== addressId);
        setShippingAddresses(updatedAddresses);
        saveAddressesToStorage(updatedAddresses); // Stocker dans AsyncStorage
    };

    return (
        <ShippingAddressContext.Provider value={{
            shippingAddresses,
            addShippingAddress,
            updateShippingAddress,
            deleteShippingAddress
        }}>
            {children}
        </ShippingAddressContext.Provider>
    );
};

export default ShippingAddressProvider;
