import { View, Text, Pressable, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import PaiementMode from './PaiementMode';
import BankCardMode from './PaiementMode/BankCardMode';


const PaiementValidate = ({ handlePaiementMethod, openPaymentSheet, showBasket, handlePaiement, cart, setSelectedPaymentMethod }) => {


    const navigation = useNavigation()




    return (
        <View
            style={{
                width: "100%",
                height: 80,
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: 1,
                borderColor: "gray",
                backgroundColor: "#f5e1ce"

            }}>
            <Pressable
                onPress={() => openPaymentSheet()}
                style={{
                    width: 320,
                    height: 60,
                    margin: 4,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black"
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "white"
                    }}>
                    Commander - {handlePaiement} €
                </Text>
            </Pressable>

            <Modal
                isVisible={showBasket}
                onBackdropPress={handlePaiementMethod}
                style={{ margin: 0, justifyContent: "flex-end" }}
                backdropOpacity={0.5}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                useNativeDriverForBackdrop
            >
                <PaiementMode
                    handlePaiementMethod={handlePaiementMethod}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                    handlePaiement={handlePaiement}

                    cart={cart}

                />
            </Modal>



        </View>
    )
}

export default PaiementValidate