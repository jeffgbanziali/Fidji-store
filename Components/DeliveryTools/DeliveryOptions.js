import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";
import DeliveryStoreDetails from './DeliveryStoreDetails';
import ChooseAdressBilling from './ChooseAdressBilling';
import ChooseAdressShipping from './ChooseAdressShipping';
import DeliveryShippingDetails from './DeliveryShippingDetails';



const DeliveryOptions = ({ billingAddress, myBillingSelected, shippingAddresses, myShippingSelected, storeDelivery, selectedShippingAddress, selectedBillingAddress, homeDelivery, setSelectedShippingAddress, setSelectedBillingAddress, useAddressCustomer, useSameAddress, selectedOption, handleSelectOption
}) => {

    const [heightAnimation] = useState(new Animated.Value(0));
    const [iconAnimation] = useState(new Animated.Value(0));
    const userData = useSelector((state) => state.userReducer.user)





    const [adressHeight, setAdressHeight] = useState(new Animated.Value(0));
    const [showAdress, setShowAdress] = useState(false);
    const [adressShippingHeight, setAdressShippingHeight] = useState(new Animated.Value(0));
    const [showAdressShipping, setShowAdressShipping] = useState(false);

    const isShippingAddressValid = myShippingSelected && myShippingSelected.address_1;


    const handleViewAddress = () => {
        if (showAdress) {
            Animated.timing(adressHeight, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => setShowAdress(false));
        } else {
            setShowAdress(true);
            Animated.timing(adressHeight, {
                toValue: 200,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    };

    const changeAdressShipping = () => {
        if (showAdressShipping) {
            Animated.timing(adressShippingHeight, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => setShowAdressShipping(false));
        } else {
            setShowAdressShipping(true);
            Animated.timing(adressShippingHeight, {
                toValue: 200,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    };

    useEffect(() => {
        Animated.timing(
            heightAnimation,
            {
                toValue: storeDelivery || !homeDelivery ? 246 : 600,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();

        Animated.timing(
            iconAnimation,
            {
                toValue: storeDelivery || homeDelivery ? 1 : 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();
    }, [storeDelivery, homeDelivery]);


    return (

        <>
            <View style={styles.container}>
                <Text style={styles.title}>Sélectionnez un mode de livraison</Text>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelectOption(1)}
                >
                    <View style={styles.checkboxContainer}>
                        {selectedOption !== 1 ? (
                            <View style={styles.checkbox} />
                        ) : (
                            <View style={[styles.checkbox, styles.checked]} />
                        )}
                    </View>
                    <Text style={styles.optionText}>En boutique - Gratuit</Text>

                </TouchableOpacity>

                <DeliveryStoreDetails
                    heightAnimation={heightAnimation}
                    iconAnimation={iconAnimation}
                    userData={userData}
                    storeDelivery={storeDelivery}
                    handleViewAddress={handleViewAddress}
                    myBillingSelected={myBillingSelected}

                />
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelectOption(2)}
                >
                    <View style={styles.checkboxContainer}>
                        {selectedOption !== 2 ? (
                            <View style={styles.checkbox} />
                        ) : (
                            <View style={[styles.checkbox, styles.checked]} />
                        )}
                    </View>
                    <Text style={styles.optionText}>Livraison à domicile - 8 €</Text>
                </TouchableOpacity>




                <DeliveryShippingDetails
                    heightAnimation={heightAnimation}
                    iconAnimation={iconAnimation}
                    homeDelivery={homeDelivery}
                    userData={userData}
                    selectedBillingAddress={selectedBillingAddress}
                    selectedShippingAddress={selectedShippingAddress}
                    myBillingSelected={myBillingSelected}
                    myShippingSelected={myShippingSelected}
                    useSameAddress={useSameAddress}
                    useAddressCustomer={useAddressCustomer}
                    isSameAddress={useAddressCustomer}
                    handleViewAddress={handleViewAddress}
                    changeAdressShipping={changeAdressShipping}

                />




            </View >

            <ChooseAdressBilling
                showAdress={showAdress}
                userData={userData}
                setSelectedBillingAddress={setSelectedBillingAddress}
                handleViewAddress={handleViewAddress}
                billingAddress={billingAddress}

            />

            <ChooseAdressShipping
                showAdress={showAdressShipping}
                userData={userData}
                changeAdressShipping={changeAdressShipping}
                setSelectedShippingAddress={setSelectedShippingAddress}
            />


        </>

    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 20,
        paddingLeft: 20,

    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingLeft: 20,
        borderBottomWidth: 1,
        height: 40,
        // backgroundColor: "red"

    },
    checkboxContainer: {
        width: 25,
        height: 25,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: "center"

    },
    checkbox: {
        backgroundColor: 'transparent',
    },
    checked: {
        backgroundColor: 'gray',
        width: 12,
        height: 12,
        borderRadius: 30,


    },
    deliveryDetails: {
        width: "100%",
        height: 300,
        marginBottom: 8,
        display: 'none',

    },
    show: {
        display: 'flex',
    },
    optionText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
});

export default DeliveryOptions;
