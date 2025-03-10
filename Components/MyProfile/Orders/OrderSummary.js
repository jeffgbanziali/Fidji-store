import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const OrderSummary = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const { order } = route.params;

    // Calculer le total des articles commandés
    const itemsTotal = order.line_items.reduce((total, item) => total + parseFloat(item.total), 0);


    const formatDate = (dateString) => {
        if (!dateString) return "Not available";
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    const retourned = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {/* 🛒 Résumé de la commande */}
                <View
                    style={{
                        width: "100%",
                        height: 50,
                        borderBottomWidth: 1,
                        borderColor: "lightgray",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <TouchableOpacity
                        onPress={retourned}
                        style={{
                            width: 40,
                            height: 40,
                            left: 0,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={styles.securityHeader}>
                        <Text style={styles.sectionTitle}>Récapitulatif de la commande</Text>

                    </View>

                </View>

                <View style={styles.orderDetails}>
                    <View style={styles.row}>

                        <Text style={styles.detailText}>Order ID:   </Text>
                        <Text style={styles.boldText}>{order.number}</Text>

                    </View>
                    <View style={styles.row}>

                        <Text style={styles.detailText}>Order time:</Text>
                        <Text style={styles.boldText}> {formatDate(order.date_created)}</Text>
                    </View>
                    <View style={styles.row}>

                        <Text style={styles.detailText}>Item(s) total:</Text>
                        <Text style={styles.boldText}>{itemsTotal.toFixed(2)}€</Text>

                    </View>
                    <View style={styles.row}>

                        <Text style={styles.detailText}>Shipping:</Text>
                        <Text style={styles.greenText}>{order.shipping_lines.length > 0 ? order.shipping_lines[0].total + "€" : "Gratuit"}</Text>

                    </View>

                    <View style={styles.row}>
                        <Text style={styles.totalText}>Total de la commande :</Text>
                        <Text style={styles.boldText}>{order.total}€</Text>
                    </View>
                </View>

                {/* 📍 Adresse de livraison */}
                <Text style={styles.sectionTitle}>Adresse de livraison</Text>
                <View style={styles.shippingAddress}>
                    <Text style={styles.recipientText}>{order.billing.first_name} {order.billing.last_name}</Text>
                    <Text style={styles.addressText}>{order.shipping.address_1}</Text>
                    {order.shipping.address_2 ? <Text style={styles.addressText}>{order.shipping.address_2}</Text> : null}
                    <Text style={styles.addressText}>{order.shipping.city}, {order.shipping.postcode}</Text>
                    <Text style={styles.addressText}>{order.shipping.country}</Text>
                </View>

                {/* 💳 Méthode de paiement */}
                <Text style={styles.sectionTitle}>Mode de paiement</Text>
                <View style={styles.paymentContainer}>
                    <AntDesign name="checkcircle" size={18} color="green" />
                    <Text style={styles.paymentSecurityText}>
                        Paiement sécurisé et crypté.
                    </Text>
                </View>
                <View style={styles.paymentMethod}>
                    <Text style={styles.paymentText}>{order.payment_method.toUpperCase()}</Text>
                    <Text style={styles.paymentDate}>Payée le {formatDate(order.date_paid)}</Text>
                    <Text style={styles.paymentAmount}>{order.total}€</Text>
                </View>

                {/* 🛍 Articles commandés */}
                <Text style={styles.sectionTitle}> Détails des articles ({order.line_items.length})</Text>
                <FlatList
                    data={order.line_items}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <Image source={{ uri: item.image?.src || "https://via.placeholder.com/80" }} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemSize}>x{item.quantity}</Text>
                                <Text style={styles.itemPrice}>{item.total}€</Text>
                            </View>
                        </View>
                    )}
                />
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
    orderDetails: {
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    detailText: {
        fontSize: 16,
        color: '#333',
    },
    boldText: {
        fontWeight: '600',
        fontSize: 16,
    },
    greenText: {
        color: 'green',
        fontWeight: '600',
    },
    totalText: {
        fontSize: 18,
        fontWeight: '600',
    },
    vatText: {
        fontSize: 14,
        color: '#666',
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
