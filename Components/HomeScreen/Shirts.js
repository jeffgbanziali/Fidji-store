import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'






const Shirts = () => {




    const navigation = useNavigation()


    const handleGoToShirt = () => {
        navigation.navigate("ShirtCategory")
    }




    return (
        <Pressable
            onPress={handleGoToShirt}
            style={{
                width: '100%',
                height: 300,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red"
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2025/03/product_26ba7232-2eaf-4da0-af8f-0e9c4cd1eafa-1.webp" }}
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
                CHEMISES
            </Text>
        </Pressable >
    )
}

export default Shirts