import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [userId, setUserId] = useState(null); // Ajouter un état pour stocker l'ID de l'utilisateur

    useEffect(() => {
        const checkUserToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    setUserToken(token);
                    // Récupérer l'ID de l'utilisateur depuis AsyncStorage
                    const id = await AsyncStorage.getItem('userId');
                    if (id !== null && id !== undefined) { // Ajoutez une validation supplémentaire pour s'assurer que id n'est pas null ou non défini
                        setUserId(id);
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la récupération du jeton JWT et de l\'ID de l\'utilisateur depuis AsyncStorage :', error);
            }
        };

        checkUserToken();
    }, []);

    const signIn = async (token, id) => {
        try {
            await AsyncStorage.setItem('userToken', token);
            if (id !== null && id !== undefined) {
                await AsyncStorage.setItem('userId', id.toString());
                console.log("Stocke moi ce con", (id.toString()))
                setUserId(id.toString());
            }
            setUserToken(token);
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du jeton JWT et de l\'ID de l\'utilisateur dans AsyncStorage :', error);
        }
    };




    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userId'); // Supprimer également l'ID de l'utilisateur
            setUserToken(null);
            setUserId(null);
        } catch (error) {
            console.error('Erreur lors de la suppression du jeton JWT et de l\'ID de l\'utilisateur depuis AsyncStorage :', error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                userToken,
                userId,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
