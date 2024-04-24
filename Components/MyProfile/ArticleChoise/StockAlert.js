import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const StockAlert = () => {

    return (
        <View
            style={{
                width: "100%",
                height: 600,
                borderTopWidth: 1,
                alignItems: "center",
                borderColor: "gray"
            }}>

            <View
                style={{
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                }}>
                <Text
                    style={{
                        fontSize: 24,
                        paddingLeft: 20,
                        fontWeight: "500",
                        color: "black"
                    }} >
                    Vos alertes stock
                </Text>
            </View>

            <View
                style={{
                    width: "60%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View
                    style={{
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "800",
                        textAlign: "center",
                        color: "black"
                    }}>
                    Vous n'avez pas encore enregistré d'alerte.
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
                    C'est que tous les articles qui vous plaisent sont pour l'instant en stock ...!
                    Dans le cas contraire n'hésitez pas à sauvegarder ici tout article dont vous vouliez
                    afin d'être avertis lorsqu'il sera de retour !
                </Text>
            </View>


        </View>

    )
}

export default StockAlert