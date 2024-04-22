import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/ProfileScreen';
import SignInScreen from '../Screens/SignInScreen';
import TabNavigation from './TabNavigation';
import NewsArticlesScreen from '../Screens/NewsArticlesScreen';



const Stack = createNativeStackNavigator();



const StackNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="NewArticles" component={NewsArticlesScreen} />
        </Stack.Navigator>

    )
}

export default StackNavigation