import { View, Text, Image } from 'react-native'
import React from 'react'

const ShoesStore = () => {
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
                source={{ uri: "https://www.babouche-maroc.com/images/babouche-couverture3.jpg" }}
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
                }}>CHAUSSURES</Text>
        </View>
    )
}

export default ShoesStore