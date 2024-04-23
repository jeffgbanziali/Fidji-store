import { View, Text, ImageBackground, Pressable, SafeAreaView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StartPage = () => {

    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate("Signin")
    }

    const handleRegister = () => {
        navigation.navigate("Register")
    };



    return (
        <ImageBackground
            source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/camelia-2.jpg" }}
            style={{
                width: "100%",
                height: "100%",
            }}
        >

            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>

                <View
                    style={{
                        width: "100%",
                        height: "30%",
                        //backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",


                    }}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "700",
                            color: "white"
                        }}>
                        BOUTIQUE FIDJI
                    </Text>
                </View>

                <View
                    style={{
                        width: "100%",
                        height: "40%",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }} >

                    <View
                        style={{
                            width: "98%",
                            height: 150,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>

                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: "700",
                                color: "white"
                            }}>
                            NOUVELLE COLLECTION
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                paddingTop: 10,
                                fontWeight: "600",
                                color: "white"
                            }}>
                            Découvrir les nouveautés
                        </Text>

                    </View>

                    <View
                        style={{
                            width: "98%",
                            height: 150,
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}>
                        <Pressable
                            onPress={handleLogin}
                            style={{
                                width: 400,
                                height: 60,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "black",


                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "white"
                                }}>
                                SE CONNECTER
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={handleRegister}
                            style={{
                                width: 400,
                                height: 60,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "black",


                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "white"
                                }}>
                                INSCRIPTION
                            </Text>
                        </Pressable>

                    </View>

                </View>

            </SafeAreaView>

        </ImageBackground >
    )
}

export default StartPage