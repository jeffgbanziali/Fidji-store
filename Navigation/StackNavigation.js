import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/ProfileScreen';
import SignInScreen from '../Screens/SignInScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import TabNavigation from './TabNavigation';
import NewsArticlesScreen from '../Screens/NewsArticlesScreen';
import StartPage from '../Screens/StartPage';
import ViewArticleScreen from '../Screens/ViewArticleScreen';
import ShirtScreen from '../Screens/ShirtScreen';
import CoatScreen from '../Screens/CoatScreen';
import PantScreen from '../Screens/PantScreen';
import SweatshirtScreen from '../Screens/SweatshirtScreen';
import TshirtScreen from '../Screens/TshirtScreen';
import EShoppingScreen from '../Screens/EShoppingScreen';
import SettingScreen from '../Screens/SettingScreen';



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
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="NewArticles" component={NewsArticlesScreen} />
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