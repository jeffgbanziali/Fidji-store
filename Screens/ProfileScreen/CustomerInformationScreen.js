import { View, SafeAreaView, Text, Dimensions, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const CustomerInformationScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const bottomTabHeight = useBottomTabBarHeight();

    const navigation = useNavigation();

    const retourned = () => {
        navigation.goBack()

    }

    const userData = useSelector((state) => state.userReducer)

    const data = userData.customerData

    console.log('toi', data.first_name)


    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                backgroundColor: "#f5e1ce"

            }}>
            <View
                style={{
                    width: "100%",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5e1ce"

                }}>

                <Pressable
                    onPress={retourned}
                    style={{
                        width: 50,
                        height: 50,
                        left: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color: "black"
                    }} >
                    Informations personnelles
                </Text>

            </View>

            <View
                style={{
                    width: "100%",
                    height: 300,
                    alignItems: "center",
                    justifyContent:"space-evenly"
                }}>

                <View
                    style={{
                        width: 380,
                        height: 50,
                        borderRadius: 10,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "gray",
                        backgroundColor: "white"

                    }} >

                    <TextInput
                        style={{
                            width: "90%",
                            height: "100%",
                            paddingLeft: 12,
                            fontSize: 18,
                            color: 'black',
                        }}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder={data.username}
                        placeholderTextColor="black"
                        autoCapitalize="none"

                    />



                </View>

                <View
                    style={{
                        width: 380,
                        height: 50,
                        borderRadius: 10,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "gray",
                        backgroundColor: "white"

                    }} >

                    <TextInput
                        style={{
                            width: "90%",
                            height: "100%",
                            paddingLeft: 12,
                            fontSize: 18,
                            color: 'black',
                        }}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder={data.first_name}
                        placeholderTextColor="black"
                        autoCapitalize="none"

                    />



                </View>

                <View
                    style={{
                        width: 380,
                        height: 50,
                        borderRadius: 10,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "gray",
                        backgroundColor: "white"

                    }} >

                    <TextInput
                        style={{
                            width: "90%",
                            height: "100%",
                            paddingLeft: 12,
                            fontSize: 18,
                            color: 'black',
                        }}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder={data.last_name}
                        placeholderTextColor="black"
                        autoCapitalize="none"

                    />



                </View>

                <View
                    style={{
                        width: 380,
                        height: 50,
                        borderRadius: 10,
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "gray",
                        backgroundColor: "white"

                    }} >

                    <TextInput
                        style={{
                            width: "90%",
                            height: "100%",
                            paddingLeft: 12,
                            fontSize: 18,
                            color: 'black',
                        }}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder={data.email}
                        placeholderTextColor="black"
                        autoCapitalize="none"

                    />



                </View>

            </View>




        </SafeAreaView >
    )
}

export default CustomerInformationScreen