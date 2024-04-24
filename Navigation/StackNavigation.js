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



const Stack = createNativeStackNavigator();



const StackNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="TabNavigation" component={TabNavigation} />

            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="NewArticles" component={NewsArticlesScreen} />
            <Stack.Screen name="ViewArticleScreen" component={ViewArticleScreen} />
        </Stack.Navigator>

    )
}

export default StackNavigation