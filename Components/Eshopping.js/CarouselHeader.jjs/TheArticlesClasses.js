import { View, Text, Image } from 'react-native'
import React from 'react'

const TheArtilesClasses = () => {
    return (
        <View
            style={{
                width: 240,
                height: 180,
                margin: 2,
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/pull-sixtine-2-300x300.jpg" }}
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
                    fontSize: 20
                }}>TOP 30</Text>
        </View>
    )
}

export default TheArtilesClasses