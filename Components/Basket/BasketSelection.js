import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';





const BasketSelection = ({ cart }) => {


    const [quantity, setQuantity] = useState(1);

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
                paddingLeft: 4,
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center"
            }}>
            <View
                style={{
                    width: 120,
                    height: 160,
                    margin: 14,
                    backgroundColor: "blue"
                }}>
                <Image
                    source={{ uri: cart.imageUri }}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}

                />

            </View>
            <View
                style={{
                    width: 120,
                    height: 140,
                }}>

                <View >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                    }}>
                        {cart.productName}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "gray"

                    }}>
                        {cart.price} €
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "gray"
                        }}>
                        Couleur : {cart.couleur}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "gray"
                    }}>
                        Taille : {cart.taille}
                    </Text>
                </View>


                <View
                    style={{
                        width: 100,
                        height: 30,
                        margin: 4,
                        borderRadius: 10,
                        flexDirection: "row",
                        borderWidth: 1,
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
                        <AntDesign name="minus" size={20} color="black" />

                    </Pressable>


                    <Text
                        style={{
                            fontSize: 18,
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
                        <AntDesign name="plus" size={20} color="black" />
                    </Pressable>

                </View>

            </View>

        </View>
    )
}

export default BasketSelection