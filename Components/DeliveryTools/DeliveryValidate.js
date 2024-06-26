import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DeliveryValidate = ({ cart, calculateTotal, totalStockQuantity, addressShipping, facturationAdressStore, isSameAddress,slectedAdress, storeAdress, selectedOption }) => {

    const navigation = useNavigation()





    const shippingCost = calculateTotal() > 200 ? 0 : 8;

    const handlePaiement = calculateTotal() + shippingCost


    const handleChoice = (cart, handlePaiement, calculateTotal, totalStockQuantity, addressShipping, facturationAdressStore, isSameAddress, slectedAdress, storeAdress, selectedOption) => {


        navigation.navigate("BuyScreen", { cart, handlePaiement, calculateTotal, totalStockQuantity, addressShipping, facturationAdressStore, isSameAddress, slectedAdress,storeAdress, selectedOption })

    }

    return (
        <View
            style={{
                width: "100%",
                height: 120,
                position: "absolute",
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5e1ce"

            }}>
            <View
                style={{
                    width: "100%",
                    height: "50%",
                    justifyContent: "space-evenly",
                    alignItems: "center",

                }}>
                <View
                    style={{
                        width: "95%",
                        flexDirection: "row",
                        justifyContent: "space-between",

                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "black"
                        }}>
                        Sous total
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "black"
                        }}>
                        {calculateTotal()} €
                    </Text>
                </View>
                <View

                    style={{
                        width: "95%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "black"
                        }}>
                        Livraison estimée
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "black"
                        }}>
                        {shippingCost} €
                    </Text>

                </View>
            </View>
            <View
                style={{
                    width: "100%",
                    height: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopWidth: 1,
                    borderColor: "gray",
                }}>
                <Pressable
                    onPress={() => handleChoice(
                        cart,
                        handlePaiement,
                        calculateTotal,
                        totalStockQuantity,
                        addressShipping,
                        facturationAdressStore,
                        isSameAddress,
                        slectedAdress,
                        storeAdress,
                        selectedOption
                    )}

                    style={{
                        width: 200,
                        height: 40,
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
                        Commander - {handlePaiement} €
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default DeliveryValidate