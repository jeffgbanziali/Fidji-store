import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';
import { wooApiClient } from '../../ReduxActions/api';


const AfterRegisterScreen = () => {

    const navigation = useNavigation()


    const route = useRoute();

    const { data: userData } = route.params;

    const [addressData, setAddressData] = useState({

        billing: {
            first_name: "",
            last_name: "",
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            email: "",
            phone: ""
        },

        shipping: {
            first_name: "",
            last_name: "",
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: ""
        }
    });

    const handleInputChange = (key, value, type) => {
        setAddressData(prevState => ({
            ...prevState,
            [type]: {
                ...prevState[type],
                [key]: value
            }
        }));
    };

    const renderInputFields = (type) => {
        return Object.keys(addressData[type]).map((key, index) => (
            <View
                key={index} style={{
                    width: 350,
                    height: 50,
                    borderRadius: 10,
                    marginBottom: 10,
                    flexDirection: "row",
                    borderWidth: 2,
                    borderColor: "black",
                    backgroundColor: "white"

                }}>

                <TextInput
                    style={{
                        width: "90%",
                        height: "100%",
                        paddingLeft: 12,
                        fontSize: 18,
                        color: 'black',
                    }}
                    value={addressData[type][key]}
                    onChangeText={(text) => handleInputChange(key, text, type)}
                    placeholder={`${key.replace('_', ' ').toLowerCase()}`}
                    placeholderTextColor="gray"



                />
            </View>
        ));
    };

    const adress = addressData.billing
    const shipp = addressData.shipping

    const handleSubmit = async () => {
        try {
            const response = await wooApiClient.post('/customers', {
                ...userData,
                billing: adress,
                shipping: shipp
            });
            console.log("Client créé :", response.data);
        } catch (error) {
            console.error("Erreur création client :", error.response?.data || error.message);
        }
    };



    const retourned = () => {
        navigation.goBack("Start")
    }







    return (


        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                alignItems: "center",
                height: "100%",
                width: "100%",
            }}
        >

            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    alignItems: "center",
                }}>

                <View
                    style={{
                        width: "100%",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "500",
                            color: "black"
                        }} >
                        Vos adresses
                    </Text>

                    <Pressable
                        onPress={retourned}
                        style={{
                            width: 50,
                            height: 50,
                            right: 2,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Entypo name="cross" size={30} color="black" />
                    </Pressable>


                </View>

                <ScrollView
                    style={{
                        width: "100%",
                        height: "90%",
                    }}>
                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 20
                        }}>





                        <View
                            style={{
                                width: "100%",
                                height: 120,
                                alignItems: "center",
                                //backgroundColor: "gray",
                                justifyContent: "center"
                            }}>
                            <Image
                                source={require('../../assets/image/2.jpg')}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}

                            />

                        </View>


                    </View>

                    <View style={{
                        width: "100%",
                        alignItems: "center",
                        padding: 10,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Adresse de facturation</Text>
                        {renderInputFields('billing')}

                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Adresse de livraison</Text>

                        {renderInputFields('shipping')}

                        <Pressable
                            onPress={handleSubmit}
                            style={{
                                width: 150,
                                height: 50,
                                borderRadius: 20,
                                backgroundColor: "black",
                                alignItems: "center",
                                justifyContent: "space-evenly"
                            }}

                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    color: "white"
                                }} >
                                Soumettre
                            </Text>
                        </Pressable>
                    </View>


                </ScrollView>



            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default AfterRegisterScreen