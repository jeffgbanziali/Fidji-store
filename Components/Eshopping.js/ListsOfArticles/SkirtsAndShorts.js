import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SkirtsAndShorts = () => {



    const navigation = useNavigation()



    const showLister = () => {
        navigation.navigate("Denim")

    }

    return (
        <>
            <View
                style={{
                    width: "100%",
                    height: 60,
                    marin: 2,
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>

                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "600",
                        color: "black"
                    }}>Jupes & Shorts</Text>


                <Pressable
                    onPress={showLister}
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                </Pressable>


            </View>



        </>

    )

}

export default SkirtsAndShorts