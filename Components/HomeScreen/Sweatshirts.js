import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Sweatshirts = () => {

    const navigation = useNavigation()


    const handleGoToSweat = () => {
        navigation.navigate("SweatCategory")
    }




    return (
        <Pressable
            onPress={handleGoToSweat}
            style={{
                width: '100%',
                height: 250,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.fr/wp-content/uploads/2024/11/sweat-ruffus-leopard-4.jpg" }}
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
                SWEATSHIRTS
            </Text>
        </Pressable >
    )
}

export default Sweatshirts