import { View, Text, FlatList, Pressable, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const searchQuery = route.params?.query || '';
    const searchResults = route.params?.results || [];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            {/* Barre de navigation avec flèche retour */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
                    <Feather name="arrow-left" size={24} color="black" />
                </Pressable>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Résultats pour "{searchQuery}"</Text>
            </View>

            {/* Liste des résultats */}
            {searchResults.length > 0 ? (
                <FlatList
                    data={searchResults}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => navigation.navigate('ViewArticleScreen', { article: item })}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ddd'
                            }}>
                            {/* Afficher l'image du produit */}
                            {item.images.length > 0 && (
                                <Image source={{ uri: item.images[0].src }} style={{ width: 50, height: 50, marginRight: 10 }} />
                            )}
                            <Text style={{ fontSize: 16 }}>{item.name}</Text>
                        </Pressable>
                    )}
                />
            ) : (
                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
                    Aucun résultat trouvé
                </Text>
            )}
        </SafeAreaView>
    );
};

export default SearchScreen;
