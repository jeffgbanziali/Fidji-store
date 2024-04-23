import { View, Text, Dimensions, Pressable, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';



const Header = () => {

    const navigation = useNavigation()


    const retourned = () => {
        navigation.goBack("Start")
    }



    return (
        <View
            style={{
                width: "100%",
                height: 50,
                zIndex: 2,
                alignItems: "center",
                justifyContent: "center",


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

            <Pressable
                style={{
                    width: 50,
                    height: 50,
                    right: 2,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        right: 2,
                        top: 2,
                        borderRadius: 100,
                        position: "absolute",
                        alignItems: "center",
                        backgroundColor: "black",
                        justifyContent: "center"
                    }}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: "white"
                        }} >
                        0
                    </Text>
                </View>

                <SimpleLineIcons name="basket" size={26} color="black" />
            </Pressable>

        </View>
    )
}

export default Header