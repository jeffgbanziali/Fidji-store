import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DeliveryTools from '../../Components/DeliveryTools/DeliveryTools';
import DeliveryOptions from '../../Components/DeliveryTools/DeliveryOptions';
import DeliveryValidate from '../../Components/DeliveryTools/DeliveryValidate';



const DeliveryScreen = ({ handleViewBasket }) => {


    const route = useRoute()

    const { cart, calculateTotal } = route.params


    console.log("Affiche moi tout mon panier", cart)
    console.log("Affiche moi la totalité", calculateTotal())

    const retourned = () => {
        navigation.goBack();
    }


    const navigation = useNavigation()



    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                backgroundColor: "#f5e1ce"

            }}>
            <ScrollView>
                <View
                    style={{
                        width: "100%",
                        height: 40,
                        marginBottom: 6,
                        alignItems: "center",
                        justifyContent: "center",


                    }}>

                    <Pressable
                        onPress={retourned}
                        style={{
                            width: 50,
                            height: 50,
                            left: 2,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <AntDesign name="left" size={24} color="black" />
                    </Pressable>

                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "500",
                            color: "black"
                        }} >
                        Étape 2/4 - Livraison
                    </Text>


                    <Pressable
                        style={{
                            width: 50,
                            height: 50,
                            right: 2,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <MaterialCommunityIcons name="message-question-outline" size={26} color="black" />
                    </Pressable>



                </View>
                <DeliveryTools />
                <DeliveryOptions />
            </ScrollView>


            <DeliveryValidate calculateTotal={calculateTotal} />

        </SafeAreaView>
    )
}

export default DeliveryScreen