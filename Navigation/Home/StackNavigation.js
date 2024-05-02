import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import Profile from '../../Screens/ProfileScreen/ProfileScreen';
import SignInScreen from '../../Screens/AuthentificationScreen/SignInScreen';
import RegisterScreen from '../../Screens/AuthentificationScreen/RegisterScreen';
import NewsArticlesScreen from '../../Screens/HomeScreen/NewsArticlesScreen';
import StartPage from '../../Screens/AuthentificationScreen/StartPage';
import ViewArticleScreen from '../../Screens/ViewArticleScreen/ViewArticleScreen';
import ShirtScreen from '../../Screens/HomeScreen/ShirtScreen';
import CoatScreen from '../../Screens/HomeScreen/CoatScreen';
import PantScreen from '../../Screens/HomeScreen/PantScreen';
import SweatshirtScreen from '../../Screens/HomeScreen/SweatshirtScreen';
import TshirtScreen from '../../Screens/HomeScreen/TshirtScreen';
import SettingScreen from '../../Screens/ProfileScreen/SettingScreen';
import EShoppingScreen from '../../Screens/EShoppingScreen/EShoppingScreen';



const Stack = createNativeStackNavigator();



const StackNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="NewArticles" component={NewsArticlesScreen} />
            <Stack.Screen name="Eshoping" component={EShoppingScreen} />
            <Stack.Screen name="ShirtCategory" component={ShirtScreen} />
            <Stack.Screen name="CoatCategory" component={CoatScreen} />
            <Stack.Screen name="PantCategory" component={PantScreen} />
            <Stack.Screen name="SweatCategory" component={SweatshirtScreen} />
            <Stack.Screen name="TshirtCategory" component={TshirtScreen} />
            <Stack.Screen name="ViewArticleScreen" component={ViewArticleScreen} />
        </Stack.Navigator>

    )
}

export default StackNavigation