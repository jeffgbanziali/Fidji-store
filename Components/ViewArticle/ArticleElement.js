import { View, Text, Dimensions, Pressable, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ArticleElement = ({ article }) => {



    function removeHtmlTags(html) {
        return html.replace(/<[^>]*>/g, '');
    }




    return (
        <>
            <View
                style={{
                    width: "100%",
                    height: 500,
                    backgroundColor: "gray"
                }}>
                <Image
                    source={{ uri: article.images[0].src }}
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
                    height: 80,
                    paddingTop: 10,
                }}>
                <View
                    style={{
                        width: "100%",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                    <View
                        style={{
                            width: "70%",
                            height: "100%",
                            justifyContent: "center",
                        }}>
                        <Text
                            style={{
                                paddingLeft: 20,
                                fontSize: 20,
                                fontWeight: "600",
                            }}>
                            {article.name}
                        </Text>
                    </View>

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
                            {article.price} €
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

            </View>


        </>
    )
}

export default ArticleElement