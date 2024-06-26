import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ActivityIndicator, Dimensions, FlatList, Animated, Easing, StatusBar } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardsArticles from '../../Components/Eshopping.js/CardsArticles/CardsArticles';
import Modal from "react-native-modal";
import BasketScreen from '../BasketScreen/BasketScreen';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getShirt } from '../../ReduxActions/products.actions';
import { isEmpty } from '../../Context/UtilsFunctions';
import { AuthContext } from '../../Context/AuthContext';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const ShirtScreen = () => {


    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);

    const { cart } = useContext(AuthContext)

    const [loading, setLoading] = useState(true);
    
    const retourned = () => {
        navigation.goBack();
    }

    const allShort = useSelector(state => state.productsReducer.shirts);




    useEffect(() => {
        dispatch(getShirt());
    }, [dispatch]);


    useEffect(() => {
        if (!isEmpty(allShort)) {
            setLoading(false);
        }
    }, [allShort]);






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



    const bottomTabHeight = useBottomTabBarHeight();









    return (
        <SafeAreaView
            style={{
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                alignItems: "center",
                //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,


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
                    CHEMISES
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
                            {cart.length}
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

                            data={allShort}
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

export default ShirtScreen