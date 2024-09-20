import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DeliveryTools from '../../Components/DeliveryTools/DeliveryTools';
import DeliveryOptions from '../../Components/DeliveryTools/DeliveryOptions';
import DeliveryValidate from '../../Components/DeliveryTools/DeliveryValidate';
import { useSelector } from 'react-redux';



const DeliveryScreen = ({ handleViewBasket }) => {


    const route = useRoute()

    const { cart, calculateTotal, totalStockQuantity } = route.params
    const [selectedOption, setSelectedOption] = useState(null);
    const [storeDelivery, setStoreDelivery] = useState(false)
    const [homeDelivery, setHomeDelivery] = useState(false);
    const userData = useSelector((state) => state.userReducer)
    const [useAddressCustomer, setUSeSameAddressCustomer] = useState(null)
    const navigation = useNavigation()



    const handleSelectOption = (option) => {
        setSelectedOption(option);
        if (option === 1) {
            setStoreDelivery(true);
            setHomeDelivery(false);
        } else if (option === 2) {
            setHomeDelivery(true);
            setStoreDelivery(false);
        } else {
            setStoreDelivery(false);
            setHomeDelivery(false);
        }
    };


    const retourned = () => {
        navigation.goBack();
    }

    const storeAdress = {
        company: "Boutique FIDJI",
        address_1: "25 rue des martyrs",
        address_2: "",
        city: "Paris",
        postcode: "75009",
        country: "France",
        phone: "00000000000"
    }





    const addressShipping = selectedOption === 2 ? userData.customerData.shipping : storeAdress



    console.log('Selectedopyion', selectedOption)
    const shippingAddress = userData.customerData.shipping
    const billingAddress = userData.customerData.billing

    const sameAddress =
        billingAddress.first_name === shippingAddress.first_name &&
        billingAddress.last_name === shippingAddress.last_name &&
        billingAddress.company === shippingAddress.company &&
        billingAddress.address_1 === shippingAddress.address_1 &&
        billingAddress.address_2 === shippingAddress.address_2 &&
        billingAddress.city === shippingAddress.city &&
        billingAddress.country === shippingAddress.country &&
        billingAddress.state === shippingAddress.state &&
        billingAddress.postcode === shippingAddress.postcode;




    const slectedAdress = sameAddress ? billingAddress : storeAdress


    const facturationAdressStore = selectedOption === 1 && userData.customerData.billing



    const useSameAddress = () => {
        setUSeSameAddressCustomer(!useAddressCustomer)
    }


    const isSameAddress = useAddressCustomer && slectedAdress



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
                <DeliveryOptions
                    storeDelivery={storeDelivery}
                    homeDelivery={homeDelivery}
                    setHomeDelivery={setHomeDelivery}
                    setStoreDelivery={setStoreDelivery}
                    selectedOption={selectedOption}
                    handleSelectOption={handleSelectOption}
                    useAddressCustomer={useAddressCustomer}
                    slectedAdress={slectedAdress}
                    storeAdress={storeAdress}
                    useSameAddress={useSameAddress}

                />
            </ScrollView>


            <DeliveryValidate
                isSameAddress={isSameAddress}
                addressShipping={addressShipping}
                selectedOption={selectedOption}
                storeAdress={storeAdress}
                facturationAdressStore={facturationAdressStore}
                cart={cart}
                calculateTotal={calculateTotal}
                slectedAdress={slectedAdress}
                totalStockQuantity={totalStockQuantity}
            />

        </SafeAreaView>
    )
}

export default DeliveryScreen