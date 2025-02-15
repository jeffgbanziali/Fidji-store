import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, Modal, Alert, Animated, Easing, } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';
import axios from 'axios';
import ProductsList from '../../Components/PaiementTools/ProductsList';
import DeliveryAdress from '../../Components/PaiementTools/DeliveryAdress';
import TotalCalculate from '../../Components/PaiementTools/TotalCalculate';
import PaiementValidate from '../../Components/PaiementTools/PaiementValidate';
import LoadingValidation from '../../Components/PaiementTools/PaiementMode/LoadingValidation';
import ChoosePaymentMethode from '../../Components/PaiementTools/PaiementMode/ChoosePaymentMethode';
import BankCardMode from '../../Components/PaiementTools/PaiementMode/BankCardMode';

const PaiementScreen = ({ }) => {

    const navigation = useNavigation()

    const [paymentMethod, setPaymentMethod] = useState("stripe");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [paymentProcess, setPaymentProcess] = useState(null);
    const [showBankCardModal, setShowBankCardModal] = useState(null);



    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);


    const handlePaiementMethod = () => {
        if (showBasket) {
            Animated.timing(basketHeight, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => setShowBasket(false));
        } else {
            setShowBasket(true);
            Animated.timing(basketHeight, {
                toValue: 200,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    };



    const retourned = () => {
        navigation.goBack();
    }


    const route = useRoute()

    const shipping = isSameAddress ? addressShipping : facturationAdressStore;


    const { cart, addressShipping, facturationAdressStore, isSameAddress, slectedAdress, storeAdress, selectedOption } = route.params

    const createOrder = async () => {
        const orderData = {
            payment_method: paymentMethod,
            payment_method_title: selectedPaymentMethod,
            set_paid: true,
            billing: slectedAdress,
            line_items: cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity
            })),
            shipping: addressShipping
        };

        console.log("ma commande", orderData);

        try {
            const response = await axios.post(`${APP_API_URL}/wc/v3/orders`, orderData, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                },
            });
            console.log("Commande créée avec succès :", response.data);
            setPaymentProcess(response.data)
            handleBankCardMethod()
        } catch (error) {
            console.error("Erreur lors de la création de la commande :", error.response ? error.response.data : error.message);
        }
    };

    const handleBankCardMethod = () => {
        setShowBankCardModal(!showBankCardModal);
    }




    const calculateTotal = () => {
        // Si le panier est vide, retourne 0
        if (cart.length === 0) {
            return 0;
        }

        // Utilise reduce pour additionner les prix de chaque article dans le panier
        const total = cart.reduce((acc, item) => acc + (item.price * item.stock_quantity), 0);

        // Retourne le total
        return total;
    };



    const shippingCost = calculateTotal() > 200 ? 0 : 8;

    const handlePaiement = calculateTotal() + shippingCost






    return (
        <>


            <SafeAreaView
                style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    backgroundColor: "#f5e1ce"

                }
                }>
                <View
                    style={{
                        width: "100%",
                        height: 40,
                        marginBottom: 6,
                        alignItems: "center",
                        justifyContent: "center",


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
                        Étape 4/4 - Résumé
                    </Text>


                    <Pressable
                        style={{
                            width: 50,
                            height: 50,
                            right: 2,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <MaterialCommunityIcons name="message-question-outline" size={26} color="black" />
                    </Pressable>



                </View>

                <ProductsList cart={cart}
                />
                <DeliveryAdress
                    addressShipping={addressShipping}
                    facturationAdressStore={facturationAdressStore}
                    isSameAddress={isSameAddress}
                    storeAdress={storeAdress}
                    selectedOption={selectedOption}
                />
                <TotalCalculate
                    handlePaiement={handlePaiement}
                    calculateTotal={calculateTotal}
                />


                <ChoosePaymentMethode
                    handlePaiementMethod={handlePaiementMethod}
                    selectedPaymentMethod={selectedPaymentMethod}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                />

                <Modal
                    animationType="slide"
                    transparent={true} // Définir transparent sur false pour que le fond soit opaque
                    visible={showBankCardModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setShowBankCardModal(!showBankCardModal);
                    }}>
                    <BankCardMode
                        paymentProcess={paymentProcess}
                        handleBankCardMethod={handleBankCardMethod}
                        calculateTotal={calculateTotal}
                        handlePaiement={handlePaiement}

                    />
                </Modal>


                <PaiementValidate
                    handlePaiement={handlePaiement}
                    showBasket={showBasket}
                    paymentProcess={paymentProcess}
                    calculateTotal={calculateTotal}
                    createOrder={createOrder}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                    handlePaiementMethod={handlePaiementMethod}
                    handleBankCardMethod={handleBankCardMethod}
                    cart={cart}
                    addressShipping={addressShipping}
                    facturationAdressStore={facturationAdressStore}
                    isSameAddress={isSameAddress}
                    slectedAdress={slectedAdress}
                    storeAdress={storeAdress}
                />
            </SafeAreaView >



        </>

    )
}

export default PaiementScreen