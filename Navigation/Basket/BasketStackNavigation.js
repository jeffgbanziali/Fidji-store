import { View, Text } from 'react-native'
import React from 'react'
import DeliveryScreen from '../../Screens/BasketScreen/DeliveryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BasketScreen from '../../Screens/BasketScreen/BasketScreen';



const Stack = createStackNavigator();



const BasketStackNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{ presentation: 'modal' }}
        >
            <Stack.Screen name="Basket" component={BasketScreen} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} />

        </Stack.Navigator>

    )
}

export default BasketStackNavigation