import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [userId, setUserId] = useState(null); // Ajouter un état pour stocker l'ID de l'utilisateur
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Charger le panier depuis le stockage local lors du montage du composant
        const loadCart = async () => {
            try {
                const storedCart = await AsyncStorage.getItem('localCart');
                if (storedCart) {
                    setCart(JSON.parse(storedCart));
                }
            } catch (error) {
                console.error('Error loading cart from AsyncStorage:', error);
            }
        };
        loadCart();
    }, []);

    const addToCart = (product) => {
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            // L'article existe déjà dans le panier, augmenter la quantité
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity++;
            setCart(updatedCart);
        } else {
            // Ajouter l'article au panier
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    useEffect(() => {
        // Mettre à jour le stockage local chaque fois que le panier change
        const saveCart = async () => {
            try {
                await AsyncStorage.setItem('localCart', JSON.stringify(cart));
            } catch (error) {
                console.error('Error saving cart to AsyncStorage:', error);
            }
        };
        saveCart();
    }, [cart]);

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
            console.log("Déconnexion réussie")
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
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
