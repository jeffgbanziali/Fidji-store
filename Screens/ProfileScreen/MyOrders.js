import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import AllOrder from '../../Components/MyProfile/Orders/AllOrder';
import ProcessingOrder from '../../Components//MyProfile/Orders/ProcessingOrder';
import ShippedOrder from '../../Components//MyProfile/Orders/ShippedOrder';
import DeliveredOrder from '../../Components//MyProfile/Orders/DeliveredOrder';
import ReturnedOrder from '../../Components//MyProfile/Orders/ReturnedOrder';
import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';
import { useSelector } from 'react-redux';

const MyOrders = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('All orders');
    const [orders, setOrders] = useState([]);

    const tabs = ['All orders', 'Processing', 'Shipped', 'Delivered', 'Returned'];

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };


    const handleViewOrder = (order) => {
        navigation.navigate("ViewOrderScreen", { order })
    }


    const user = useSelector(state => state.userReducer.user);
    const customerId = user?.customerData?.id;






    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${APP_API_URL}/wc/v3/orders`, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                    customer: customerId,
                },
            });

            console.log(`Commandes du client ${customerId} :`, response.data);

            setOrders(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des commandes :", error.response ? error.response.data : error.message);
        }
    };




    const filterOrders = (status) => {
        if (status === 'All orders') {
            return orders;
        }
        return orders.filter(order => order.status.toLowerCase() === status.toLowerCase());
    };





    const renderTabContent = () => {
        const filteredOrdersByStatus = filterOrders(activeTab);

        switch (activeTab) {
            case 'All orders':
                return <AllOrder orders={filteredOrdersByStatus} handleViewOrder={handleViewOrder} />;
            case 'Processing':
                return <ProcessingOrder orders={filteredOrdersByStatus} handleViewOrder={handleViewOrder} />;
            case 'Shipped':
                return <ShippedOrder orders={filteredOrdersByStatus} handleViewOrder={handleViewOrder} />;
            case 'Delivered':
                return <DeliveredOrder orders={filteredOrdersByStatus} handleViewOrder={handleViewOrder} />;
            case 'Returned':
                return <ReturnedOrder orders={filteredOrdersByStatus} handleViewOrder={handleViewOrder} />;
            default:
                return <AllOrder orders={filteredOrdersByStatus} handleViewOrder={handleViewOrder} />;
        }
    };









    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#f5f5f5'
        }}>

            <View
                style={{
                    width: "100%",
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "lightgray"
                }}>

                <ScrollView
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{
                        paddingVertical: 10,
                        width: "100%",
                        height: "100%"
                    }}>
                    {tabs.map((tab) => (
                        <Pressable
                            key={tab} onPress={() => handleTabPress(tab)}
                            style={{
                                marginHorizontal: 10,
                            }}>
                            <Text style={{
                                fontSize: 16,
                                color: activeTab === tab ? '#ff6f00' : '#333',
                                fontWeight: activeTab === tab ? 'bold' : 'normal'
                            }}>
                                {tab}
                            </Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>


            {renderTabContent()}
        </SafeAreaView >
    );
};

export default MyOrders;
