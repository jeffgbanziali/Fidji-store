import { View, Text, Dimensions, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const ViewArticleScreen = () => {



    const route = useRoute();
    const { article } = route.params;



    const navigation = useNavigation()

    console.log("montre toi mon frère", article)



    const retourned = () => {
        navigation.goBack("Start")
    }




    return (
        <View
            style={{
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight,
                alignItems: "center",

            }}>

            <View
                style={{
                    width: "100%",
                    height: 50,
                    zIndex: 2,
                    position: "absolute",
                    top: "6%",
                    alignItems: "center",
                    justifyContent: "center",


                }}>

                <Pressable
                    onPress={retourned}
                    style={{
                        width: 50,
                        height: 50,
                        left: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>

                <Pressable
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            right: 2,
                            top: 2,
                            borderRadius: 100,
                            position: "absolute",
                            alignItems: "center",
                            backgroundColor: "black",
                            justifyContent: "center"
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "500",
                                color: "white"
                            }} >
                            0
                        </Text>
                    </View>

                    <SimpleLineIcons name="basket" size={26} color="black" />
                </Pressable>

            </View>

            <ScrollView
                style={{
                    width: '100%',
                    height: "100%",
                }}>
                <View
                    style={{
                        width: "100%",
                        height: 600,
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


            </ScrollView>
        </View>
    )
}

export default ViewArticleScreen