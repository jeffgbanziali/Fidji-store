import { View, Text } from 'react-native'
import React from 'react'
import MyDesiresScreen from '../../Screens/ProfileScreen/MyDesiresScreen'
import MyOrders from '../../Screens/ProfileScreen/MyOrders'
import AboutScreen from '../../Screens/AboutScreen/AboutScreen'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const ProfilTabNavigation = () => {



    return (


        <Tab.Navigator>
            <Tab.Screen name="Mes commandes" component={MyOrders} />
            <Tab.Screen name="Mes envies" component={MyDesiresScreen} />
            <Tab.Screen name="À propos" component={AboutScreen} />
        </Tab.Navigator>




    );
}


export default ProfilTabNavigation