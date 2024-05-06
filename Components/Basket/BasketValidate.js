import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BasketValidate = ({ calculateTotal, handleViewBasket }) => {

    const navigation = useNavigation()


    const handleChoice = () => {
        navigation.navigate("Delivery")
        console.warn("gogogogoog")
        handleViewBasket()
    }


    return (
        <View style={{
            width: "100%",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 1,
            borderColor: "gray",
        }}>
            <Pressable
                onPress={handleChoice}
                style={{
                    width: 200,
                    height: 50,
                    margin: 4,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black"
                }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "white"
                    }}>
                    Commander - {calculateTotal()} €
                </Text>
            </Pressable>
        </View >
    )
}

export default BasketValidate