import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SignInScreen from '../../Screens/AuthentificationScreen/SignInScreen';
import RegisterScreen from '../../Screens/AuthentificationScreen/RegisterScreen';
import StartPage from '../../Screens/AuthentificationScreen/StartPage';
import AfterRegisterScreen from '../../Screens/AuthentificationScreen/AfterRegisterScreen';

const Stack = createNativeStackNavigator();



const FirstNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="Signin" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Adress" component={AfterRegisterScreen} />



        </Stack.Navigator>

    )
}

export default FirstNavigation