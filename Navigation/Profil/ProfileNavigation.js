import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Profile from '../../Screens/ProfileScreen/ProfileScreen';
import SettingScreen from '../../Screens/ProfileScreen/SettingScreen';
import CustomerInformationScreen from '../../Screens/ProfileScreen/CustomerInformationScreen';
import AdressBookScreen from '../../Screens/ProfileScreen/AdressBookScreen';
import ViewOrderScreen from '../../Components/MyProfile/Orders/ViewOrderScreen';
import ViewOrderDetailsScreen from '../../Components/MyProfile/Orders/ViewOrderDetailsScreen';
import OrderSummary from '../../Components/MyProfile/Orders/OrderSummary';
import OrderTracking from '../../Components/MyProfile/Orders/OrderTracking';




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
            <Stack.Screen name="AddressBookScreen" component={AdressBookScreen} />
            <Stack.Screen name='ViewOrderScreen' component={ViewOrderScreen} />
            <Stack.Screen name='ViewOrderDetailsScreen' component={ViewOrderDetailsScreen} />
            <Stack.Screen name='OrderSummary' component={OrderSummary} />
            <Stack.Screen name='OrderTracking' component={OrderTracking} />


        </Stack.Navigator>
    )
}

export default ProfileNavigation