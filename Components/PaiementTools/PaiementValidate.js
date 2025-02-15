import { View, Text, Pressable, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import PaiementMode from './PaiementMode';
import BankCardMode from './PaiementMode/BankCardMode';


const PaiementValidate = ({ handlePaiementMethod, paymentProcess, handleBankCardMethod, showBasket, createOrder, calculateTotal, handlePaiement, cart, addressShipping, facturationAdressStore, isSameAddress, slectedAdress, storeAdress, selectedOption, setSelectedPaymentMethod }) => {


    const navigation = useNavigation()




    return (
        <View
            style={{
                width: "100%",
                height: 80,
                position: "absolute",
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
                borderTopWidth: 1,
                borderColor: "gray",
                backgroundColor: "#f5e1ce"

            }}>
            <Pressable
                onPress={() => createOrder()}
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
                    paymentProcess={paymentProcess}
                    handlePaiementMethod={handlePaiementMethod}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                    handlePaiement={handlePaiement}
                    calculateTotal={calculateTotal}
                    cart={cart}
                    addressShipping={addressShipping}
                    facturationAdressStore={facturationAdressStore}
                    isSameAddress={isSameAddress}
                    slectedAdress={slectedAdress}
                    storeAdress={storeAdress}
                />
            </Modal>



        </View>
    )
}

export default PaiementValidate