import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isConnected, setIsConnected] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Écoutez les changements de connexion réseau
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
            console.log('Network state changed: ', state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);

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

    const saveCartToStorage = async (cart) => {
        try {
            await AsyncStorage.setItem('localCart', JSON.stringify(cart));
        } catch (error) {
            console.error('Error saving cart to AsyncStorage:', error);
        }
    };

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingItemIndex !== -1) {
                // L'article existe déjà dans le panier, augmenter la quantité
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity++;
                saveCartToStorage(updatedCart);
                return updatedCart;
            } else {
                // Ajouter l'article au panier
                const updatedCart = [...prevCart, { ...product, quantity: 1 }];
                saveCartToStorage(updatedCart);
                return updatedCart;
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            saveCartToStorage(updatedCart);
            return [...updatedCart]; // 🔥 Crée un nouvel array pour forcer le re-render
        });
    };


    useEffect(() => {
        const checkUserToken = async () => {
            if (!isConnected) {
                console.error('Pas de connexion Internet disponible pour vérifier le jeton utilisateur.');
                return;
            }

            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    setUserToken(token);
                    const id = await AsyncStorage.getItem('userId');
                    if (id !== null && id !== undefined) {
                        setUserId(id);
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la récupération du jeton JWT et de l\'ID de l\'utilisateur depuis AsyncStorage :', error);
            }
        };

        checkUserToken();
    }, [isConnected]);

    const signIn = async (token, id) => {
        if (!isConnected) {
            console.error('Pas de connexion Internet disponible pour se connecter.');
            return;
        }

        try {
            await AsyncStorage.setItem('userToken', token);
            if (id !== null && id !== undefined) {
                await AsyncStorage.setItem('userId', id.toString());
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
            await AsyncStorage.removeItem('userId');
            setUserToken(null);
            setUserId(null);
        } catch (error) {
            console.error('Erreur lors de la suppression du jeton JWT et de l\'ID de l\'utilisateur depuis AsyncStorage :', error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isConnected,
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
