import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import ViewOrderHeader from './ViewOrderHeader';
import ShipTopComponent from './ShipTopComponent';
import OrderViewCardList from './OrderViewCardList';
import OrderViewFooter from './OrderViewFooter';

const ViewOrderScreen = () => {
    const route = useRoute();
    const { order } = route.params;
    const navigation = useNavigation()

    const retourned = () => {
        navigation.goBack("");
    }
    console.log("Données de la commande :", order);

    const formattedOrder = {
        status: order.status ,
        address: `${order.shipping.address_1}, ${order.shipping.city}, ${order.shipping.country} ${order.shipping.postcode}`,
        recipient: `${order.billing.first_name} ${order.billing.last_name}`,
        phone: order.billing.phone || "Not provided",
        items: order.line_items.map(item => ({
            id: item.id,
            name: item.name,
            price: parseFloat(item.price),
            quantity: item.quantity,
            image: item.image?.src || "https://via.placeholder.com/80",
            size: item.meta_data.find(meta => meta.key === 'size')?.value || 'Taille unique'
        })),
        total: parseFloat(order.total),
        orderId: order.number,
        purchaseTime: order.date_created,
        paymentTime: order.date_paid,
        shippingTime: order.date_completed || "Pending",
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ViewOrderHeader formattedOrder={formattedOrder} retourned={retourned} />

                <ShipTopComponent formattedOrder={formattedOrder} />
                <OrderViewCardList formattedOrder={formattedOrder} />
                <OrderViewFooter formattedOrder={formattedOrder} />
            </ScrollView>
        </SafeAreaView>
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

export default ViewOrderScreen;
