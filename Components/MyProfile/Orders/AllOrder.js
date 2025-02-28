import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${APP_API_URL}/wc/v3/orders`, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                },
            });
            setOrders(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des commandes :", error);
        }
    };

    const renderItem = ({ item: order }) => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 15,
                borderRadius: 15,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 5,
            }}>
            {order.line_items[0]?.image && (
                <Image source={{ uri: order.line_items[0].image.src }} style={{ width: 60, height: 60, borderRadius: 10, marginRight: 15 }} />
            )}
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>{order.line_items[0]?.name}</Text>
                <Text style={{ fontSize: 12, color: '#777', marginTop: 5 }}>{order.date_created} | {order.line_items.length} items</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>{order.total}€</Text>
                <Text style={{ fontSize: 12, color: order.status === 'completed' ? 'green' : 'red' }}>
                    {order.status === 'completed' ? 'Payé' : 'En attente'}
                </Text>
            </View>
        </View >
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    padding: 15,
                }}
            />
        </SafeAreaView>
    );
};

export default AllOrder;
