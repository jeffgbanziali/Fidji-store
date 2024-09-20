import { View, Text, Image } from 'react-native'
import React from 'react'

const PaymentTools = () => {
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
                    width: 220,
                    height: 20,
                    backgroundColor: "#f5e1ce",
                    position: "absolute",
                    zIndex: 2,
                    top: 10,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "black"
                    }} >
                    GUARANTEED SAFE CHECKOUT
                </Text>
            </View>

            <View
                style={{
                    width: 320,
                    height: 60,
                    borderWidth: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                <View
                    style={{
                        width: 50,
                        height: 40,
                    }}>
                    <Image
                        source={{ uri: "https://www.icone-png.com/png/51/51390.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 40,
                    }}>
                    <Image
                        source={{ uri: "https://www.icone-png.com/png/51/51383.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 40,
                    }}>
                    <Image
                        source={{ uri: "https://www.icone-png.com/png/38/37776.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 40,
                    }}>
                    <Image
                        source={{ uri: "https://www.icone-png.com/png/51/51403.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 40,
                    }}>
                    <Image
                        source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/stripe-icon.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </View>
                <View
                    style={{
                        width: 50,
                        height: 40,
                    }}>
                    <Image
                        source={{ uri: "https://www.icone-png.com/png/51/51417.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </View>

            </View>

        </View >
    )
}

export default PaymentTools