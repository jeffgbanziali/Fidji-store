import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Eshop = () => {


    const navigation = useNavigation()



    const goToEshop = () => {
        navigation.navigate("Eshoping")
    }



    return (


        <Pressable
            onPress={goToEshop}
            style={{
                width: '100%',
                height: 250,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.fr/wp-content/uploads/2024/11/pull-edmond-ladoree-gris-chine-1.jpg" }}
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
                E-SHOP
            </Text>
        </Pressable>
    )
}

export default Eshop