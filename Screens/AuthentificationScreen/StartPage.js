import { View, Text, ImageBackground, Pressable, Platform, StatusBar, SafeAreaView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

const StartPage = () => {


    let [fontsLoaded] = useFonts({
        MontserratRegular: Montserrat_400Regular,
        MontserratMedium: Montserrat_500Medium,
    });

    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate("Signin")
    }

    const handleRegister = () => {
        navigation.navigate("Register")
    };


    if (!fontsLoaded) {
        return null
    }

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
                    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
                            color: "white",
                            fontFamily: "MontserratMedium"
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
                                width: 350,
                                height: 50,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "black",


                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: "white"
                                }}>
                                SE CONNECTER
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={handleRegister}
                            style={{
                                width: 350,
                                height: 50,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "black",
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
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