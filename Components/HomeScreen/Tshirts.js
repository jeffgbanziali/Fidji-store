import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Tshirts = () => {


    const navigation = useNavigation()


    const handleGoToShirt = () => {
       // navigation.navigate("TshirtCategory")
    }



    return (
        <Pressable
            onPress={handleGoToShirt}
            style={{
                width: '100%',
                height: 250,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.fr/wp-content/uploads/2024/11/sweat-ruffus-ecru-chine-3.jpg" }}
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
                T-SHIRTS-POLOS
            </Text>
        </Pressable>
    )
}

export default Tshirts