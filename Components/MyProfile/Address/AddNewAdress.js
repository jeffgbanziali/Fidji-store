import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, SafeAreaView, Dimensions, Platform, Pressable, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const AddNewAddress = ({ addNewAddress, modalVisible, setModalVisible }) => {
    return (
        <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Ajouter une nouvelle adresse</Text>
                    <TextInput placeholder="Nom Complet" style={styles.input} />
                    <TextInput placeholder="Adresse" style={styles.input} />
                    <TextInput placeholder="Infos supplémentaires (Optionnel)" style={styles.input} />
                    <TextInput placeholder="Ville" style={styles.input} />
                    <TextInput placeholder="Code Postal" style={styles.input} keyboardType="numeric" />
                    <TextInput placeholder="Pays" style={styles.input} />
                    <TextInput placeholder="Numéro de téléphone" style={styles.input} keyboardType="phone-pad" />
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => addNewAddress({ name: 'New User', street: 'New Street', city: 'New City', postcode: '00000', country: 'New Country', phone: '0000000000' })}
                    >
                        <Text style={styles.saveButtonText}>Enregistrer l'adresse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Annuler</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
