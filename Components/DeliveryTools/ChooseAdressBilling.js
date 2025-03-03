import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import { BillingAddressContext } from '../../Context/BillingAddressContext';

const ChooseAdressBilling = ({ showAdress, handleViewAdress, setSelectedBillingAddress }) => {
    const { billingAddresses, addBillingAddress, setDefaultBillingAddress } = useContext(BillingAddressContext);
    const [isAdding, setIsAdding] = useState(false);
    const [newBilling, setNewBilling] = useState({
        first_name: '',
        last_name: '',
        company: '',
        address_1: '',
        address_2: '',
        city: '',
        postcode: '',
        country: ''
    });

    // 🔹 Fonction pour sélectionner une adresse de facturation
    const handleSelectBillingAddress = (address) => {
        setSelectedBillingAddress(address); // ✅ Mise à jour de l'adresse sélectionnée
        handleViewAdress(); // ✅ Fermer le modal
    };

    // 🔹 Fonction pour ajouter une nouvelle adresse
    const handleAddBilling = () => {
        if (newBilling.address_1.trim() !== '' && newBilling.city.trim() !== '' && newBilling.country.trim() !== '') {
            addBillingAddress(newBilling);
            setNewBilling({
                first_name: '',
                last_name: '',
                company: '',
                address_1: '',
                address_2: '',
                city: '',
                postcode: '',
                country: ''
            });
            setIsAdding(false);
        } else {
            alert("Veuillez remplir les champs obligatoires.");
        }
    };

    return (
        <Modal
            isVisible={showAdress}
            onBackdropPress={handleViewAdress}
            style={{ margin: 0, justifyContent: "flex-end" }}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            useNativeDriverForBackdrop
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Choisir une adresse de facturation</Text>
                    <Pressable onPress={handleViewAdress}>
                        <AntDesign name="close" size={24} color="black" />
                    </Pressable>
                </View>

                {/* 🔹 Liste des adresses existantes */}
                <FlatList
                    data={billingAddresses}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.addressItem}
                            onPress={() => handleSelectBillingAddress(item)} // ✅ Sélection de l'adresse
                        >
                            <View style={styles.addressDetails}>
                                <Text style={styles.addressText}>{item.first_name} {item.last_name}</Text>
                                <Text style={styles.addressText}>{item.address_1} {item.address_2}</Text>
                                <Text style={styles.addressText}>{item.postcode}, {item.city}, {item.country}</Text>
                            </View>
                            {item.isDefault && <AntDesign name="checkcircle" size={20} color="green" />}
                        </TouchableOpacity>
                    )}
                />

                {/* 🔹 Ajouter une nouvelle adresse */}
                <TouchableOpacity style={styles.addButton} onPress={() => setIsAdding(true)}>
                    <Text style={styles.addButtonText}>+ Ajouter une nouvelle adresse</Text>
                </TouchableOpacity>

                {/* 🔹 Formulaire d'ajout */}
                {isAdding && (
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Prénom"
                            value={newBilling.first_name}
                            onChangeText={(text) => setNewBilling({ ...newBilling, first_name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nom"
                            value={newBilling.last_name}
                            onChangeText={(text) => setNewBilling({ ...newBilling, last_name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Adresse"
                            value={newBilling.address_1}
                            onChangeText={(text) => setNewBilling({ ...newBilling, address_1: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Code postal"
                            value={newBilling.postcode}
                            onChangeText={(text) => setNewBilling({ ...newBilling, postcode: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ville"
                            value={newBilling.city}
                            onChangeText={(text) => setNewBilling({ ...newBilling, city: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pays"
                            value={newBilling.country}
                            onChangeText={(text) => setNewBilling({ ...newBilling, country: text })}
                        />
                        <View style={styles.formButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setIsAdding(false)}>
                                <Text style={styles.cancelText}>Annuler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={handleAddBilling}>
                                <Text style={styles.saveText}>Enregistrer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
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

export default ChooseAdressBilling;
