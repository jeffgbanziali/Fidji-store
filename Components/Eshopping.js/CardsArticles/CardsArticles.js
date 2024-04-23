import { View, Text, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons, Fontisto } from '@expo/vector-icons';

const CardsArticles = ({ item }) => {
    return (
        <View

            style={{
                width: 200,
                height: 380,
                borderColor: "gray"

            }}>

            <View
                style={{
                    width: "100%",
                    height: 300,
                    alignItems: "center",
                }}>
                <Image
                    source={{ uri: item.image }}
                    style={{
                        width: '100%',
                        height: "100%",
                        position: "absolute"
                    }
                    } />

            </View>


            <Text
                style={{
                    alignItems: "center",
                    paddingTop: 10,
                    paddingLeft: 10,
                    fontSize: 18,
                    fontWeight: "600",
                }}>
                {item.title}
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    width: "100%",
                    paddingTop: 10,
                    justifyContent: "space-between"

                }}>
                <Text
                    style={{
                        paddingLeft: 10,
                        alignItems: "center",
                    }}
                >
                    {item.price} €
                </Text>

                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        paddingRight: 10,
                        justifyContent: "center"
                    }}>
                    <Fontisto name="heart-alt" size={16} color="black" />

                </View>
            </View>


        </View>
    )
}

export default CardsArticles