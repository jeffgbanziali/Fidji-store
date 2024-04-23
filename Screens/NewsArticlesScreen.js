import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardsArticles from '../Components/Eshopping.js/CardsArticles/CardsArticles';
import TabNavigation from "../Navigation/TabNavigation"
import { DataArticles } from "../DataFictifs/DataArticles"


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");




const NewsArticlesScreen = () => {

    const navigation = useNavigation()



    const retourned = () => {
        navigation.goBack("Start")
    }


    return (

        <>
            <SafeAreaView
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
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f5e1ce"


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
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "500",
                            color: "black"
                        }} >
                        NEW IN
                    </Text>


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

                <View
                    style={{
                        width: "100%",
                        height: "94%",
                        justifyContent: "space-evenly",
                    }}>



                    <FlatList
                        style

                        data={DataArticles}
                        renderItem={({ item }) => <CardsArticles item={item} />}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: 'space-evenly',

                        }}
                        ListHeaderComponent={() => (
                            <View
                                style={{
                                    width: "100%",
                                    height: 150,
                                    marginBottom: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <View
                                    style={{
                                        width: "50%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 28,
                                            fontWeight: "600",
                                            textAlign: "center",
                                            color: "black"
                                        }}>
                                        NOUVEAUTÉS & RÉASSORTS
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        width: "80%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        paddingTop: 20
                                    }}>

                                    <Text
                                        style={{
                                            fontSize: 18,
                                            textAlign: "center",
                                            color: "black"
                                        }}>
                                        Nos dernières nouveautés et réassorts sont arrivés sur le site !
                                    </Text>

                                </View>

                            </View>
                        )}
                    />

                </View>

            </SafeAreaView>

        </>

    )
}

export default NewsArticlesScreen