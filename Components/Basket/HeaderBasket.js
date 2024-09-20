import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderBasket = ({ handleViewBasket }) => {

    return (
        <View
            style={{
                width: "100%",
                height: 40,
                marginBottom: 6,
                alignItems: "center",
                justifyContent: "center",


            }}>



            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "500",
                    color: "black"
                }} >
                PANIER
            </Text>


            <Pressable
                style={{
                    width: 50,
                    height: 50,
                    right: 2,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <MaterialCommunityIcons name="message-question-outline" size={26} color="black" />
            </Pressable>

            <Pressable
                onPress={handleViewBasket}
                style={{
                    width: 50,
                    height: 50,
                    left: 2,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Entypo name="cross" size={24} color="black" />
            </Pressable>


        </View>
    )
}

export default HeaderBasket