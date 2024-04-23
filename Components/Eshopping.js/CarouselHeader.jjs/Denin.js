import { View, Text, Image } from 'react-native'
import React from 'react'

const Denin = () => {
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
                source={{ uri: "https://images.stockx.com/images/Palace-x-Evisu-Denim-Jean-Stone-Wash-2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1681485137?height=78&width=78" }}
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
                }}>DENIM</Text>
        </View>
    )
}

export default Denin