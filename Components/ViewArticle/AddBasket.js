import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddBasket = () => {
    const [quantity, setQuantity] = useState(1); // État initial du nombre

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    return (
        <View
            style={{
                width: "100%",
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
            }}>
            <View
                style={{
                    width: 140,
                    height: 50,
                    margin: 4,
                    borderRadius: 10,
                    flexDirection: "row",
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderWidth: 2,
                    borderColor: "gray",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <Pressable
                    onPress={decreaseQuantity}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                    <AntDesign name="minus" size={24} color="black" />

                </Pressable>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                        color: "black"
                    }}>
                    {quantity}
                </Text>

                <Pressable
                    onPress={increaseQuantity}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                    <AntDesign name="plus" size={24} color="black" />
                </Pressable>

            </View>
            <View
                style={{
                    width: 260,
                    height: 60,
                    margin: 4,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black"
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                        color: "white"
                    }}>
                    Ajouter au panier
                </Text>
            </View>


        </View>
    )
}

export default AddBasket