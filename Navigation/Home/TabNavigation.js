import React, { useContext, useState } from 'react'
import { Animated, Easing, Text, Image, Pressable, View } from 'react-native'
import { AntDesign, Entypo, Octicons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Modal from "react-native-modal";
import StackNavigation from './StackNavigation'
import ProfileNavigation from '../Profil/ProfileNavigation';
import BasketScreen from '../../Screens/BasketScreen/BasketScreen';
import LeavesScreen from "../../Screens/ProfileScreen/LeavesScreen"
import EshoppingNavigation from '../Eshop/EshoppingNavigation';
import { AuthContext } from '../../Context/AuthContext';



const Tab = createBottomTabNavigator();



const TabNavigation = () => {



    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);


    const { cart } = useContext(AuthContext)




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
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "white"
                    },
                    headerShown: false,
                    tabBarActiveTintColor: "white",
                    tabBarLabelStyle: {
                        color: "black"
                    },

                }}
            >
                <Tab.Screen
                    name="Accueil"
                    component={StackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <MaterialCommunityIcons name="home-variant" size={28} color="black" />
                            ) : (
                                <Octicons name="home" size={24} color="black" />
                            )
                        ),
                    }}
                />
                <Tab.Screen
                    name="Journal"
                    component={LeavesScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <Ionicons name="leaf" size={24} color="black" />
                            ) : (
                                <Ionicons name="leaf-outline" size={24} color="black" />
                            )
                        ),
                    }}
                />
                <Tab.Screen
                    name="E-shop"
                    component={EshoppingNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <Image
                                    source={require('../../assets/image/1.jpg')}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 100,
                                    }}

                                />
                            ) : (
                                <Image
                                    source={require('../../assets/image/1.jpg')}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 100,
                                    }}

                                />
                            )
                        ),
                    }} />

                <Tab.Screen
                    name="Panier"
                    component={BasketScreen} options={{
                        tabBarIcon: ({ focused }) => (

                            <Pressable onPress={handleViewBasket}>
                                <View
                                    style={{
                                        width: 20,
                                        height: 20,
                                        right: 5,
                                        left: 2,
                                        top: 5,
                                        borderRadius: 100,
                                        position: "absolute",
                                        alignItems: "center",
                                        //backgroundColor: "black",
                                        justifyContent: "center"
                                    }}>

                                    <Text
                                        style={{
                                            fontSize: 8,
                                            fontWeight: "500",
                                            color: "black"
                                        }} >
                                        {cart.length}
                                    </Text>
                                </View>
                                {focused ? (
                                    <Ionicons name="bag-handle-sharp" size={24} color="black" />
                                ) : (
                                    <Ionicons name="bag-outline" size={24} color="black" />
                                )}
                            </Pressable>
                        ),

                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                        },
                    })}

                />
                <Tab.Screen
                    name="Compte"
                    component={ProfileNavigation} options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <FontAwesome name="user" size={24} color="black" />
                            ) : (
                                <AntDesign name="user" size={24} color="black" />
                            )
                        ),
                    }} />
            </Tab.Navigator>


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

        </View>
    )
}

export default TabNavigation