import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, SafeAreaView, Dimensions, Platform, Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import AddNewAdress from '../../Components/MyProfile/Address/AddNewAdress';
import AddNewPickLocation from '../../Components/MyProfile/Address/AddNewPickLocation';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const AddressBookScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAddressVisible, setModalAddressVisible] = useState(false);
    const bottomTabHeight = useBottomTabBarHeight();
    const userData = useSelector((state) => state.userReducer);
    const dataAddress = userData?.customerData?.shipping ? [userData.customerData.shipping] : [];

    const retourned = () => {
        navigation.goBack();
    };

    const addNewAddress = (newAddress) => {
        setModalVisible(false);
    };

    const addNewPickLocation = (newAddress) => {
        setModalAddressVisible(false);
    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    width: 300,
                    height: 200,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    borderColor: 'lightgray'
                }}>

                <Text
                    style={{
                        fontWeight: '400',
                        color: "gray",
                        fontSize: 12,
                    }}>Adresse par defaut</Text>
                <View
                    style={{
                        width: "100%",
                        height: 1,
                        marginTop: 10,
                        marginBottom: 5,
                        backgroundColor: "lightgray",
                    }} />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>{item.first_name} {item.last_name}</Text>
                <Text>{item.address_1}</Text>
                {item.address_2 && <Text>{item.address_2}</Text>}
                <Text>{item.city}, {item.postcode}</Text>
                <Text>{item.country}</Text>
                <Text>Téléphone: {item.phone || 'Non renseigné'}</Text>
                <View style={{
                    width: '100%',
                    marginTop: 5,
                    height: 40,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <Pressable style={{
                        width: 80,
                        marginTop: 5,
                        borderWidth: 2,
                        borderColor: "lightgray",
                        height: 30,
                        justifyContent: "center",
                        borderRadius: 10,
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            color: "black",
                            fontSize: 12,
                        }}>Modifier</Text>
                    </Pressable>
                    <Pressable style={{
                        width: 80,
                        marginTop: 5,
                        borderWidth: 2,
                        borderColor: "lightgray",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        height: 30,
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            color: "black",
                            fontSize: 12,
                        }}>Supprimer</Text>
                    </Pressable>

                </View>
            </View>
        )

    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                backgroundColor: "white",

                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }}>
            <View
                style={{
                    width: "100%",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    flexDirection: "row"
                }}>
                <Pressable
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
                </Pressable>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color: "black"
                    }} >
                    Vos adresses
                </Text>

            </View>

            <TouchableOpacity
                style={{
                    width: "100%",
                    borderColor: 'lightgray',
                    borderWidth: 2,
                    height: 50,
                    justifyContent: "center",
                    paddingLeft: 20,
                    marginBottom: 10
                }}
                onPress={() => setModalVisible(true)}
            >
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 18
                    }}>Ajouter une nouvelle adresse</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setModalAddressVisible(true)}
                style={{
                    width: "100%",
                    borderColor: 'lightgray',
                    borderWidth: 2,
                    height: 50,
                    justifyContent: "center",
                    paddingLeft: 20,
                    marginBottom: 20
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontWeight: '400',
                        fontSize: 18
                    }}>Ajouter un nouveau lieu de retrait</Text>
            </TouchableOpacity>


            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%"


                }}>
                <FlatList
                    data={dataAddress}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem} />
            </View>

            <AddNewAdress
                modalVisible={modalVisible}
                addNewAddress={addNewPickLocation}
                setModalVisible={setModalVisible}
            />

            <AddNewPickLocation
                modalVisible={modalAddressVisible}
                addNewAddress={addNewAddress}
                setModalVisible={setModalAddressVisible}
            />

        </SafeAreaView>
    );
};



export default AddressBookScreen;
