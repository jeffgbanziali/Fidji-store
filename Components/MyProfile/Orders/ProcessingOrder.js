import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const ProcessingOrder = ({ orders, handleViewOrder }) => {
    const formatOrderDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('fr-FR', { month: 'long' });
        const year = date.getFullYear();
        return `${day === 1 ? '1er' : day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
    };

    const renderItem = ({ item: order }) => {

        return (
            <Pressable

                style={styles.card} onPress={() => handleViewOrder(order)}>
                <Text style={styles.orderDate}>{formatOrderDate(order.date_created)} | {order.line_items.length} articles</Text>
                <View style={styles.cardContent}>
                    {order.line_items[0]?.image && (
                        <Image
                            source={{ uri: order.line_items[0].image.src }}
                            style={styles.productImage}
                        />
                    )}
                    <View style={styles.orderInfo}>
                        <Text style={styles.productName}>{order.line_items[0]?.name}</Text>
                        <Text style={styles.price}>{order.total}€</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 5,
                        }}>

                            <View style={[styles.statusContainer, { backgroundColor: order.status === 'completed' ? 'lightblue' : '#F8D7DA' }]}>
                                <Text style={styles.deliveryStatus}> {order.status === "processing" ? "En préparation" : 'Expédiée'}</Text>
                            </View>
                            <View style={[styles.statusContainer, { backgroundColor: order.status === 'completed' || "processing" ? '#D4EDDA' : '#F8D7DA' }]}>
                                <Text style={[styles.statusText, { color: order.status === 'completed' || "processing" ? '#155724' : '#721C24' }]}>
                                    {order.status === 'completed' || "processing" ? 'Payé' : 'En attente'}
                                </Text>
                            </View>
                        </View>

                    </View>
                    <Ionicons name="chevron-forward" size={24} color="#888" style={styles.arrowIcon} />
                </View>
            </Pressable>
        )
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 15 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    orderDate: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 15,
    },
    orderInfo: {
        flex: 1,
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 5,
    },
    deliveryStatus: {
        fontSize: 12,
        color: '#555',
    },
    statusContainer: {
        paddingVertical: 5,
        marginLeft: 2,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    statusText: {
        fontSize: 12,
    },
    arrowIcon: {
        marginLeft: 10,
    }
});

export default ProcessingOrder