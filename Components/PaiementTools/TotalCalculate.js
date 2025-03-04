import { View, Text } from 'react-native'
import React from 'react'

const TotalCalculate = ({ shippingCost, calculateTotal }) => {




    return (
        <View
            style={{
                width: "100%",
                height: 80,
                justifyContent: "space-evenly",
                alignItems: "center",
                borderTopWidth: 1,
                borderColor: "gray",

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
                        fontWeight: "600",
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
                    Livraison estimé
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
    )
}

export default TotalCalculate