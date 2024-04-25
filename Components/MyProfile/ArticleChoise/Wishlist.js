import { View, Text, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import { SimpleLineIcons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Wishlist = ({ wishlist }) => {


    const navigation = useNavigation()








    const renderItem = ({ item }) => {

        const showArticle = () => {
            navigation.navigate("ViewArticleScreen", { article: item })
        }



        return (
            <View

                style={{
                    width: 180,
                    height: "100%",
                    margin: 4

                }}>

                <Pressable
                    onPress={() => showArticle(item)}
                    style={{
                        width: "100%",
                        height: 240,
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

                </Pressable>



                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        paddingTop: 4,
                        justifyContent: "space-between"
                    }}>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                        <Text
                            style={{
                                alignItems: "center",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            {item.productName}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            paddingRight: 8,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Fontisto name="heart-alt" size={14} color="black" />

                    </View>

                </View>
                <Text
                    style={{
                        alignItems: "center",
                        fontWeight: "600",
                        color: "gray",
                        fontSize: 14
                    }}
                >
                    {item.price} €
                </Text>

            </View>
        )
    }

    return (
        <View
            style={{
                width: "100%",
                height: 320,
                paddingLeft: 10,
                justifyContent: "center",
            }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={wishlist}
                renderItem={renderItem}
                keyExtractor={item => item.productId.toString()}

            />
        </View>
    )
}

export default Wishlist