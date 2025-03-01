import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const ArticleDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { article } = route.params;

    const featuredImage = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/300";

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView>
                {/* Barre de navigation */}
                <Pressable onPress={() => navigation.goBack()} style={{ padding: 15 }}>
                    <Feather name="arrow-left" size={24} color="black" />
                </Pressable>

                {/* Image de l'article */}
                <Image source={{ uri: featuredImage }} style={{ width: "100%", height: 250 }} />

                {/* Contenu */}
                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>{article.title.rendered}</Text>
                    <Text style={{ fontSize: 14, color: "#777", marginBottom: 15 }}>{new Date(article.date).toLocaleDateString()}</Text>

                    {/* Contenu de l'article */}
                    <Text style={{ fontSize: 16, color: "#333" }}>{article.content.rendered.replace(/<[^>]+>/g, '')}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ArticleDetail;
