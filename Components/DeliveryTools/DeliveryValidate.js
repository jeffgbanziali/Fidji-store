import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DeliveryValidate = () => {

    const navigation = useNavigation()


    const handleChoice = () => {
        navigation.navigate("Delivery")
        console.warn("gogogogoog")
    }


    return (
        <View
            style={{
                width: "100%",
                height: 140,
                position: "absolute",
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: 1,
                borderColor: "gray",
            }}>
            <View
                style={{
                    width: "100%",
                    height: "40%",
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
                        €
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
                            fontWeight: "700",
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
                        0 €
                    </Text>

                </View>
            </View>
            <View
                style={{
                    width: "100%",
                    height: "60%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopWidth: 1,
                    borderColor: "gray",
                }}>
                <Pressable
                    onPress={handleChoice}
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
                        Commander -  €
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default DeliveryValidate