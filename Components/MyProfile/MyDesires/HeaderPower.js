import { View, Text, Pressable } from 'react-native'
import React from 'react'

const HeaderPower = ({ wishlist }) => {



    
    return (
        <View
            style={{
                width: "100%",
                height: 50,
                marginBottom: 6,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row"
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

            {
                wishlist.length > 0 && (
                    <Pressable
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                paddingRight: 20,
                                fontWeight: "500",
                                color: "black"
                            }} >
                            Voir tout
                        </Text>
                    </Pressable>
                )
            }

        </View >
    )
}

export default HeaderPower