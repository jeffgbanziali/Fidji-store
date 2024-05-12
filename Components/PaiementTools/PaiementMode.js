import { View, Text, Pressable, Animated, Modal, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';
//import Modal from "react-native-modal";
import BankCardMode from './PaiementMode/BankCardMode';


const PaiementMode = ({ handlePaiementMethod }) => {

    const [loading, setLoading] = useState(false);

    const [bankCardHeight, setBabankCardHeight] = useState(new Animated.Value(0));
    const [showCardBank, setShowCardBank] = useState(false);





    const [showBankCardModal, setShowBankCardModal] = useState(false); // État pour contrôler la visibilité du modal de la carte bancaire

    const handleBankCardMethod = () => {
        setShowBankCardModal(!showBankCardModal); // Inverse la valeur de l'état pour afficher ou masquer le modal de la carte bancaire
    };

    const kondo = async () => {
        console.log("Je m'amorce ");
        handleBankCardMethod();
    };


    const handleCreateOrder = async () => {
        console.log("Je crée ma commande");

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
                onPress={kondo}
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

            <Modal
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

                />
            </Modal>

            {loading && <ActivityIndicator style={{ marginTop: 10 }} color="white" />}
        </View >
    )
}

export default PaiementMode