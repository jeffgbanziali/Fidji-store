import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ActivityIndicator, Dimensions, FlatList, Animated, Easing, StatusBar } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import CardsArticles from '../../Components/Eshopping.js/CardsArticles/CardsArticles';
import Modal from "react-native-modal";
import BasketScreen from '../BasketScreen/BasketScreen';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getShirt } from '../../ReduxActions/products.actions';
import { isEmpty } from '../../Context/UtilsFunctions';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';





const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const ListOfArtifclesByCatgories = () => {


    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);

    const { cart } = useContext(AuthContext)

    const [loading, setLoading] = useState(true);

    const retourned = () => {
        navigation.goBack();
    }


    const route = useRoute();
    const { categoryId, categoryName } = route.params;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsByCategory();
    }, [categoryName]);

    const fetchProductsByCategory = async () => {
        if (!categoryId) {
            console.error("🚨 ID de catégorie manquant !");
            return;
        }

        console.log("📌 Récupération des produits pour la catégorie :", categoryId);

        try {
            const response = await axios.get(`${APP_API_URL}/wc/v3/products`, {
                params: {
                    per_page: 100, // Récupère jusqu'à 100 produits
                    status: "publish",
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY
                }
            });

            // 🔥 Filtrage des produits localement
            const filteredProducts = response.data.filter((item) =>
                item.categories.some((cat) => cat.id === Number(categoryId))
            );

            console.log("✅ Produits trouvés après filtrage :", filteredProducts);

            setProducts(filteredProducts);
            setLoading(false);
        } catch (error) {
            console.error("❌ Erreur lors de la récupération des produits :", error.response?.data || error.message);
            setLoading(false);
        }
    };




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
                    {categoryName}
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

                            data={products}
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

export default ListOfArtifclesByCatgories