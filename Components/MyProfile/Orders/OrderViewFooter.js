import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const OrderViewFooter = ({ formattedOrder, handleViewPaiementDetails }) => {
    return (
        <View style={styles.footerContainer}>
            {/* Bouton "Acheter encore" */}
            <TouchableOpacity style={styles.buyAgainButton}>
                <Text style={styles.buyAgainText}>Acheter encore</Text>
            </TouchableOpacity>

            {/* Détails de paiement */}
            <TouchableOpacity
                onPress={handleViewPaiementDetails}
                style={styles.paymentDetailsContainer}>
                <AntDesign name="creditcard" size={20} color="#333" />
                <Text style={styles.paymentDetailsText}>Détails de paiement</Text>
                <Text style={styles.paymentAmount}>{formattedOrder.items.length} total : {formattedOrder.total.toFixed(2)}€</Text>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 20,
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    buyAgainButton: {
        backgroundColor: '#FFA500',
        alignItems: 'center',
        width: 200,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 15,
    },
    buyAgainText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    paymentDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    paymentDetailsText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#333',
        flex: 1,
        marginLeft: 10,
    },
    paymentAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default OrderViewFooter;
