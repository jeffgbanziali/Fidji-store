import { View, TextInput, SafeAreaView, Text, FlatList, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; ``
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';
import axios from 'axios';



const SearchModal = ({ closeModal }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();



    const handleSearch = async () => {
        if (searchQuery.trim() === '') return;

        setLoading(true); // Affiche le loader

        try {
            const response = await axios.get(`${APP_API_URL}/wc/v3/products`, {
                params: {
                    search: searchQuery, // Recherche globale
                    per_page: 20, // Limite à 20 résultats
                    status: "publish", // Exclut les brouillons ou produits cachés
                },
                auth: {
                    username: CUSTOMER_KEY,
                    password: SECRET_KEY
                }
            });

            let searchResults = response.data;

            // 🔍 Filtrage avancé pour améliorer la pertinence
            searchResults = searchResults.filter(product => {
                const lowerQuery = searchQuery.toLowerCase();

                return (
                    product.name.toLowerCase().includes(lowerQuery) ||
                    product.description?.toLowerCase().includes(lowerQuery) ||
                    product.short_description?.toLowerCase().includes(lowerQuery) ||
                    product.categories.some(cat => cat.name.toLowerCase().includes(lowerQuery)) ||
                    product.tags.some(tag => tag.name.toLowerCase().includes(lowerQuery)) ||
                    product.attributes.some(attr =>
                        attr.options.some(option => option.toLowerCase().includes(lowerQuery))
                    )
                );
            });

            setLoading(false);
            closeModal(); // Ferme le modal

            console.log("Mes résultats", searchResults)
            navigation.navigate('SearchScreen', { results: searchResults, query: searchQuery }); // Envoie les résultats
        } catch (error) {
            console.error("Erreur lors de la recherche :", error.response?.data || error.message);
            setLoading(false);
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>

            {/* Barre de recherche */}
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 50,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        width: '10%',
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: "center",
                    }}>
                    <Pressable
                        onPress={closeModal} style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: "center",
                        }}>
                        <SimpleLineIcons name="arrow-left" size={24} color="black" />
                    </Pressable>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 2,
                        width: '85%',
                        height: "100%",
                        borderColor: 'black',
                        borderRadius: 30,
                        height: 50,
                    }}>

                    <TextInput
                        placeholder="Rechercher un article..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '80%',
                            height: "100%",
                            paddingLeft: 12,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: "center",
                            width: '20%',
                            height: "100%",
                        }}>


                        <Pressable onPress={handleSearch} style={{
                            backgroundColor: 'black',
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {loading ? (
                                <ActivityIndicator size="small" color="white" />
                            ) : (
                                <Feather name="search" size={20} color="white" />
                            )}
                        </Pressable>
                    </View>


                </View>

            </View>

        </SafeAreaView>
    );
};

export default SearchModal;
