import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const OrderSummary = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const { order } = route.params;

    // Calculer le total des articles commandés
    const itemsTotal = order.line_items.reduce((total, item) => total + parseFloat(item.total), 0);




    const retourned = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView >
                {/* 🛒 Résumé de la commande */}
                <Text style={styles.sectionTitle}>Order summary</Text>
                <View style={styles.orderSummary}>
                    <Text style={styles.orderDetail}>Order ID: <Text style={styles.boldText}>{order.number}</Text></Text>
                    <Text style={styles.orderDetail}>Order time: {order.date_created}</Text>
                    <Text style={styles.orderDetail}>Item(s) total: <Text style={styles.boldText}>{itemsTotal.toFixed(2)}€</Text></Text>
                    <Text style={styles.orderDetail}>Shipping: <Text style={styles.freeText}>FREE</Text></Text>
                    <View style={styles.divider} />
                    <Text style={styles.totalText}>Order total: <Text style={styles.boldText}>{order.total}€</Text></Text>
                </View>

                {/* 📍 Adresse de livraison */}
                <Text style={styles.sectionTitle}>Shipping address</Text>
                <View style={styles.shippingAddress}>
                    <Text style={styles.recipientText}>{order.billing.first_name} {order.billing.last_name}</Text>
                    <Text style={styles.addressText}>{order.shipping.address_1}</Text>
                    {order.shipping.address_2 ? <Text style={styles.addressText}>{order.shipping.address_2}</Text> : null}
                    <Text style={styles.addressText}>{order.shipping.city}, {order.shipping.postcode}</Text>
                    <Text style={styles.addressText}>{order.shipping.country}</Text>
                </View>

                {/* 💳 Méthode de paiement */}
                <Text style={styles.sectionTitle}>Payment method</Text>
                <View style={styles.paymentContainer}>
                    <AntDesign name="checkcircle" size={18} color="green" />
                    <Text style={styles.paymentSecurityText}>
                        Payment secured and encrypted.
                    </Text>
                </View>
                <View style={styles.paymentMethod}>
                    <Text style={styles.paymentText}>{order.payment_method.toUpperCase()}</Text>
                    <Text style={styles.paymentDate}>Paid on {order.date_paid}</Text>
                    <Text style={styles.paymentAmount}>{order.total}€</Text>
                </View>

                {/* 🛍 Articles commandés */}
                <Text style={styles.sectionTitle}>Items</Text>
                {order.line_items.map((item) => (
                    <View key={item.id} style={styles.itemContainer}>
                        <Image source={{ uri: item.image?.src || "https://via.placeholder.com/80" }} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemSize}>Qty: {item.quantity}</Text>
                            <Text style={styles.itemPrice}>{item.total}€</Text>
                        </View>
                    </View>
                ))}
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    orderSummary: {
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
    },
    orderDetail: {
        fontSize: 16,
        marginVertical: 3,
    },
    boldText: {
        fontWeight: 'bold',
    },
    freeText: {
        color: 'green',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    shippingAddress: {
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
    },
    recipientText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    addressText: {
        fontSize: 14,
        color: '#333',
    },
    paymentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    paymentSecurityText: {
        fontSize: 14,
        color: 'green',
        marginLeft: 8,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    paymentText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    paymentDate: {
        fontSize: 14,
        color: '#666',
    },
    paymentAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemContainer: {
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
        flex: 1,
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
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OrderSummary;
