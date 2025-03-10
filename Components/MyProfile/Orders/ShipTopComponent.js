import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ShipTopComponent = ({ formattedOrder, order }) => {

    const isPickup = order?.shipping?.company === "Boutique FIDJI";
    const isDelivered = formattedOrder.status === "delivered";
    const isShipped = formattedOrder.status === "shipped" || formattedOrder.status === "completed";

    const navigation = useNavigation();

    const handleTrackPackage = () => {
        navigation.navigate("OrderTracking", { order });
    };

    return (
        <View>
            {/* Gestion des statuts : En préparation, Expédiée, Livrée */}
            {isShipped || isDelivered ? (
                isPickup ? (
                    // 🏬 Retrait en boutique
                    <View style={styles.addressContainer}>
                        <Text style={styles.recipientText}>🏬 Retrait en boutique : {order?.shipping?.company}</Text>
                        <Text style={styles.addressText}>{formattedOrder.address.street}</Text>
                        {formattedOrder.address.additionalAddress && (
                            <Text style={styles.addressText}>{formattedOrder.address.additionalAddress}</Text>
                        )}
                        <Text style={styles.addressText}>{formattedOrder.address.city}, {formattedOrder.address.postcode}, {formattedOrder.address.country}</Text>
                    </View>
                ) : (
                    // 🏠 Livraison à domicile
                    <View style={[
                        styles.addressContainer,
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: isDelivered
                                ? "#D4EDDA"
                                : "#CCE5FF",
                        }
                    ]}>
                        <View>
                            <Text style={styles.recipientText}>
                                {isDelivered
                                    ? "📦 Livrée à " + formattedOrder.recipient
                                    : "🚚 Expédiée à " + formattedOrder.recipient}
                            </Text>

                            <Text style={styles.addressText}>
                                {formattedOrder.address.street}
                                {formattedOrder.address.additionalAddress && (
                                    <Text>, {formattedOrder.address.additionalAddress}</Text>
                                )}
                            </Text>

                            <Text style={styles.addressText}>
                                {formattedOrder.address.city}, {formattedOrder.address.postcode}, {formattedOrder.address.country}
                            </Text>
                        </View>

                        <TouchableOpacity
                            onPress={handleTrackPackage}
                            style={[
                                styles.trackButton,
                                { backgroundColor: isDelivered ? "#A3CFBB" : "#f5e1ce" } // Vert clair si livré
                            ]}
                        >
                            <Text style={[
                                styles.trackButtonText,
                                { color: isDelivered ? "#155724" : "#000" } // Texte vert si livré
                            ]}>
                                {isDelivered ? "Commande livrée" : "Suivre votre colis"}
                            </Text>
                        </TouchableOpacity>
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
        </View >
    );
};

const styles = StyleSheet.create({
    addressContainer: {
        paddingLeft: 10,
        justifyContent: "space-between",
        paddingRight: 10,
        height: 90,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
    },
    recipientText: {
        fontWeight: '600',
        fontSize: 14,
    },
    addressText: {
        color: '#333',
        fontSize: 13,
        fontWeight: "500",
        fontStyle: "italic",
    },
    pendingContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: "#FDEEDC",
    },
    pendingText: {
        color: "#D35400",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14,
    },
    trackButton: {
        width: 140,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    trackButtonText: {
        fontWeight: '500',
    },
});

export default ShipTopComponent;
