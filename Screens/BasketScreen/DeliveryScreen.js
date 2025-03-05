import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DeliveryTools from '../../Components/DeliveryTools/DeliveryTools';
import DeliveryOptions from '../../Components/DeliveryTools/DeliveryOptions';
import DeliveryValidate from '../../Components/DeliveryTools/DeliveryValidate';
import { useSelector } from 'react-redux';
import { ShippingAddressContext } from '../../Context/ShippingAddressContext';
import { BillingAddressContext } from '../../Context/BillingAddressContext';



const DeliveryScreen = ({ handleViewBasket }) => {


    const route = useRoute()

    const { cart, removeFromCart, calculateTotal, totalStockQuantity } = route.params
    const [selectedOption, setSelectedOption] = useState(null);
    const [storeDelivery, setStoreDelivery] = useState(false)
    const [homeDelivery, setHomeDelivery] = useState(false);
    const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
    const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);

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
        phone: "+33 6 58 18 85 94"
    }

    const { shippingAddresses, addShippingAddress, deleteShippingAddress, setDefaultShippingAddress } = useContext(ShippingAddressContext);
    const { billingAddresses, addBillingAddress, deleteBillingAddress, setDefaultBillingAddress } = useContext(BillingAddressContext);



    const myShippingSelected = selectedShippingAddress || shippingAddresses[0];

    const myBillingSelected = useShippingAsBilling
        ? {
            ...myShippingSelected,
            email: selectedBillingAddress?.email || "",
        }
        : selectedBillingAddress || billingAddresses[0];



    const useSameAddress = () => {
        setUseShippingAsBilling(prevState => !prevState);
    };





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

                    selectedOption={selectedOption}
                    billingAddress={billingAddresses}
                    shippingAddresses={shippingAddresses}
                    myBillingSelected={myBillingSelected}
                    myShippingSelected={myShippingSelected}
                    selectedBillingAddress={selectedBillingAddress}
                    selectedShippingAddress={selectedShippingAddress}
                    useAddressCustomer={useShippingAsBilling}

                    setSelectedBillingAddress={setSelectedBillingAddress}
                    setSelectedShippingAddress={setSelectedShippingAddress}
                    setHomeDelivery={setHomeDelivery}
                    setStoreDelivery={setStoreDelivery}
                    handleSelectOption={handleSelectOption}
                    useSameAddress={useSameAddress}

                />
            </ScrollView>


            <DeliveryValidate
                selectedShippingAddress={selectedShippingAddress}
                selectedBillingAddress={selectedBillingAddress}
                selectedOption={selectedOption}
                storeAdress={storeAdress}
                myShippingSelected={myShippingSelected}
                myBillingSelected={myBillingSelected}
                cart={cart}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
                totalStockQuantity={totalStockQuantity}
            />

        </SafeAreaView>
    )
}

export default DeliveryScreen