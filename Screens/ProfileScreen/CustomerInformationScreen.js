import { View, SafeAreaView, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const CustomerInformationScreen = () => {

    const bottomTabHeight = useBottomTabBarHeight();

    const navigation = useNavigation();

    const retourned = () => {
        navigation.goBack()

    }

    const userData = useSelector((state) => state.userReducer)




    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                backgroundColor: "white",
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


        </SafeAreaView >
    )
}

export default CustomerInformationScreen