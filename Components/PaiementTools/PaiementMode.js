import { View, Text, Pressable, Animated, Modal, TouchableOpacity, ActivityIndicator, Alert, Linking } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';
//import Modal from "react-native-modal";
import BankCardMode from './PaiementMode/BankCardMode';
import { useSelector } from 'react-redux';
import axios from 'axios';
import LoadingValidation from './PaiementMode/LoadingValidation';
import { useNavigation } from '@react-navigation/native';


const PaiementMode = ({ handlePaiementMethod, calculateTotal, handlePaiement, cart, addressShipping, facturationAdressStore, isSameAddress, slectedAdress, storeAdress, selectedOption }) => {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const userData = useSelector((state) => state.userReducer)

    const customerId = userData.customerData.id

    const navigation = useNavigation()


    const [showBankCardModal, setShowBankCardModal] = useState(true);

    const handleBankCardMethod = () => {
        setShowBankCardModal(!showBankCardModal);
    };

    const kondo = async () => {

    };



    const handleValidation = () => {

        navigation.navigate("OrderValidate")
        console.log("Je m'amorce ", cart);
        handlePaiementMethod()


    };

    const handleCreateOrder = async () => {
        console.log("Before setLoading(true)");

        setLoading(true);
        try {
            // Construire les détails de la commande
            const orderData = {
                billing: slectedAdress,
                shipping: isSameAddress ? addressShipping : facturationAdressStore,
                line_items: cart.map(item => ({
                    product_id: item.id,
                    quantity: item.stock_quantity,
                })),
                customer_id: customerId,
            };
            console.log("Inside try block: order data", orderData);

            // Envoyer la commande à WooCommerce
            /*  const {
                  data: { id, order_key }
              } = await axios.post('https://boutiquefidji.com/wp-json/wc/v3/orders?per_page=1&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf', orderData);
            */
            // Générer l'URL de paiement
            console.log('Inside try block: Votre commande facturation', orderData);
            // Déclencher l'arrêt du chargement après 20 secondes
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Error creating order:', error);
            // Arrêter le chargement en cas d'erreur
            setLoading(false);

        } finally {
            handleValidation();
        }
    };






    return (



        <View
            style={{
                width: "100%",
                height: "30%",
                backgroundColor: "black",
                alignItems: "center",
            }}>

            <View
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'gray',
                    paddingLeft: 10
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                        color: "white"
                    }}>Mode de paiement
                </Text>
                <Pressable
                    onPress={handlePaiementMethod}
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Entypo name="cross" size={24} color="white" />
                </Pressable>
            </View>

            <Pressable
                style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <View
                    style={{
                        width: 44,
                        height: 28,
                        borderRadius: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                    <Image
                        source={{ uri: "https://icons.veryicon.com/png/o/business/third-party-sharing-payment/apple-pay.png" }}
                        style={{
                            width: 35,
                            height: 35
                        }}
                    />
                </View>

                <Text
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'gray',
                    }}>Apple Pay
                </Text>
            </Pressable>

            <TouchableOpacity
                onPress={handleCreateOrder}
                style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <View
                    style={{
                        width: 44,
                        height: 28,
                        borderRadius: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                    <FontAwesome name="credit-card-alt" size={24} color="black" />
                </View>

                <Text
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'gray',
                    }}>Carte bancaire
                </Text>
            </TouchableOpacity>

            <Pressable
                style={{
                    width: "100%",
                    height: 50,
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <View
                    style={{
                        width: 44,
                        height: 28,
                        borderRadius: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                    <Image
                        source={{ uri: "https://w7.pngwing.com/pngs/246/916/png-transparent-computer-icons-logo-paypal-encapsulated-postscript-paypal-blue-angle-logo.png" }}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </View>

                <Text
                    style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'gray',
                    }}>PayPal
                </Text>
            </Pressable>

            {/*<Modal
                animationType="slide"
                transparent={true} // Définir transparent sur false pour que le fond soit opaque
                visible={showBankCardModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowBankCardModal(!showBankCardModal);
                }}>
                <BankCardMode
                    handleCreateOrder={handleCreateOrder}
                    handleBankCardMethod={handleBankCardMethod}
                    calculateTotal={calculateTotal}
                    handlePaiement={handlePaiement}

                />
            </Modal>*/}

            <Modal
                animationType="slide"
                transparent={true}
                visible={loading}
                onRequestClose={() => { setShowBankCardModal }}
            >
                <LoadingValidation />
            </Modal>


        </View>
    )
}

export default PaiementMode