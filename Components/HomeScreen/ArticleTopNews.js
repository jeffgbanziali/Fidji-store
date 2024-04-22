import { View, Text, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons, Fontisto } from '@expo/vector-icons';

const ArticleTopNews = ({ item }) => {
    return (
        <View
            key={item.id}
            style={{
                width: 200,
                height: 400,
                marginTop: 60,
                alignItems: "center",
                borderWidth: 2,
                borderColor: "gray"
            }}>

            <View
                style={{
                    width: "100%",
                    height: "35%",
                    alignItems: "center",
                }}>
                <Image
                    source={{ uri: item.imageUri }}
                    style={{
                        width: '100%',
                        height: "100%",
                        position: "absolute"
                    }
                    } />

            </View>


            <Text style={{
                alignItems: "center",
                marginTop: 20,
            }}>
                {item.title}
            </Text>
            <Text
                style={{
                    alignItems: "center",
                    marginTop: 20,
                }}
            >
                {item.price}
            </Text>
            <View
                style={{
                    alignItems: "center",
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                <SimpleLineIcons name="basket" size={24} color="black" />
                <Text style={{
                    paddingLeft: 10,
                    fontSize: 14,
                }}>
                    Choix des options
                </Text>
            </View>
            <View
                style={{
                    width: "70%",
                    alignItems: "center",
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                <Fontisto name="heart-alt" size={16} color="black" />
                <Text style={{
                    paddingLeft: 10,
                    fontSize: 16,
                }}>
                    Ajouter à la liste de souhaits
                </Text>
            </View>

        </View>
    )
}

export default ArticleTopNews