import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Modal from "react-native-modal";

const DeliveryStoreDetails = ({ billingAddress, heightAnimation, iconAnimation, storeDelivery, handleViewAdress }) => {

    const isBillingAddressValid = billingAddress && billingAddress.address_1;
    return (
        <Animated.View
            style={[
                styles.deliveryDetails,
                {
                    height: isBillingAddressValid ? heightAnimation : 150,
                    opacity: iconAnimation,

                },
                storeDelivery && styles.show
            ]}
        >
            <View
                style={{
                    width: "100%",
                    paddingLeft: 20,

                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: 'black',
                    }}>
                    Boutique FIDJI - Paris
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        paddingTop: 4,
                        fontWeight: '500',
                        color: 'black',
                    }}>
                    25 rue des martyrs, Paris 75009
                    livraisn en 1h à la boutique
                </Text>

            </View>

            {
                isBillingAddressValid ? (
                    // Si l'adresse de facturation existe et contient des infos valides, on affiche les détails et "Changer d'adresse"
                    <View style={{ width: "100%", paddingTop: 14 }}>
                        <Text style={{ fontSize: 20, paddingLeft: 20, fontWeight: '500', color: 'black' }}>
                            Adresse de facturation
                        </Text>

                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <View style={{ width: "85%", height: 80, paddingLeft: 30, justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, paddingLeft: 20, fontWeight: '500', color: 'black' }}>
                                    {billingAddress.first_name} {billingAddress.last_name}
                                </Text>
                                <Text style={{ fontSize: 16, paddingLeft: 20, fontWeight: '500', color: 'black' }}>
                                    {billingAddress.address_1} {billingAddress.address_2}
                                </Text>
                                <Text style={{ fontSize: 16, paddingLeft: 20, fontWeight: '500', color: 'black' }}>
                                    {billingAddress.postcode} {billingAddress.city} - {billingAddress.country}
                                </Text>
                            </View>
                            <View style={{ width: "15%", height: 80, justifyContent: "center", alignItems: "center" }}>
                                <View style={{ width: 30, height: 30, borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
                                    <AntDesign name="check" size={24} color="black" />
                                </View>
                            </View>
                        </View>

                        <View style={{ width: "100%", height: 60, borderBottomWidth: 1, marginLeft: 20, alignItems: "center", justifyContent: "center" }}>
                            <Pressable onPress={handleViewAdress} style={{ width: 280, height: 40, borderRadius: 10, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}>
                                    Changer d'adresse
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                ) : (
                    // Si l'adresse est vide ou inexistante, on affiche "Ajouter une adresse"
                    <View style={{ width: "100%", paddingTop: 14 }}>
                        <Text style={{ fontSize: 20, paddingLeft: 20, fontWeight: '500', color: 'black' }}>
                            Adresse de facturation
                        </Text>

                        <View style={{ width: "100%", height: 80, alignItems: "center", justifyContent: "center" }}>
                            <Pressable onPress={handleViewAdress} style={{ width: 320, height: 40, borderRadius: 10, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
                                    Ajouter une adresse
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }




        </Animated.View>

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
        height: 60,
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

export default DeliveryStoreDetails;
