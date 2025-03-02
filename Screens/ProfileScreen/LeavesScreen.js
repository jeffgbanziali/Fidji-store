import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { APP_API_URL } from '@env'; // Pas besoin de CUSTOMER_KEY / SECRET_KEY car on utilise JWT
import { AuthContext } from '../../Context/AuthContext';

const DEFAULT_IMAGE = "../../assets/image/1.jpg";

const LeavesScreen = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const { userToken } = useContext(AuthContext); // Récupérer le token JWT depuis le contexte

    useEffect(() => {
        fetchArticles();
    }, [userToken]); // Recharger les articles si le token change

    const fetchArticles = async () => {
        if (!userToken) {
            console.error("🔴 Aucun token JWT trouvé, impossible de récupérer les articles !");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`${APP_API_URL}/wp/v2/posts`, {
                params: {
                    per_page: 10, // Récupérer 10 articles
                    orderby: "date",
                    order: "desc",
                    _embed: true // Pour récupérer les images en même temps
                },
                headers: {
                    Authorization: `Bearer ${userToken}` // 🔐 Utilisation du token JWT
                }
            });

            setArticles(response.data);
            setLoading(false);
        } catch (error) {
            console.error("❌ Erreur lors de la récupération des articles :", error.response?.data || error.message);
            setLoading(false);
        }
    };

    // Fonction pour afficher un article
    const renderArticle = ({ item }) => {
        const featuredImage = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || DEFAULT_IMAGE;

        return (
            <Pressable
                onPress={() => navigation.navigate("ArticleDetail", { article: item })}
                style={{
                    backgroundColor: "#fff",
                    marginBottom: 10,
                    borderRadius: 10,
                    overflow: "hidden",
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 2 },
                    elevation: 2
                }}
            >
                <Image source={{ uri: featuredImage }} style={{ width: "100%", height: 200 }} />
                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>{item.title.rendered}</Text>
                    <Text style={{ fontSize: 14, color: "#777", marginTop: 5 }}>{new Date(item.date).toLocaleDateString()}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 15 }}>📰 Journal Fidji</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <FlatList
                    data={articles}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderArticle}
                />
            )}
        </SafeAreaView>
    );
};

export default LeavesScreen;
