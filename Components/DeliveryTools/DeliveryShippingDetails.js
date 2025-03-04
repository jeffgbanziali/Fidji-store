import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";


const DeliveryShippingDetails = ({
    shippingAddress,
    heightAnimation,
    iconAnimation,
    homeDelivery,
    handleViewAdress,
    changeAdressSipping,
    selectedShippingAddress,
    useSameAddress,
    useAddressCustomer,
    isSameAddress
}) => {

    // Vérifier si une adresse de livraison existe
    const hasShippingAddress = Array.isArray(shippingAddress) && shippingAddress.length > 0;
    const addressToShow = selectedShippingAddress || (hasShippingAddress ? shippingAddress[0] : null);

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
            {/* 🔹 Affichage de l'adresse de livraison */}
            {addressToShow ? (
                <View style={styles.deliveryContainer}>
                    <View style={styles.addressContainer}>
                        <View style={styles.addressDetails}>
                            <Text style={styles.addressText}>
                                {addressToShow.first_name} {addressToShow.last_name}
                            </Text>
                            <Text style={styles.addressText}>
                                {addressToShow.address_1}, {addressToShow.address_2}
                            </Text>
                            <Text style={styles.addressText}>
                                {addressToShow.postcode} {addressToShow.city} - {addressToShow.country}
                            </Text>
                            <Text style={styles.addressText}>
                                {addressToShow.phone || "Phone non renseigné"}
                            </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <AntDesign name="check" size={24} color="black" />
                        </View>
                    </View>
                    <View style={styles.changeAddressContainer}>
                        <Pressable
                            onPress={changeAdressSipping}
                            style={styles.changeAddressButton}>
                            <Text style={styles.changeAddressText}>Changer d'adresse</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <View style={styles.noAddressContainer}>
                    <Pressable style={styles.addAddressButton}>
                        <Text style={styles.addAddressText}>Ajouter une adresse</Text>
                    </Pressable>
                </View>
            )}

            {/* 🔹 Option pour utiliser l'adresse comme adresse de facturation */}
            <Pressable
                onPress={useSameAddress} style={styles.useSameAddressContainer}>
                {useAddressCustomer ? (
                    <AntDesign name="checkcircle" size={24} color="black" />
                ) : (
                    <View style={styles.emptyCircle}></View>
                )}
                <Text style={styles.useSameAddressText}>Utiliser cette adresse comme adresse de facturation</Text>
            </Pressable>

            {/* 🔹 Ajouter une adresse si elle n'existe pas */}
            {!isSameAddress && (
                <Animated.View style={styles.noAddressContainer}>
                    <Pressable
                        onPress={handleViewAdress}
                        style={styles.addAddressButton}>
                        <Text style={styles.addAddressText}>Ajouter une adresse</Text>
                    </Pressable>
                </Animated.View>
            )}
        </Animated.View>
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
        paddingTop: 14,
    },
    addressContainer: {
        width: "100%",
        flexDirection: "row",
    },
    addressDetails: {
        width: "85%",
        height: 80,
        paddingLeft: 30,
        justifyContent: "center",
    },
    addressText: {
        fontSize: 16,
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
        width: 280,
        height: 40,
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
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    addAddressButton: {
        width: 320,
        height: 50,
        borderRadius: 10,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    addAddressText: {
        fontSize: 16,
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
