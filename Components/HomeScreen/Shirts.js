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
                source={{ uri: "https://boutiquefidji.fr/wp-content/uploads/2024/11/sweat-jackie-bleu-3.jpg" }}
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