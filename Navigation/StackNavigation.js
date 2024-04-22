import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/ProfileScreen';
import SignInScreen from '../Screens/SignInScreen';
import TabNavigation from './TabNavigation';



const Stack = createNativeStackNavigator();



const StackNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>

    )
}

export default StackNavigation