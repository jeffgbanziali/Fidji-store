import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";


const DeliveryShippingDetails = ({
    heightAnimation,
    iconAnimation,
    homeDelivery,
    myBillingSelected,
    selectedBillingAddress,
    selectedShippingAddress,
    myShippingSelected,
    useAddressCustomer,
    useSameAddress,
    handleViewAddress,
    changeAdressShipping,


}) => {

    const isShippingAddressValid = myShippingSelected && myShippingSelected.address_1;

    return (
        <Animated.View
            style={[
                styles.deliveryDetails,
                {
                    height: heightAnimation,
                    opacity: iconAnimation,
                },
                homeDelivery && styles.show
            ]}
        >
            <Text style={{
                fontSize: 20, paddingLeft: 20, fontWeight: '500', color: 'black'
            }}>
                Adresse de livraison
            </Text>
            {myShippingSelected ? (
                <View style={styles.deliveryContainer}>


                    <View style={styles.addressContainer}>
                        <View style={styles.addressDetails}>
                            <Text style={styles.addressText}>
                                {myShippingSelected.first_name} {myShippingSelected.last_name}
                            </Text>
                            <Text style={styles.addressText}>
                                {myShippingSelected.address_1}, {myShippingSelected.address_2}
                            </Text>
                            <Text style={styles.addressText}>
                                {myShippingSelected.postcode} {myShippingSelected.city} - {myShippingSelected.country}
                            </Text>
                            <Text style={styles.addressText}>
                                {myShippingSelected.phone || "Phone non renseigné"}
                            </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <AntDesign name="check" size={24} color="black" />
                        </View>
                    </View>
                    <View style={styles.changeAddressContainer}>
                        <Pressable
                            onPress={changeAdressShipping}
                            style={styles.changeAddressButton}>
                            <Text style={styles.changeAddressText}>Changer d'adresse</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <View style={styles.noAddressContainer}>
                    <Pressable
                        onPress={changeAdressShipping}
                        style={styles.addAddressButton}>
                        <Text style={styles.addAddressText}>Ajouter une adresse</Text>
                    </Pressable>
                </View>
            )}

            <Pressable
                onPress={useSameAddress} style={styles.useSameAddressContainer}>
                {useAddressCustomer ? (
                    <AntDesign name="checkcircle" size={24} color="black" />
                ) : (
                    <View style={styles.emptyCircle}></View>
                )}
                <Text style={styles.useSameAddressText}>Utiliser cette adresse comme adresse de facturation</Text>
            </Pressable>

            <Text
                style={{
                    fontSize: 18,
                    paddingLeft: 20,
                    fontWeight: '500', color: 'black'
                }}>
                Adresse de facturation</Text>
            <View style={styles.noAddressContainer}>


                {myBillingSelected ? (

                    <View style={styles.deliveryContainer}>
                        <View style={styles.addressContainer}>
                            <View style={styles.addressDetails}>
                                <Text style={styles.addressText}>{myBillingSelected.first_name} {myBillingSelected.last_name}</Text>
                                <Text style={styles.addressText}>{myBillingSelected.email}</Text>
                                <Text style={styles.addressText}>{myBillingSelected.address_1}, {myBillingSelected.address_2}</Text>
                                <Text style={styles.addressText}>{myBillingSelected.postcode} {myBillingSelected.city} - {myBillingSelected.country}</Text>
                                <Text style={styles.addressText}>{myBillingSelected.phone || "Phone non renseigné"}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <AntDesign name="check" size={24} color="black" />
                            </View>
                        </View>
                        <Pressable
                            onPress={() => {
                                console.log("Bouton pressé !");
                                handleViewAddress();
                            }}
                            style={{
                                width: 180,
                                height: 30,
                                borderRadius: 10,
                                backgroundColor: "black",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            <Text style={styles.addAddressText}>Ajouter une adresse</Text>
                        </Pressable>
                    </View>


                ) : (
                    <Pressable
                        onPress={() => {
                            console.log("Bouton pressé !");
                            handleViewAddress();
                        }}
                        style={styles.addAddressButton}>
                        <Text style={styles.addAddressText}>Ajouter une adresse</Text>
                    </Pressable>
                )}

            </View>
        </Animated.View >
    );
};

const styles = StyleSheet.create({
    deliveryDetails: {
        width: "100%",
        marginBottom: 8,
        display: 'none',
    },
    show: {
        display: 'flex',
    },
    deliveryContainer: {
        width: "100%",
        padding: 14,

        alignItems: "center",


    },
    addressContainer: {
        width: "100%",
        flexDirection: "row",
    },
    addressDetails: {
        width: "85%",
        height: 60,
        paddingLeft: 30,
        justifyContent: "center",
    },
    addressText: {
        fontSize: 14,
        paddingLeft: 20,
        fontWeight: '500',
        color: 'black',
    },
    iconContainer: {
        width: "15%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    changeAddressContainer: {
        width: "100%",
        height: 60,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    changeAddressButton: {
        width: 200,
        height: 30,
        borderRadius: 10,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    changeAddressText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    },
    noAddressContainer: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center"

    },
    addAddressButton: {
        width: 200,
        height: 40,
        borderRadius: 10,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    addAddressText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    },
    useSameAddressContainer: {
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    emptyCircle: {
        width: 20,
        height: 20,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    useSameAddressText: {
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 10,
    }
});

export default DeliveryShippingDetails;
