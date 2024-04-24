import { View, Text, Dimensions, Pressable, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ArticleElement = ({ article }) => {



    console.log("Bonjour fifa", article)




    return (
        <>
            <View
                style={{
                    width: "100%",
                    height: 500,
                    backgroundColor: "gray"
                }}>
                <Image
                    source={{ uri: article.image }}
                    style={{
                        width: '100%',
                        height: "100%",
                        position: "absolute"
                    }
                    } />

            </View>

            <View
                style={{
                    width: "100%",
                    height: 100,
                    paddingTop: 10,
                }}>
                <View
                    style={{
                        width: "100%",
                        height: 30,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                    <Text
                        style={{
                            paddingLeft: 20,
                            fontSize: 24,
                            fontWeight: "600",
                        }}>
                        {article.title}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingRight: 20,

                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                paddingRight: 10,
                                fontWeight: "400",
                            }}>
                            {article.price}€
                        </Text>
                        <View
                            style={{
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}>
                            <Fontisto name="heart-alt" size={18} color="black" />

                        </View>
                    </View>

                </View>
                <View
                    style={{
                        width: "100%",
                        height: 60,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                    <Text
                        style={{
                            paddingLeft: 20,
                            fontSize: 16,
                            fontWeight: "600",
                            color: "black"
                        }}>
                        {article.description}
                    </Text>
                </View>
            </View>


        </>
    )
}

export default ArticleElement