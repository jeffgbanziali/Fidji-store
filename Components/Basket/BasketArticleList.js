import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


const BasketArticleList = () => {
    return (
        <View style={{
            width: "100%,",
            height: 250,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                }}>

                <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
                <Text
                    style={{
                        fontSize: 16,
                        paddingTop: 10,
                        fontWeight: "600",
                        color: "black"
                    }}>Votre panier est vide</Text>

            </View>
        </View>
    )
}

export default BasketArticleList