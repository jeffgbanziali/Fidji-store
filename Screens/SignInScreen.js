import { View, Text, ImageBackground, Pressable, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate("TabNavigation")
    }


    return (
        <ImageBackground
            source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/camelia-2.jpg" }}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}>

                <View
                    style={{
                        width: "98%",
                        height: 200,
                        //backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
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
                            Login
                        </Text>
                    </Pressable>

                </View>


            </View>

        </ImageBackground >
    )
}

export default SignInScreen