import { View, Text, Animated, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const CustomersInformations = () => {
    const navigation = useNavigation()

    const goInfo = () => {
        navigation.navigate("CustomerInfo")
    }


    return (
        <Pressable
            onPress={goInfo}
            style={{
                width: "100%",
                height: 50,
                width: "100%",
                height: 60,
                marin: 2,
                paddingLeft: 10,
                backgroundColor: "white",
                justifyContent: "center",
                borderBottomWidth: 1,
                borderColor: "gray",

            }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <AntDesign name="idcard" size={20} color="black" />
                <Text
                    style={{
                        fontSize: 18,
                        paddingLeft: 10,
                        fontWeight: "600",
                        color: "black"
                    }}>CustomersInformations</Text>
            </View>

            <View
                style={{
                    width: 50,
                    height: 50,
                    right: 2,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                </View>

            </View>
        </Pressable>
    )
}

export default CustomersInformations