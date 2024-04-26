import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardsArticles from '../Components/Eshopping.js/CardsArticles/CardsArticles';
import { DataArticles } from "../DataFictifs/DataArticles"

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const TshirtScreen = () => {


    const navigation = useNavigation()



    const retourned = () => {
        navigation.goBack()
    }



    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch('https://boutiquefidji.com/wp-json/wc/v3/products?category=105&per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf')
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);









    return (
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
                    T-SHIRTS-POLOS
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
                    marginTop: 10,
                    justifyContent: "space-evenly",
                }}>



                <FlatList

                    data={article}
                    renderItem={({ item }) => <CardsArticles item={item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent: 'space-evenly',

                    }}

                />

            </View>
        </SafeAreaView>
    )
}

export default TshirtScreen