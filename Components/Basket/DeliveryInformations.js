import { View, Text } from 'react-native'
import React from 'react'

const DeliveryInformations = ({ develivery }) => {
    return (
        <View

            style={{
                width: "100%",
                height: 120,
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: (develivery > 0) ? 0 : 1,
                borderColor: "gray",
            }}>
            <View
                style={{
                    width: "90%",
                    flexDirection: "column",

                }}>

                <Text
                    style={{
                        fontSize: 13,
                        paddingTop: 10,
                        textAlign: "left",
                        fontStyle: "italic",
                        fontWeight: "600",
                        color: "black"
                    }}>Livraison offerte partout en France Métropolitaine dès 200€ d'achat
                </Text>


                <Text
                    style={{
                        fontSize: 14,
                        paddingTop: 10,
                        textAlign: "left",
                        fontWeight: "600",
                        fontStyle: "italic",
                        color: "black"
                    }}>Paiement sécurisé
                </Text>

            </View>
        </View>
    )
}

export default DeliveryInformations