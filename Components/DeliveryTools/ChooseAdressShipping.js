import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import { ShippingAddressContext } from "../../Context/ShippingAddressContext";

const ChooseAdressShipping = ({ showAdress, changeAdressSipping, setSelectedShippingAddress }) => {
    const { shippingAddresses } = useContext(ShippingAddressContext);

    const handleSelectShippingAddress = (address) => {
        setSelectedShippingAddress(address);
        changeAdressSipping();
    };

    return (
        <Modal
            isVisible={showAdress}
            onBackdropPress={changeAdressSipping}
            style={{ margin: 0, justifyContent: "flex-end" }}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            useNativeDriverForBackdrop
        >
            <View style={{ width: "100%", height: "80%", backgroundColor: "#f5e1ce" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", padding: 20 }}>Sélectionner une adresse</Text>
                {shippingAddresses.map((address, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleSelectShippingAddress(address)}
                        style={{ padding: 15, borderBottomWidth: 1, borderColor: "#ddd" }}
                    >
                        <Text>{address.first_name} {address.last_name}</Text>
                        <Text>{address.address_1} {address.address_2}</Text>
                        <Text>{address.city}, {address.country} {address.postcode}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "80%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#f5e1ce",
        padding: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    addressItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10
    },
    addressDetails: {
        flex: 1
    },
    addressText: {
        fontSize: 14,
        color: "black"
    },
    addButton: {
        backgroundColor: "#000",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10
    },
    addButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    formContainer: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        fontSize: 14,
        marginBottom: 10
    },
    formButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    cancelButton: {
        padding: 12,
        backgroundColor: "#ddd",
        borderRadius: 8
    },
    cancelText: {
        color: "black",
        fontWeight: "bold"
    },
    saveButton: {
        padding: 12,
        backgroundColor: "black",
        borderRadius: 8
    },
    saveText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default ChooseAdressShipping;