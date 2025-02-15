import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { APP_API_URL, CUSTOMER_KEY, SECRET_KEY } from '@env';
import { useStripe } from '@stripe/stripe-react-native';


const BankCardMode = ({ handleBankCardMethod, paymentProcess, calculateTotal, handlePaiement, }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCVV] = useState('');

    const stripe = useStripe();



    const handlePayment = async () => {
        const cardDetails = {
            number: cardNumber.replace(/\s/g, ''),
            expMonth: expiryMonth,
            expYear: expiryYear,
            cvc: cvv,
        };

        try {
            // Créer un token de carte avec Stripe
            const { token, error } = await stripe.createToken({ card: cardDetails });

            if (error) {
                console.error('Erreur lors de la création du token:', error);
                return;
            }

            // Envoyer le token de carte au backend pour effectuer le paiement
            const response = await axios.post(`${APP_API_URL}/wc/v3/orders/${paymentProcess.id}/payment`, {
                token: token.id,
                amount: handlePaiement * 100, // Montant en cents
            }, {
                params: {
                    consumer_key: CUSTOMER_KEY,
                    consumer_secret: SECRET_KEY,
                },
            });

            // Traiter la réponse du backend si nécessaire
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
                <View style={{
                    width: '100%',
                    height: 320,
                    marginTop: 10,

                }}>
                    <View style={{
                        width: '100%',
                        height: 90,
                        paddingLeft: 20,
                        justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Numéro de la carte</Text>
                        <View style={{ width: '90%', height: 50, marginTop: 10, backgroundColor: "#e5e7e6", borderRadius: 10, }}>
                            <TextInput
                                style={{ width: '100%', height: '100%', fontWeight: '600', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                placeholder="1234 5678 9012 3456"
                                placeholderTextColor="gray"
                                value={cardNumber}
                                keyboardType="numeric"
                                fontSize={16}
                                onChangeText={setCardNumber}
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, paddingLeft: 20, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Nom sur la carte</Text>
                        <View style={{ width: '90%', height: 50, marginTop: 10, backgroundColor: "#e5e7e6", borderRadius: 10, }}>
                            <TextInput
                                style={{ width: '100%', height: '100%', fontWeight: '600', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                placeholder="Nom sur la carte"
                                placeholderTextColor="gray"
                                value={cardName}
                                fontSize={16}
                                onChangeText={setCardName}
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, flexDirection: 'row', }}>

                        <View style={{ width: 250, height: "100%", justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>

                            <View style={{ width: 80, height: 50, margin: 10, borderRadius: 10, backgroundColor: "#e5e7e6" }}>
                                <TextInput
                                    style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                    value={expiryMonth}
                                    placeholder="MM"
                                    placeholderTextColor="gray"
                                    fontSize={16}
                                    onChangeText={setExpiryMonth}
                                />
                            </View>
                            <View style={{ width: 100, height: 50, borderRadius: 10, backgroundColor: "#e5e7e6" }}>
                                <TextInput
                                    style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                    value={expiryYear}
                                    placeholder="AAAA"
                                    placeholderTextColor="gray"
                                    fontSize={16}
                                    onChangeText={setExpiryYear}
                                />
                            </View>
                        </View>
                        <View style={{ width: 180, height: 90, alignItems: 'center', justifyContent: "center" }}>
                            <View style={{ width: 100, height: 50, borderRadius: 10, backgroundColor: "#e5e7e6" }}>
                                <TextInput
                                    style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                    value={cvv}
                                    placeholder="CVC"
                                    fontSize={16}
                                    keyboardType="numeric"
                                    placeholderTextColor="gray"
                                    onChangeText={setCVV}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable onPress={handlePayment} style={{ width: 320, height: 60, margin: 4, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Commander - {handlePaiement} €</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default BankCardMode;
