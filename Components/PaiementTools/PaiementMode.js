import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';

const PaiementMode = ({ handlePaiementMethod }) => {
    return (
        <View
            style={{
                width: "100%",
                height: "30%",
                backgroundColor: "black",
                alignItems: "center",
            }}>
            <View
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'gray',
                    paddingLeft: 10
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                        color: "white"
                    }}>Mode de paiement
                </Text>
                <Pressable
                    onPress={handlePaiementMethod}
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Entypo name="cross" size={24} color="white" />
                </Pressable>
            </View>


            <Pressable
                style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <View
                    style={{
                        width: 44,
                        height: 28,
                        borderRadius: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                    <Image
                        source={{ uri: "https://icons.veryicon.com/png/o/business/third-party-sharing-payment/apple-pay.png" }}
                        style={{
                            width: 35,
                            height: 35
                        }}
                    />
                </View>

                <Text
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'gray',
                    }}>Apple Pay
                </Text>
            </Pressable>

            <Pressable
                style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <View
                    style={{
                        width: 44,
                        height: 28,
                        borderRadius: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                    <FontAwesome name="credit-card-alt" size={24} color="black" />
                </View>

                <Text
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'gray',
                    }}>Carte bancaire
                </Text>
            </Pressable>

            <Pressable
                style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <View
                    style={{
                        width: 44,
                        height: 28,
                        borderRadius: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                    <Image
                        source={{ uri: "https://w7.pngwing.com/pngs/246/916/png-transparent-computer-icons-logo-paypal-encapsulated-postscript-paypal-blue-angle-logo.png" }}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </View>

                <Text
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'gray',
                    }}>PayPal
                </Text>
            </Pressable>
        </View >
    )
}

export default PaiementMode