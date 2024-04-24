import { View, Text } from 'react-native'
import React from 'react'

const BasketValidate = ({ calculateTotal }) => {




    return (
        <View style={{
            width: "100%",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 1,
            borderColor: "gray"
        }}>
            <View
                style={{
                    width: 200,
                    height: 50,
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
                    Commander - {calculateTotal()} €
                </Text>
            </View>
        </View >
    )
}

export default BasketValidate