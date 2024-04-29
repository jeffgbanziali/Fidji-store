import { View, Text, SafeAreaView, TextInput, Pressable, ActivityIndicator, Platform, Image, ScrollView, Dimensions, FlatList, Easing, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardsArticles from '../Components/Eshopping.js/CardsArticles/CardsArticles';
import { DataArticles } from "../DataFictifs/DataArticles"
import { UserData } from '../DataFictifs/UserData';
import BasketScreen from './BasketScreen';
import Modal from "react-native-modal";


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const CoatScreen = () => {


    const navigation = useNavigation()



    const retourned = () => {
        navigation.goBack()
    }


    
    const [article, setArticle] = useState([]);


    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);

    const [loading, setLoading] = useState(true);





    useEffect(() => {
        fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=100&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf')
            .then(response => response.json())
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, []);




    const handleViewBasket = () => {
        if (showBasket) {
            Animated.timing(basketHeight, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => setShowBasket(false));
        } else {
            setShowBasket(true);
            Animated.timing(basketHeight, {
                toValue: 200,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    };






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
                    MANTEAUX
                </Text>


                <Pressable
                    onPress={handleViewBasket}
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
                            {UserData.cart.length}
                        </Text>
                    </View>

                    <SimpleLineIcons name="basket" size={26} color="black" />
                </Pressable>

            </View>

            {
                loading ? (
                    <>
                        <View
                            style={{
                                width: "100%",
                                height: "94%",
                                justifyContent: "space-evenly",
                            }}>
                            <ActivityIndicator size="large" color="black" />
                        </View>
                    </>
                ) : (

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
                )}
            <Modal
                isVisible={showBasket}
                onBackdropPress={handleViewBasket}
                style={{ margin: 0, justifyContent: "flex-end" }}
                backdropOpacity={0.5}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                useNativeDriverForBackdrop
            >
                <BasketScreen handleViewBasket={handleViewBasket} />

            </Modal>
        </SafeAreaView>
    )
}


export default CoatScreen