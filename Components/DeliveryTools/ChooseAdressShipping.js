import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import { ShippingAddressContext } from "../../Context/ShippingAddressContext";

const ChooseAdressShipping = ({ showAdress, userData, changeAdressShipping, setSelectedShippingAddress }) => {
    const { shippingAddresses } = useContext(ShippingAddressContext);
    const [isAdding, setIsAdding] = useState(false);


    const handleSelectShippingAddress = (address) => {
        setSelectedShippingAddress(address);
        changeAdressShipping();
    };

    return (
        <Modal
            isVisible={showAdress}
            onBackdropPress={changeAdressShipping}
            style={{ margin: 0, justifyContent: "flex-end" }}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            useNativeDriverForBackdrop
        >
            <View style={styles.container}>
                <View style={styles.header}>

                    <Text style={styles.title}>Sélectionner une adresse</Text>

                    <Pressable onPress={changeAdressShipping}>
                        <AntDesign name="close" size={24} color="black" />
                    </Pressable>
                </View>

                {/* 🔹 Utilisation de `FlatList` */}
                <FlatList
                    data={shippingAddresses}
                    keyExtractor={(item) => item.id.toString()} // ✅ Clé unique pour chaque élément
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.addressItem}
                            onPress={() => handleSelectShippingAddress(item)}
                        >
                            <View style={styles.addressDetails}>
                                <Text style={styles.addressText}>{item.first_name} {item.last_name}</Text>
                                <Text style={styles.addressText}>{userData.customerData.email}</Text>
                                <Text style={styles.addressText}>{item.address_1} {item.address_2}</Text>
                                <Text style={styles.addressText}>{item.city}, {item.country} {item.postcode}</Text>
                                <Text style={styles.addressText}>{item.phone || 'Phone non renseigné'}</Text>
                            </View>
                            {item.isDefault && <AntDesign name="checkcircle" size={20} color="green" />}
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Aucune adresse enregistrée.</Text>
                    }
                />


                {/* 🔹 Ajouter une nouvelle adresse */}
                <TouchableOpacity style={styles.addButton} onPress={() => setIsAdding(true)}>
                    <Text style={styles.addButtonText}>+ Ajouter une nouvelle adresse</Text>
                </TouchableOpacity>
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