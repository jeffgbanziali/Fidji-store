import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { isEmpty } from '../../Context/UtilsFunctions';
import { SimpleLineIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { AuthContext } from '../../Context/AuthContext';

const ProductsList = ({ cart, removeFromCart }) => {
    const [isLoading, setIsLoading] = useState(true);



    const removeProduct = (productId) => {
        removeFromCart(productId);
        console.log("Il est supprimé", productId)
    }
    useEffect(() => {
        if (!isEmpty(cart)) {
            setIsLoading(false);
        }
    }, [cart]);



    let totalStockQuantity = 0;

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        totalStockQuantity += product.stock_quantity;
    }

    return (
        <View
            style={{
                width: "100%",
                height: 230,
                borderBottomWidth: 1,
                borderColor: "gray",

            }}>
            <Text
                style={{
                    fontSize: 22,
                    fontWeight: "600",
                    color: "black",
                    paddingLeft: 20,
                }}>
                {totalStockQuantity} Articles
            </Text>
            <View
                style={{
                    width: "100%",
                    height: "90%",
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row",
                }}>
                <FlatList
                    data={cart}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(cart) => cart.id.toString()}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item }) => (

                        <>
                            <Pressable
                                onPress={() => removeProduct(item.id)}
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    position: "absolute",
                                    width: 30,
                                    height: 30,
                                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                                    zIndex: 10,
                                    top: 0,
                                    right: 2,
                                    borderRadius: 100,
                                    justifyContent: "center"
                                }}>
                                <Entypo name="cross" size={24} color="black" />
                            </Pressable>

                            <View
                                style={{
                                    width: 120,
                                    height: 180,
                                    borderRadius: 10,
                                    margin: 4
                                }}>

                                {
                                    isLoading ? (
                                        <Image
                                            source={require('../../assets/image/backgroundImage.png')}
                                            style={{
                                                width: '100%',
                                                height: "100%",
                                                position: "absolute",
                                                borderRadius: 10,
                                            }
                                            } />
                                    ) : (
                                        <Image
                                            source={{ uri: item.images[0].src }}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: 10,
                                            }}

                                        />
                                    )}



                            </View>
                        </>


                    )} />



            </View>
        </View >
    )
}

export default ProductsList