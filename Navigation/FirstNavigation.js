import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SignInScreen from '../Screens/SignInScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import TabNavigation from './TabNavigation';
import StartPage from '../Screens/StartPage';

const Stack = createNativeStackNavigator();



const FirstNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />


        </Stack.Navigator>

    )
}

export default FirstNavigation