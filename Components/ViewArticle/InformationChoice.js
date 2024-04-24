import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const InformationChoice = ({ article }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 70,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>


            <View
                style={{
                    width: 240,
                    height: 50,
                    margin: 4,
                    paddingLeft: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 2,
                    borderColor: "gray",
                    paddingRight: 10,
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                    }}>
                    {article.couleur}
                </Text>

                <Pressable
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                </Pressable>


            </View>


            <View
                style={{
                    width: 100,
                    height: 50,
                    borderWidth: 2,
                    borderColor: "gray",
                    paddingLeft: 20,
                    paddingRight: 10,
                    margin: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",

                }}>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                    }}>
                    {article.taille}
                </Text>

                <Pressable
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

export default InformationChoice