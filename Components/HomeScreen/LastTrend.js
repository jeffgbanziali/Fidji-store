import { View, Text, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const LastTrend = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 1200,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <View
                style={{
                    width: '80%',
                    height: "10%",
                    alignItems: "center",
                    //backgroundColor: "red",
                    justifyContent: "space-evenly",
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: "center",
                        color: "black"
                    }}>
                    LES DERNIÈRES TENDANCES
                </Text>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "600",
                        textAlign: "center",
                        color: "black"
                    }}>
                    À LA UNE EN CE MOMENT
                </Text>
            </View>

            <View
                style={{
                    width: '100%',
                    height: "90%",
                    alignItems: "center",
                    justifyContent: "space-evenly",


                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: "70%",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        backgroundColor: "red"


                    }}>
                    <Image
                        source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/tee-shirt-oceane-2.jpg" }}
                        style={{
                            width: '100%',
                            height: "100%",
                        }
                        } />

                </View>
                <View
                    style={{
                        width: '100%',
                        height: "30%",
                        alignItems: "center",


                    }}>
                    <View
                        style={{
                            width: '90%',
                            alignItems: "flex-start",
                            paddingTop: 10,

                        }}>
                        <Text
                            style={{
                                fontSize: 30,
                                textAlign: "center",
                                fontWeight: "600",
                                color: "black"
                            }}>
                            Tee-Short OCEANE
                        </Text>
                        <Text
                            style={{
                                fontSize: 25,
                                paddingTop: 10,
                                textAlign: "justify",
                                fontWeight: "400",
                                color: "black"
                            }}>
                            Découvrez notre T-shirt OCEANE, un indispensable de votre look. Le basique parfait pour composer vos tenues estivales.
                        </Text>
                        <Text
                            style={{
                                fontSize: 25,
                                paddingTop: 10,
                                textAlign: "justify",
                                fontWeight: "600",
                                color: "black"
                            }}>
                            59,00 € TTC
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 300,
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 15,
                            backgroundColor: "black",
                            flexDirection: "row",
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: "justify",
                                fontWeight: "600",
                                color: "white",
                                paddingRight: 10,

                            }}>
                            ACHETER MAINTENANT
                        </Text>
                        <MaterialIcons name="local-grocery-store" size={18} color="white" />
                    </View>


                </View>
            </View>
        </View>
    )
}

export default LastTrend