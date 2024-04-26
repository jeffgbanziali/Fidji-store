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
                backgroundColor: "red"
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/pull-salome-1.jpg" }}
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