import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ViewOrderHeader = ({ formattedOrder, retourned }) => {
    return (
        <View style={{
            width: "100%",
        }} >
            <View
                style={{
                    width: "100%",
                    height: 50,
                    alignItems: "center",
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


                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "500",
                        color: "black"
                    }} >
                    {formattedOrder.status === "processing" ? "En préparation" : 'Expédiée'}
                </Text>
            </View>


            <View style={styles.sectionContainer}>
                <Text style={styles.orderId}>Order ID: #{formattedOrder.orderId}</Text>
                <TouchableOpacity>
                    <Text style={styles.viewReceipt}>View receipt</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.deliveredText}>✅ Delivered on {formattedOrder.shippingTime}</Text>
            </View>
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

export default ViewOrderHeader