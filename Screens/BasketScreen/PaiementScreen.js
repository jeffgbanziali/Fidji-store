import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductsList from '../../Components/PaiementTools/ProductsList';
import DeliveryAdress from '../../Components/PaiementTools/DeliveryAdress';

const PaiementScreen = ({ }) => {

    const navigation = useNavigation()

    const retourned = () => {
        navigation.goBack();
    }


    const route = useRoute()

    const { cart, handlePaiement, totalStockQuantity, addressShipping, facturationAdressStore, isSameAddress } = route.params



    console.log("Panier", cart)
    console.log("total", handlePaiement)
    console.log("voici adress du coup tu te", addressShipping)
    console.log("voici facturation store livraison", facturationAdressStore)
    console.log("voici facturation himelivraison", isSameAddress)




    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                backgroundColor: "#f5e1ce"

            }}>
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
                    Étape 4/4 - Résumé
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

            <ProductsList cart={cart}
                totalStockQuantity={totalStockQuantity}
            />
            <DeliveryAdress
                addressShipping={addressShipping}
                facturationAdressStore={facturationAdressStore}
                isSameAddress={isSameAddress}

            />
        </SafeAreaView>
    )
}

export default PaiementScreen