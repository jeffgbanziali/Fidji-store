import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SimpleLineIcons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CardsArticles = ({ item }) => {

    const navigation = useNavigation()

    const showArticle = () => {
        navigation.navigate("ViewArticleScreen", { article: item })
    }




    return (
        <View

            style={{
                width: 200,
                height: 380,
                borderColor: "gray"

            }}>

            <Pressable
                onPress={() => showArticle(item)}
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

            </Pressable>

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