import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';

const BankCardMode = ({ handleBankCardMethod, handleCreateOrder, calculateTotal, handlePaiement, }) => {
    const [cardNumber, setCardNumber] = useState('1234 5678 1234 5678');
    const [cardName, setCardName] = useState('Jeff GBANZIALI');
    const [expiryDate, setExpiryDate] = useState('28 / 2028');
    const [cvv, setCVV] = useState('224');

    const stripe = useStripe();

    const handlePayment = async () => {
        // Créer un token de carte avec les informations de paiement
        /*  const cardDetails = {
              card: {
                  number: cardNumber.replace(/\s/g, ''), // Supprimer les espaces dans le numéro de carte
                  expMonth: parseInt(expiryDate.split(' / ')[0]), // Récupérer le mois d'expiration
                  expYear: parseInt(expiryDate.split(' / ')[1]), // Récupérer l'année d'expiration
                  cvc: cvv,
              },
          };
  
          try {
              // Créer un token de carte avec Stripe
              const cardToken = await stripe.createTokenWithCard(cardDetails);
  
              // Envoyer le token de carte au backend pour effectuer le paiement
              const response = await axios.post('URL_DE_VOTRE_ENDPOINT_BACKEND', {
                  token: cardToken.tokenId, // Envoyer l'ID du token de carte
                  amount: handlePaiement // Remplacez MONTANT_TOTAL_A_PAYER par le montant total à payer
              });
  
              // Traiter la réponse du backend si nécessaire
              console.log('Paiement réussi:', response.data);
              // Ajoutez ici la logique pour gérer le succès du paiement
  
              handleCreateOrder()
          } catch (error) {
              console.error('Erreur lors du paiement:', error);
              // Ajoutez ici la logique pour gérer les erreurs de paiement
          }*/
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: 50, position: 'absolute', borderBottomWidth: 1, top: 50, borderColor: 'gray', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>Carte Bancaire</Text>
                    <Pressable onPress={handleBankCardMethod} style={{ width: 50, height: 50, right: 2, position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="cross" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={{ width: '100%', height: 320, justifyContent: 'center' }}>
                    <View style={{ width: '100%', height: 90, paddingLeft: 20, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Numéro de la carte</Text>
                        <View style={{ width: '90%', height: 50, marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
                            <TextInput
                                style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                placeholder="1234 5678 9012 3456"
                                placeholderTextColor="black"
                                value={cardNumber}
                                keyboardType="numeric"
                                fontSize={16}
                                onChangeText={setCardNumber}
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, paddingLeft: 20, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Nom sur la carte</Text>
                        <View style={{ width: '90%', height: 50, marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
                            <TextInput
                                style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                placeholder="Nom sur la carte"
                                placeholderTextColor="black"
                                value={cardName}
                                fontSize={16}
                                onChangeText={setCardName}
                            />
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 90, paddingLeft: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 180, height: 90, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Date d'expiration</Text>
                            <View style={{ width: 140, height: 50, marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
                                <TextInput
                                    style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                    value={expiryDate}
                                    placeholder="MM / AA"
                                    placeholderTextColor="black"
                                    fontSize={16}
                                    onChangeText={setExpiryDate}
                                />
                            </View>
                        </View>
                        <View style={{ width: 180, height: 90, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>CVV / CVC</Text>
                            <View style={{ width: 100, height: 50, marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
                                <TextInput
                                    style={{ width: '100%', height: '100%', borderRadius: 10, paddingLeft: 10, color: 'black', fontSize: 16 }}
                                    value={cvv}
                                    placeholder="3 chiffres"
                                    fontSize={16}
                                    keyboardType="numeric"
                                    placeholderTextColor="black"
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
