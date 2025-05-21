import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'





const Coats = () => {


    const navigation = useNavigation()


    const handleGoToShirt = () => {
        navigation.navigate("CoatCategory")
    }


    return (
        <Pressable
            onPress={handleGoToShirt}
            style={{
                width: '100%',
                height: 250,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red"
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2025/05/image11.jpeg" }}
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
                Manteaux
            </Text>
        </Pressable >
    )
}

export default Coats