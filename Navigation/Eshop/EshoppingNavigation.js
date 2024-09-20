import { View, Text } from 'react-native'
import React from 'react'
import EShoppingScreen from '../../Screens/EShoppingScreen/EShoppingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const EshoppingNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Eshoping" component={EShoppingScreen} />

        </Stack.Navigator>
    )
}

export default EshoppingNavigation