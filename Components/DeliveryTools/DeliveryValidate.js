import { View, Text, Alert, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message';


const DeliveryValidate = ({ cart, removeFromCart, calculateTotal, totalStockQuantity, storeAdress, selectedOption, myShippingSelected, myBillingSelected }) => {

    const navigation = useNavigation()



    const delivery = selectedOption === 2 ? 8 : 0;
    const shippingCost = calculateTotal() > 200 ? 0 : delivery;
    const handlePaiement = calculateTotal() + shippingCost;




    const handleChoice = (
        cart,
        removeFromCart,
        handlePaiement,
        calculateTotal,
        totalStockQuantity,
        storeAdress,
        selectedOption,
        delivery,
        myShippingSelected,
        myBillingSelected
    ) => {
        try {
            if (!cart || cart.length === 0) {
                Alert.alert(
                    "Erreur",
                    "Votre panier est vide.",
                    [{ text: "OK" }]
                );
                return;
            }

            if (!myShippingSelected || Object.keys(myShippingSelected).length === 0) {
                Alert.alert(
                    "Erreur",
                    "Veuillez sélectionner une adresse de livraison.",
                    [{ text: "OK" }]
                );
                return;
            }

            if (!myBillingSelected || Object.keys(myBillingSelected).length === 0) {
                Alert.alert(
                    "Erreur",
                    "Veuillez sélectionner une adresse de facturation.",
                    [{ text: "OK" }]
                );
                return;
            }

            if (selectedOption === null) {
                Alert.alert(
                    "Erreur",
                    "Veuillez choisir un mode de livraison.",
                    [{ text: "OK" }]
                );
                return;
            }

            if (totalStockQuantity <= 0) {
                Alert.alert(
                    "Erreur",
                    "Stock insuffisant pour finaliser l'achat.",
                    [{ text: "OK" }]
                );
                return;
            }

            // ✅ Si tout est valide, navigation vers BuyScreen
            navigation.navigate("BuyScreen", {
                cart,
                removeFromCart,
                handlePaiement,
                calculateTotal,
                totalStockQuantity,
                storeAdress,
                selectedOption,
                delivery,
                myShippingSelected,
                myBillingSelected
            });

        } catch (error) {
            Alert.alert(
                "Erreur",
                error.message,
                [{ text: "OK" }]
            );
        }
    };



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
                <TouchableOpacity
                    onPress={() => handleChoice(
                        cart,
                        removeFromCart,
                        handlePaiement,
                        calculateTotal,
                        totalStockQuantity,
                        storeAdress,
                        selectedOption,
                        delivery,
                        myShippingSelected,
                        myBillingSelected
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
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default DeliveryValidate