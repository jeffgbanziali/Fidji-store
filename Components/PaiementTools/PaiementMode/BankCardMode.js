import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';
import { CardField, useStripe } from '@stripe/stripe-react-native';



const BankCardMode = ({ handleBankCardMethod, paymentProcess, calculateTotal, handlePaiement, }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCVV] = useState('');
    const [cardDetails, setCardDetails] = useState({});


    const stripe = useStripe(); // Décommenté pour utiliser Stripe

    const handlePayment = async () => {
        if (!cardDetails?.complete) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs de la carte.');
            return;
        }

        try {
            // Utilisation de createPaymentMethod
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                paymentMethodType: 'Card',
                card: cardDetails,
            });

            if (error) {
                console.error('Erreur lors de la création du PaymentMethod:', error);
                Alert.alert('Erreur', error.message);
                return;
            }

            console.log("PaymentMethod créé:", paymentMethod);

            // Envoyer le paymentMethod.id à ton backend pour le paiement
            const response = await axios.post(`${APP_API_URL}/wc/v3/orders/${paymentProcess.id}/payment`, {
                payment_method_id: paymentMethod.id,
                amount: handlePaiement * 100, // Montant en cents
            }, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                },
            });

            console.log('Paiement réussi:', response.data);
            Alert.alert('Succès', 'Le paiement a été effectué avec succès !');
        } catch (error) {
            console.error('Erreur lors du paiement:', error);
            Alert.alert('Erreur', 'Une erreur est survenue lors du paiement.');
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white', }}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 50, position: 'relative', borderBottomWidth: 1, borderColor: '#e5e7e6', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Carte Bancaire</Text>
                    <Pressable onPress={handleBankCardMethod} style={{ width: 50, height: 50, right: 2, position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="cross" size={24} color="black" />
                    </Pressable>
                </View>

                <View style={{ width: '100%', height: 320, marginTop: 10, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Détails de la carte</Text>
                    <CardField
                        postalCodeEnabled={false}
                        placeholder={{
                            number: '1234 5678 9012 3456',
                        }}
                        cardStyle={{
                            backgroundColor: '#e5e7e6',
                            textColor: 'black',
                        }}
                        style={{
                            width: '100%',
                            height: 50,
                            marginVertical: 20,
                        }}
                        onCardChange={(cardDetails) => {
                            setCardDetails(cardDetails);
                        }}
                    />
                </View>
                <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable onPress={handlePayment} style={{ width: 320, height: 60, margin: 4, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Commander - {handlePaiement} €</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default BankCardMode;
