import { View, Text, Image } from 'react-native'
import React from 'react'

const Sweatshirts = () => {
    return (
        <View
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
        </View >
    )
}

export default Sweatshirts