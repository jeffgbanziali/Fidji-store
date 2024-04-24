import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const NotArticle = () => {

    const navigation = useNavigation()

    const showArticle = () => {
        navigation.navigate("ViewArticleScreen",)
    }

    const viewCollection = () => {
        navigation.navigate("NewArticles")
    }

    return (
        <View
            style={{
                width: "100%",
                height: 280,
                paddingBottom: 16,
                justifyContent: "center",
                alignItems: "center",
            }}>

            <View
                style={{
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Pressable
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <EvilIcons name="heart" size={24} color="black" />
                </Pressable>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "800",
                        color: "black"
                    }}>
                    Aucun coup de cœur, Impossible !!!!!
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        paddingTop: 5,
                        fontWeight: "500",
                        fontStyle: "italic",
                        textAlign: "center",
                        color: "black"
                    }}>
                    Sauvegardez ici les articles dont vous rêvez pour plus tard
                </Text>
            </View>


            <Pressable
                onPress={viewCollection}
                style={{
                    width: 280,
                    height: 50,
                    marginTop: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "gray"
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                    }}>
                    Visiter la dernière collection
                </Text>
            </Pressable>
        </View>
    )
}

export default NotArticle