import { View, Text } from 'react-native'
import React from 'react'

const HeaderPower = () => {
    return (
        <View
            style={{
                width: "100%",
                height: 50,
                marginBottom: 6,
                justifyContent: "center",
            }}>
            <Text
                style={{
                    fontSize: 24,
                    paddingLeft: 20,
                    fontWeight: "500",
                    color: "black"
                }} >
                Vos coups de cœur
            </Text>
        </View>
    )
}

export default HeaderPower