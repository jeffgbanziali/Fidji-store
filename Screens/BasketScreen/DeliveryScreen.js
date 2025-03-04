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
    const userData = useSelector((state) => state.userReducer)
    const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);

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

    const { shippingAddresses, addShippingAddress, deleteShippingAddress, setDefaultShippingAddress } = useContext(ShippingAddressContext);
    const { billingAddresses, addBillingAddress, deleteBillingAddress, setDefaultBillingAddress } = useContext(BillingAddressContext);


    const addressShipping = selectedOption === 2 ? shippingAddresses : storeAdress

    const defaultBillingAddress = Array.isArray(billingAddresses) && billingAddresses.length > 0
        ? billingAddresses[0]
        : null;

    const defaultShippingAddress = Array.isArray(shippingAddresses) && shippingAddresses.length > 0
        ? shippingAddresses[0]
        : null;

    const sameAddress = defaultBillingAddress && defaultShippingAddress &&
        defaultBillingAddress.first_name === defaultShippingAddress.first_name &&
        defaultBillingAddress.last_name === defaultShippingAddress.last_name &&
        defaultBillingAddress.company === defaultShippingAddress.company &&
        defaultBillingAddress.address_1 === defaultShippingAddress.address_1 &&
        defaultBillingAddress.address_2 === defaultShippingAddress.address_2 &&
        defaultBillingAddress.city === defaultShippingAddress.city &&
        defaultBillingAddress.country === defaultShippingAddress.country &&
        defaultBillingAddress.state === defaultShippingAddress.state &&
        defaultBillingAddress.postcode === defaultShippingAddress.postcode;

    const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);

    const selectedBillingAddressFinal = useShippingAsBilling ? defaultShippingAddress : (selectedBillingAddress || defaultBillingAddress);

    const slectedAdress = selectedBillingAddressFinal || storeAdress;

    const facturationAdressStore = selectedOption === 1 ? userData?.customerData?.billing : null;

    const useSameAddress = () => {
        setUseShippingAsBilling(!useShippingAsBilling);
    };

    const isSameAddress = useShippingAsBilling ? selectedBillingAddressFinal : null;

    console.log('userData', userData)


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
                    selectedBillingAddress={selectedBillingAddress}
                    setSelectedBillingAddress={setSelectedBillingAddress}
                    setSelectedShippingAddress={setSelectedShippingAddress}
                    selectedShippingAddress={selectedShippingAddress}
                    billingAddress={billingAddresses}
                    shippingAddress={shippingAddresses}
                    addressShipping={addressShipping}
                    handleSelectOption={handleSelectOption}
                    useAddressCustomer={useShippingAsBilling}
                    slectedAdress={slectedAdress}
                    storeAdress={storeAdress}
                    useSameAddress={useSameAddress}

                />
            </ScrollView>


            <DeliveryValidate
                isSameAddress={isSameAddress}
                addressShipping={selectedShippingAddress}
                selectedOption={selectedOption}
                storeAdress={storeAdress}
                facturationAdressStore={facturationAdressStore}
                cart={cart}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
                slectedAdress={slectedAdress}
                totalStockQuantity={totalStockQuantity}
            />

        </SafeAreaView>
    )
}

export default DeliveryScreen