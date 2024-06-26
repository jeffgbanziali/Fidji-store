import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Profile from '../../Screens/ProfileScreen/ProfileScreen';
import SettingScreen from '../../Screens/ProfileScreen/SettingScreen';
import CustomerInformationScreen from '../../Screens/ProfileScreen/CustomerInformationScreen';




const Stack = createNativeStackNavigator();






const ProfileNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="CustomerInfo" component={CustomerInformationScreen} />

        </Stack.Navigator>
    )
}

export default ProfileNavigation