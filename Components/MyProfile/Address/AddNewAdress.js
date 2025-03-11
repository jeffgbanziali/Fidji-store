import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, SafeAreaView, Dimensions, Platform, Pressable, StatusBar, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddNewAddress = ({ addNewAddress, modalVisible, setModalVisible }) => {
    // États pour stocker les valeurs des champs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');

    // Fonction pour enregistrer l'adresse
    const handleSaveAddress = () => {
        if (!firstName || !lastName || !address || !city || !postcode || !country || !phone) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const newAddress = {
            first_name: firstName,
            last_name: lastName,
            address_1: address,
            address_2: additionalInfo || null,
            city,
            postcode,
            country,
            phone,
        };

        addNewAddress(newAddress);
        setModalVisible(false);
        resetForm();
    };

    // Réinitialiser les champs après l'ajout
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setAddress('');
        setAdditionalInfo('');
        setCity('');
        setPostcode('');
        setCountry('');
        setPhone('');
    };

    return (
        <Modal visible={modalVisible} animationType="slide" transparent>
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Ajouter une nouvelle adresse</Text>
                    <TextInput
                        placeholder="Prénom(s)"
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholderTextColor={"black"}

                    />
                    <TextInput
                        placeholder="Nom(s)"
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholderTextColor={"black"}

                    />
                    <TextInput
                        placeholder="Numéro et nom de la rue"
                        style={styles.input}
                        value={address}
                        onChangeText={setAddress}
                        placeholderTextColor={"black"}

                    />
                    <TextInput
                        placeholder="Infos supplémentaires (Optionnel)"
                        style={styles.input}
                        value={additionalInfo}
                        onChangeText={setAdditionalInfo}
                        placeholderTextColor={"black"}

                    />
                    <TextInput
                        placeholder="Ville"
                        placeholderTextColor={"black"}
                        style={styles.input}
                        value={city}
                        onChangeText={setCity}
                    />
                    <TextInput
                        placeholder="Code Postal"
                        style={styles.input}
                        placeholderTextColor={"black"}
                        value={postcode}
                        onChangeText={setPostcode}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Pays"
                        style={styles.input}
                        placeholderTextColor={"black"}
                        value={country}
                        onChangeText={setCountry}
                    />
                    <TextInput
                        placeholder="Numéro de téléphone"
                        style={styles.input}
                        placeholderTextColor={"black"}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />

                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
                        <Text style={styles.saveButtonText}>Enregistrer l'adresse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)}
                        style={{
                            textAlign: 'center',
                            color: 'red',
                            fontSize: 16,
                            padding: 15,
                            backgroundColor: 'green',
                            padding: 15,
                            borderRadius: 5,
                            marginTop: 20,
                            width: '100%',
                        }} >
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}>Utiliser ma location</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Annuler</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </Modal >
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#ff9900',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
    },
    saveButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButton: {
        marginTop: 15,
    },
    cancelButtonText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 16,
    },
});

export default AddNewAddress;
