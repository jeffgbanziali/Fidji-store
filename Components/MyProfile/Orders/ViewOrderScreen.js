import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import ViewOrderHeader from './ViewOrderHeader';
import ShipTopComponent from './ShipTopComponent';
import OrderViewCardList from './OrderViewCardList';
import OrderViewFooter from './OrderViewFooter';

const ViewOrderScreen = () => {
    const route = useRoute();
    const { order } = route.params;
    const navigation = useNavigation();

    const formatDate = (dateString) => {
        if (!dateString) return "Non disponible";
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const retourned = () => {
        navigation.goBack();
    };

    console.log("Données de la commande :", order);


    const formattedOrder = {
        status: order.status,
        address: {
            street: order.shipping.address_1,
            additionalAddress: order.shipping.address_2,
            city: order.shipping.city,
            country: order.shipping.country,
            postcode: order.shipping.postcode
        },
        recipient: `${order.billing.first_name} ${order.billing.last_name}`,
        phone: order.billing.phone || "Non fourni",
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
        purchaseTime: formatDate(order.date_created),
        paymentTime: formatDate(order.date_paid),
        shippingTime: order.date_shipped ? formatDate(order.date_shipped) : "En attente d'expédition",
        tracking_link: order.tracking_link || "",
    };


    const hasTracking = formattedOrder.tracking_link && formattedOrder.tracking_link !== "";

    // Fonction pour ouvrir le suivi de commande
    const handleTrackOrder = () => {
        if (hasTracking) {
            Linking.openURL(formattedOrder.tracking_link);
        } else {
            alert("Aucun lien de suivi disponible pour cette commande.");
        }
    };

    const handleViewPaiementDetails = () => {
        navigation.navigate("ViewOrderDetailsScreen", { order: order })
    }

    const orderDetails = () => {
        navigation.navigate("OrderSummary", { order: order })
    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ViewOrderHeader

                    formattedOrder={formattedOrder}
                    order={order}
                    orderDetails={orderDetails}
                    formatDate={formatDate}
                    retourned={retourned}
                />

                <ShipTopComponent
                    formattedOrder={formattedOrder}
                    order={order}
                />
                <OrderViewCardList formattedOrder={formattedOrder} />
                <OrderViewFooter
                    formattedOrder={formattedOrder}
                    handleViewPaiementDetails={handleViewPaiementDetails}
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
});

export default ViewOrderScreen;
