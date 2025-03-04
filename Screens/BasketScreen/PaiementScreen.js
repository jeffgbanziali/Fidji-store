import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, Dimensions, FlatList, StatusBar, Modal, Alert, Animated, Easing, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY, TEST_STRIPE_PUBLIC_KAY } from '@env';
import axios from 'axios';
import ProductsList from '../../Components/PaiementTools/ProductsList';
import DeliveryAdress from '../../Components/PaiementTools/DeliveryAdress';
import TotalCalculate from '../../Components/PaiementTools/TotalCalculate';
import PaiementValidate from '../../Components/PaiementTools/PaiementValidate';
import LoadingValidation from '../../Components/PaiementTools/PaiementMode/LoadingValidation';
import ChoosePaymentMethode from '../../Components/PaiementTools/PaiementMode/ChoosePaymentMethode';
import BankCardMode from '../../Components/PaiementTools/PaiementMode/BankCardMode';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';



const PaiementScreen = ({ }) => {

    const navigation = useNavigation()

    const [paymentMethod, setPaymentMethod] = useState("stripe");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [paymentProcess, setPaymentProcess] = useState(null);
    const [showBankCardModal, setShowBankCardModal] = useState(null);

    const stripe = useStripe();


    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);
    const [clientSecret, setClientSecret] = useState('');



    const retourned = () => {
        navigation.goBack("")
        // goToDétailsCommande()
    }


    const route = useRoute()

    const shipping = isSameAddress ? addressShipping : facturationAdressStore;


    const { cart, removeFromCart, addressShipping, facturationAdressStore, isSameAddress, slectedAdress, storeAdress, selectedOption } = route.params

    const createOrder = async () => {
        const orderData = {
            payment_method: paymentMethod,
            payment_method_title: selectedPaymentMethod,
            set_paid: false, // Laisser en attente de paiement
            billing: slectedAdress,
            line_items: cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity
            })),
            shipping: addressShipping
        };

        console.log("Données de la commande : ", orderData);

        try {
            const response = await axios.post(`${APP_API_URL}/wc/v3/orders`, orderData, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                },
            });
            console.log("Commande créée avec succès :", response.data);

            setPaymentProcess(response.data); // ✅ Stocker l'objet de la commande
            return response.data.id; // ✅ Retourner l'ID de la commande
        } catch (error) {
            console.error("Erreur lors de la création de la commande :", error.response ? error.response.data : error.message);
            return null;
        }
    };






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




    const delivery = selectedOption === 2 ? 8 : 0;
    const shippingCost = calculateTotal() > 200 ? 0 : delivery;

    const handlePaiement = calculateTotal() + shippingCost
    const fetchPaymentIntent = async () => {
        try {
            const response = await axios.post('http://localhost:3000/create-payment-intent', {
                amount: handlePaiement * 100, // Montant en centimes
                currency: 'eur',
            });
            setClientSecret(response.data.clientSecret);
        } catch (e) {
            console.warn('Erreur lors de la récupération du PaymentIntent :', e.message);
        }
    };

    useEffect(() => {
        fetchPaymentIntent();
    }, []);


    const markOrderAsPaid = async (orderId) => {
        if (!orderId) {
            console.error("Erreur : ID de commande manquant !");
            return;
        }

        const url = `${APP_API_URL}/wc/v3/orders/${orderId}`;
        console.log("URL de mise à jour de la commande :", url);

        try {
            const response = await axios.put(url, {
                set_paid: true,
                status: "completed"
            }, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                },
            });
            console.log("Commande mise à jour avec succès :", response.data);
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la commande :", error.response ? error.response.data : error.message);
        }
    };



    const openPaymentSheet = async () => {
        if (!clientSecret) return;

        try {
            // ✅ 1. Créer la commande WooCommerce avec un paiement en attente
            const orderId = await createOrder();

            if (!orderId) {
                Alert.alert('Erreur', 'Impossible de créer la commande WooCommerce.');
                return;
            }

            // ✅ 2. Initialiser le PaymentSheet Stripe avec le clientSecret existant
            const { error } = await stripe.initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName: 'Fidji Store',
                allowsDelayedPaymentMethods: true,
            });

            if (error) {
                Alert.alert('Erreur', error.message);
                return;
            }

            // ✅ 3. Afficher le PaymentSheet pour finaliser le paiement
            const { error: paymentError } = await stripe.presentPaymentSheet();

            if (paymentError) {
                Alert.alert('Erreur', paymentError.message);
            } else {
                Alert.alert('Succès', 'Paiement effectué avec succès !');

                // ✅ 4. Marquer la commande WooCommerce comme "payée"
                await markOrderAsPaid(orderId);

                // ✅ 5. Naviguer vers l'écran de confirmation de commande
                goToDétailsCommande(orderId);
            }

        } catch (e) {
            console.error("Erreur lors du paiement :", e.message);
        }
    };

    // Fonction pour naviguer vers l'écran de détails de commande



    const goToDétailsCommande = (orderId) => {
        navigation.navigate('DétailsCommande', { orderId });
    };









    return (
        <StripeProvider publishableKey={TEST_STRIPE_PUBLIC_KAY}>


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

                <ProductsList
                    cart={cart}
                    removeFromCart={removeFromCart}
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
                    shippingCost={shippingCost}
                    calculateTotal={calculateTotal}
                />





                <PaiementValidate
                    handlePaiement={handlePaiement}
                    showBasket={showBasket}
                    paymentProcess={paymentProcess}
                    calculateTotal={calculateTotal}
                    createOrder={createOrder}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                    handlePaiementMethod={openPaymentSheet}
                    handleBankCardMethod={openPaymentSheet}
                    openPaymentSheet={openPaymentSheet}
                    cart={cart}
                    addressShipping={addressShipping}
                    facturationAdressStore={facturationAdressStore}
                    isSameAddress={isSameAddress}
                    slectedAdress={slectedAdress}
                    storeAdress={storeAdress}
                />
            </SafeAreaView >



        </StripeProvider >

    )
}

export default PaiementScreen