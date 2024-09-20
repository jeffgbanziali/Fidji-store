import { View, Text } from 'react-native'
import React from 'react'

const DeliveryTools = () => {
    return (
        <View
            style={{
                width: "100%",
                height: 100,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <View
                style={{
                    width: "90%",
                    height: 100,
                    justifyContent: "center",
                }}>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "500",
                        color: "black"
                    }}>
                    Pays de livraison : France
                </Text>

                <Text
                    style={{
                        fontSize: 16,
                        paddingTop: 10,
                        fontWeight: "500",
                        color: "black"
                    }}>
                    Vous pouvez modifier votre pays de livraison dans l'espace mon compte
                </Text>
            </View>
        </View>
    )
}

export default DeliveryTools