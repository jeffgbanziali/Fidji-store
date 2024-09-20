import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const JacketsAndCoats = () => {


    const navigation = useNavigation()



    const showLister = () => {
        navigation.navigate("Denim")

    }


    return (
        <>
            <Pressable
                onPress={showLister}

                style={{
                    width: "100%",
                    height: 60,
                    marin: 2,
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>

                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        color: "black"
                    }}>Vestes & Manteaux</Text>


                <View
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />

                </View >

            </Pressable>





        </>

    )

}

export default JacketsAndCoats