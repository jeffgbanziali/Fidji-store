import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, Fontisto } from '@expo/vector-icons';


const DeliveryCountry = () => {
    return (
        <Pressable
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
                <Fontisto name="money-symbol" size={20} color="black" />
                <Text
                    style={{
                        fontSize: 18,
                        paddingLeft: 10,
                        fontWeight: "600",
                        color: "black"
                    }}>
                    DeliveryCountry
                </Text>
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

                <View >
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                </View>

            </View>
        </Pressable>
    )
}

export default DeliveryCountry