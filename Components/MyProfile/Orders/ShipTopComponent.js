import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import React from 'react';

const ShipTopComponent = ({ formattedOrder, order }) => {

    const isPickup = order?.shipping?.company === "Boutique FIDJI";
    const isDelivered = formattedOrder.status === "completed";
    const isShipped = formattedOrder.status === "completed";


    return (
        <View>
            {/* Affichage de l'adresse de livraison ou retrait */}
            {isShipped || isDelivered ? (
                isPickup ? (
                    // 🏬 Retrait en boutique
                    <View style={styles.addressContainer}>
                        <Text style={styles.recipientText}>Retrait en boutique : {order?.shipping?.company}</Text>
                        <Text style={styles.addressText}>{formattedOrder.address.street}</Text>
                        {formattedOrder.address.additionalAddress ? (
                            <Text style={styles.addressText}>{formattedOrder.address.additionalAddress}</Text>
                        ) : null}
                        <Text style={styles.addressText}>{formattedOrder.address.city}, {formattedOrder.address.postcode}, {formattedOrder.address.country}</Text>
                    </View>
                ) : (
                    // 🏠 Livraison à domicile
                    <View style={styles.addressContainer}>
                        <Text style={styles.recipientText}>Livrée à {formattedOrder.recipient}</Text>
                        <Text style={styles.addressText}>{formattedOrder.address.street}, {formattedOrder.address.additionalAddress ? (
                            <Text style={styles.addressText}>{formattedOrder.address.additionalAddress}</Text>
                        ) : null}
                        </Text>

                        <Text style={styles.addressText}>{formattedOrder.address.city}, {formattedOrder.address.postcode}, {formattedOrder.address.country}</Text>
                    </View>

                )
            ) : (
                // 📦 En attente d'expédition
                <View style={styles.pendingContainer}>
                    <Text style={styles.pendingText}>
                        📦 Votre commande est en préparation. L'adresse sera affichée une fois expédiée.
                    </Text>
                </View>
            )}


        </View>
    );
};

const styles = StyleSheet.create({
    addressContainer: {
        paddingLeft: 10,
        height: 80,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "white", // Fond vert clair pour livraison confirmée
    },
    recipientText: {
        fontWeight: '600',
        fontSize: 16,
    },
    addressText: {
        color: '#333',
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "italic",
    },
    pendingContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#FDEEDC", // Fond orange clair pour attente
    },
    pendingText: {
        color: "#D35400",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14,
    },
    trackButton: {
        backgroundColor: '#007AFF',
        padding: 12,
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    trackButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ShipTopComponent;
