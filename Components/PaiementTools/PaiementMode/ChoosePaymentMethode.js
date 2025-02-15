import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

const ChoosePaymentMethode = ({ selectedPaymentMethod, handlePaiementMethod, setSelectedPaymentMethod }) => {




    return (
        <Pressable
            onPress={handlePaiementMethod}

            style={styles.container}>
            {selectedPaymentMethod ? (
                <Text style={styles.selectedMethodText}>
                    {selectedPaymentMethod}
                </Text>
            ) : (
                <Text style={styles.promptText}>Choisissez une méthode de paiement</Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "gray",
    },
    promptText: {
        fontSize: 16,
        color: 'black',
    },
    selectedMethodText: {
        fontSize: 16,
        color: "black",
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default ChoosePaymentMethode;