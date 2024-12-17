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
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.fr/wp-content/uploads/2024/11/pull-edmond-l-americaine-ecru-1-1.jpg" }}
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