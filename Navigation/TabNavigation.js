import React from 'react'
import { View } from 'react-native'
import HomeScreen from '../Screens/HomeScreen'
import Profile from '../Screens/ProfileScreen'
import LeavesScreen from '../Screens/LeavesScreen'
import { AntDesign, Entypo, Octicons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Basket from '../Screens/BasketScreen'
import EShoppingScreen from '../Screens/EShoppingScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {



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
                    component={HomeScreen}
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
                    component={EShoppingScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <FontAwesome name="euro" size={24} color="black" />
                            ) : (
                                <FontAwesome name="euro" size={24} color="black" />
                            )
                        ),
                    }} />

                <Tab.Screen
                    name="Panier"
                    component={Basket} options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <Ionicons name="bag-handle-sharp" size={24} color="black" />
                            ) : (
                                <Ionicons name="bag-outline" size={24} color="black" />
                            )
                        ),
                    }} />
                <Tab.Screen
                    name="Compte"
                    component={Profile} options={{
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <FontAwesome name="user" size={24} color="black" />
                            ) : (
                                <AntDesign name="user" size={24} color="black" />
                            )
                        ),
                    }} />
            </Tab.Navigator>

        </View>
    )
}

export default TabNavigation