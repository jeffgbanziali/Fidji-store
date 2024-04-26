import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Pants = () => {




    const navigation = useNavigation()


    const handleGoToPant = () => {
        navigation.navigate("PantCategory")
    }





    return (
        <Pressable
            onPress={handleGoToPant}
            style={{
                width: '100%',
                height: 250,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red"
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/aryan.jpg" }}
                style={{
                    width: '100%',
                    height: "100%",
                    position: "absolute"
                }
                }
            />
            <Text
                style={{
                    fontWeight: "600",
                    color: "white",
                    fontSize: 40
                }}>
                PANTALONS
            </Text>
        </Pressable>
    )
}

export default Pants