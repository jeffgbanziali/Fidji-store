import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CardsArticles = ({ item }) => {

    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true);
    const showArticle = () => {
        navigation.navigate("ViewArticleScreen", { article: item })
    }


    useEffect(() => {
        if (item.images && item.images.length > 0) {
            setIsLoading(false);
        }
    }, [item]);




    return (
        <View

            style={{
                width: 180,
                height: 340,
                margin: 2,

            }}>
            <View
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    width: 40,
                    height: 40,
                    backgroundColor: "white",
                    zIndex: 3,
                    top: 2,
                    right: 10,
                    borderRadius: 100,
                    justifyContent: "center"
                }}>
                <Fontisto name="heart-alt" size={18} color="black" />

            </View>
            <Pressable
                onPress={() => showArticle(item)}
                style={{
                    width: "100%",
                    height: 260,
                    alignItems: "center",
                    borderRadius: 20,
                }}>


                {
                    isLoading ? (
                        <Image
                            source={require('../../../assets/image/backgroundImage.png')}
                            style={{
                                width: '100%',
                                height: "100%",
                                position: "absolute",
                                borderRadius: 20,

                            }
                            } />
                    ) : (
                        <Image
                            source={{ uri: item.images[0].src }}
                            style={{
                                width: '100%',
                                height: "100%",
                                borderRadius: 20,
                                position: "absolute"
                            }
                            } />
                    )
                }

            </Pressable >

            <Text
                style={{
                    alignItems: "center",
                    paddingTop: 10,
                    fontSize: 13,
                    fontWeight: "500",
                }}>
                {item.name}
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
                        fontSize: 16,
                        alignItems: "center",
                        fontWeight: "bold",

                    }}
                >
                    {item.price || 0} €
                </Text>

            </View>


        </View >
    )
}

export default CardsArticles