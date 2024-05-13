import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, Modal, Alert, } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductsList from '../../Components/PaiementTools/ProductsList';
import DeliveryAdress from '../../Components/PaiementTools/DeliveryAdress';
import TotalCalculate from '../../Components/PaiementTools/TotalCalculate';
import PaiementValidate from '../../Components/PaiementTools/PaiementValidate';
import LoadingValidation from '../../Components/PaiementTools/PaiementMode/LoadingValidation';

const PaiementScreen = ({ }) => {

    const navigation = useNavigation()

    const retourned = () => {
        navigation.goBack();
    }


    const route = useRoute()

    const { cart, addressShipping, facturationAdressStore, isSameAddress, slectedAdress, storeAdress, selectedOption } = route.params



    const calculateTotal = () => {
        // Si le panier est vide, retourne 0
        if (cart.length === 0) {
            return 0;
        }

        // Utilise reduce pour additionner les prix de chaque article dans le panier
        const total = cart.reduce((acc, item) => acc + (item.price * item.stock_quantity), 0);

        // Retourne le total
        return total;
    };



    const shippingCost = calculateTotal() > 200 ? 0 : 8;

    const handlePaiement = calculateTotal() + shippingCost






    return (
        <>


            <SafeAreaView
                style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    backgroundColor: "#f5e1ce"

                }
                }>
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
                />
                <DeliveryAdress
                    addressShipping={addressShipping}
                    facturationAdressStore={facturationAdressStore}
                    isSameAddress={isSameAddress}
                    storeAdress={storeAdress}
                    selectedOption={selectedOption}
                />
                <TotalCalculate
                    handlePaiement={handlePaiement}
                    calculateTotal={calculateTotal}
                />
                <PaiementValidate
                    handlePaiement={handlePaiement}
                    calculateTotal={calculateTotal}
                    cart={cart}
                    addressShipping={addressShipping}
                    facturationAdressStore={facturationAdressStore}
                    isSameAddress={isSameAddress}
                    slectedAdress={slectedAdress}
                    storeAdress={storeAdress}
                />
            </SafeAreaView >



        </>

    )
}

export default PaiementScreen