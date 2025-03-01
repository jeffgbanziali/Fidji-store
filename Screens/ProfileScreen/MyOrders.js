import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import AllOrder from '../../Components/MyProfile/Orders/AllOrder';
import ProcessingOrder from '../../Components//MyProfile/Orders/ProcessingOrder';
import ShippedOrder from '../../Components//MyProfile/Orders/ShippedOrder';
import DeliveredOrder from '../../Components//MyProfile/Orders/DeliveredOrder';
import ReturnedOrder from '../../Components//MyProfile/Orders/ReturnedOrder';

const MyOrders = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('All orders');

    const tabs = ['All orders', 'Processing', 'Shipped', 'Delivered', 'Returned'];

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'All orders':
                return <AllOrder />;
            case 'Processing':
                return <ProcessingOrder />;
            case 'Shipped':
                return <ShippedOrder />;
            case 'Delivered':
                return <DeliveredOrder />;
            case 'Returned':
                return <ReturnedOrder />;
            default:
                return <AllOrder />;
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
