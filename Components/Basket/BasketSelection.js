import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { isEmpty } from '../../Context/UtilsFunctions';





const BasketSelection = ({ cart, removeFromCart }) => {


    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    console.log(" la quandtité des arricle ", cart.stock_quantity)

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };



    useEffect(() => {
        if (!isEmpty(cart)) {
            setIsLoading(false);
        }
    }, [cart]);

    const removeProduct = (productId) => {
        removeFromCart(productId);
        console.log("Il est supprimé")
    }



    return (
        <View
            style={{
                width: "100%",
                height: 200,
                paddingLeft: 4,
                borderBottomWidth: 1,
                borderColor: "gray",
                flexDirection: "row",
                alignItems: "center",
            }}>
            <View
                style={{
                    width: 100,
                    height: 150,

                    margin: 14,
                }}>
                {
                    isLoading ? (
                        <Image
                            source={require('../../assets/image/backgroundImage.png')}
                            style={{
                                width: '100%',
                                height: "100%",
                                position: "absolute"
                            }
                            } />
                    ) : (
                        <Image
                            source={{ uri: cart.images[0].src }}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}

                        />
                    )}
            </View>

            <View
                style={{
                    width: "100%",
                    height: 140,

                }}>

                <View
                    style={{
                        width: "100%",
                        height: "80%",

                    }} >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "black"
                        }}>
                        {cart.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            marginTop: 5,
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
                        marginTop: 5,
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

            <Pressable
                onPress={() => removeProduct(cart.id)}
                style={{
                    width: 90,
                    position: "absolute",
                    right: 20,
                    height: 30,
                    backgroundColor: "red",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: 8,

                }}>
                <Text
                    style={{
                        color: "white"
                    }}>
                    Retirer
                </Text>
            </Pressable>

        </View>
    )
}

export default BasketSelection