import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ViewOrderHeader = ({ formattedOrder, orderDetails, retourned }) => {


    // Déterminer le statut de la commande
    const getStatusText = () => {
        switch (formattedOrder.status) {
            case "processing":
                return "En préparation";
            case "completed":
                return "Expédiée";
            case "delivered":
                return "Livrée";
            default:
                return "Statut inconnu";
        }
    };

    return (
        <View
            style={{
                width: "100%",

            }}>
            {/* Header */}
            <View
                style={{
                    width: "100%",
                    height: 50,
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "lightgray",
                    justifyContent: "center",
                }}>
                <TouchableOpacity
                    onPress={retourned}
                    style={{
                        width: 50,
                        height: 50,
                        left: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>

                {/* Affichage du statut de la commande */}
                <Text style={{
                    fontSize: 24,
                    fontWeight: "500",
                    color: formattedOrder.status === "delivered" ? "green" : "black"
                }}>
                    {getStatusText()}
                </Text>
            </View>

            {/* Détails de la commande */}
            <View style={styles.sectionContainer}>
                <Text style={styles.orderId}>Numéro de la commande: #{formattedOrder.orderId}</Text>
                <TouchableOpacity
                    onPress={orderDetails}
                    style={{
                        backgroundColor: "green",
                        padding: 10,
                        borderRadius: 10,
                    }}>
                    <Text style={styles.viewReceipt}>Afficher le reçu</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.statusContainer}>
                <Text style={styles.deliveredText}>
                    Commande effectuée le {formattedOrder.purchaseTime}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    sectionContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "lightgray",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    orderId: {
        fontSize: 14,
        color: '#333',
    },
    viewReceipt: {
        fontSize: 12,
        color: 'white',
    },
    statusContainer: {
        backgroundColor: '#E5F8E0',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    deliveredText: {
        color: 'green',
        fontWeight: 'bold',
    },
    addressContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
    },
    recipientText: {
        fontWeight: 'bold',
    },
    addressText: {
        color: '#333',
    },
    itemContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    itemImage: {
        width: 80,
        height: 120,
        borderRadius: 20,
        marginRight: 10,
    },
    itemDetails: {
        width: 300,
        height: 100,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
    },
    itemSize: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    totalContainer: {
        padding: 10,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buyAgainButton: {
        backgroundColor: '#FFA500',
        padding: 12,
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    buyAgainText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ViewOrderHeader