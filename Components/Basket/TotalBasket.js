import { View, Text } from 'react-native'
import React from 'react'

const TotalBasket = ({ calculateTotal }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 70,
                justifyContent: "space-evenly",
                alignItems: "center",
                borderTopWidth: 1,
                borderColor: "gray"
            }}>
            <View
                style={{
                    width: "95%",
                    flexDirection: "row",
                    justifyContent: "space-between",

                }}>
                <Text
                    style={{
                        fontSize: 18,
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
                        fontSize: 18,
                        fontWeight: "700",
                        color: "black"
                    }}>
                    Livraison
                </Text>

                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "black"
                    }}>
                    0 €
                </Text>

            </View>
        </View>
    )
}

export default TotalBasket