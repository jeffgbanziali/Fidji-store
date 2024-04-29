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

    console.log("image de mon panier", cart)

    return (
        <View
            style={{
                width: "100%",
                paddingLeft: 4,
                borderBottomWidth: 1,
                borderColor: "gray",
                flexDirection: "row",
                alignItems: "center"
            }}>
            <View
                style={{
                    width: 100,
                    height: 140,
                    margin: 14,
                    backgroundColor: "blue"
                }}>
                <Image
                    source={{ uri: cart.images[0].src }}
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
                        {cart.name}
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
                        Couleur : {cart.attributes[0].options}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "gray"
                    }}>
                        Taille : {cart.attributes[1].options}
                    </Text>
                </View>


                <View
                    style={{
                        width: 80,
                        height: 28,
                        paddingLeft: 5,
                        paddingRight: 5,
                        margin: 4,
                        borderRadius: 10,
                        marginTop: 12,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "gray",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>

                    <Pressable
                        onPress={decreaseQuantity}
                        style={{
                            width: 20,
                            height: 20,
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                        <AntDesign name="minus" size={16} color="black" />

                    </Pressable>


                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "600",
                            color: "black"
                        }}>
                        {cart.stock_quantity}
                    </Text>

                    <Pressable
                        onPress={increaseQuantity}
                        style={{
                            width: 20,
                            height: 20,
                            justifyContent: "center",
                            alignItems: "center",

                        }}>
                        <AntDesign name="plus" size={16} color="black" />
                    </Pressable>

                </View>

            </View>

        </View>
    )
}

export default BasketSelection