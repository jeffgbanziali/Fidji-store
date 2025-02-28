import { View, Text } from 'react-native'
import React from 'react'
import DeliveryScreen from '../../Screens/BasketScreen/DeliveryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BasketScreen from '../../Screens/BasketScreen/BasketScreen';
import DétailsCommande from '../../Components/PaiementTools/DétailsCommande';


const Stack = createStackNavigator();



const BasketStackNavigation = () => {




    return (

        <Stack.Navigator
            screenOptions={{ presentation: 'modal' }}
        >
            <Stack.Screen name="Basket" component={BasketScreen} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} />
            <Stack.Screen name='DétailsCommande' component={DétailsCommande} />

        </Stack.Navigator>

    )
}

export default BasketStackNavigation