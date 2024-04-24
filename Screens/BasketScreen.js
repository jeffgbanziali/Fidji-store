import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderBasket from '../Components/Basket/HeaderBasket';
import BasketArticleList from '../Components/Basket/BasketArticleList';
import DeliveryInformations from '../Components/Basket/DeliveryInformations';
import { UserData } from "../DataFictifs/UserData"
import BasketSelection from '../Components/Basket/BasketSelection';
import BasketValidate from '../Components/Basket/BasketValidate';
import TotalBasket from '../Components/Basket/TotalBasket';



const BasketScreen = ({ handleViewBasket }) => {




    // Calcule la somme totale des éléments dans le panier
    const calculateTotal = () => {
        // Si le panier est vide, retourne 0
        if (UserData.cart.length === 0) {
            return 0;
        }

        // Utilise reduce pour additionner les prix de chaque article dans le panier
        const total = UserData.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        // Retourne le total
        return total;
    };


    const navigation = useNavigation()



    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            }}>
            <HeaderBasket handleViewBasket={handleViewBasket} />

            {
                UserData && UserData.cart.length > 0 ? (
                    <>

                        <FlatList
                            data={UserData.cart}
                            keyExtractor={(cart) => cart.productId.toString()}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item: cart }) => (
                                <BasketSelection cart={cart} />

                            )}
                            ListHeaderComponent={() => (
                                <>
                                    <View
                                        style={{
                                            width: "100%",
                                            height: 40,
                                            alignItems: "center",
                                            flexDirection: "row",
                                            paddingLeft: 20,
                                        }}>

                                        <Text style={{
                                            fontSize: 26,
                                            fontWeight: "bold"
                                        }}>
                                            LIVRAISON
                                        </Text>

                                        <View
                                            style={{
                                                paddingLeft: 6,
                                                alignItems: "center",


                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    paddingTop: 5,
                                                    color: "gray",
                                                    fontWeight: "600"
                                                }}>
                                                ({UserData.cart.length} Article)
                                            </Text>
                                        </View>

                                    </View>
                                </>
                            )}
                            ListFooterComponent={() => (
                                <>
                                    <DeliveryInformations develivery={UserData.cart.length} />
                                    <TotalBasket calculateTotal={calculateTotal} />
                                </>
                            )}

                        />

                        <BasketValidate calculateTotal={calculateTotal} />

                    </>


                ) : (
                    <>
                        <BasketArticleList />
                        <DeliveryInformations />
                    </>


                )

            }
        </SafeAreaView>
    )
}

export default BasketScreen