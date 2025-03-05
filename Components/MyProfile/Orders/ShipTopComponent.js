import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ShipTopComponent = ({ formattedOrder }) => {
    return (
        <View style={styles.addressContainer}>
            <Text style={styles.recipientText}>Ship to {formattedOrder.recipient}</Text>
            <Text style={styles.addressText}>{formattedOrder.address}</Text>
        </View>
    )
}



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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    orderId: {
        fontSize: 14,
        color: '#333',
    },
    viewReceipt: {
        fontSize: 14,
        color: '#007AFF',
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

export default ShipTopComponent