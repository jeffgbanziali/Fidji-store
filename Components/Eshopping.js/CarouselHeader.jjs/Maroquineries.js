import { View, Text, Image } from 'react-native'
import React from 'react'

const Maroquineries = () => {




    return (
        <View
            style={{
                width: 240,
                height: 180,
                margin: 2,
                alignItems: "center",
                justifyContent: "center",
            }}>



            <Image
                source={{ uri: "https://www.usinenouvelle.com/mediatheque/9/6/3/000722369_896x598_c.jpg" }}
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
                }}>MAROQUINERIE</Text>
        </View>
    )
}

export default Maroquineries