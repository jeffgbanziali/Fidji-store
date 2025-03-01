import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const DétailsCommande = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { orderId } = route.params; // Récupération de l'ID de la commande

    const handleReturnHome = () => {
        navigation.navigate('HomeScreen'); // Naviguer vers l'écran d'accueil
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center', padding: 20 }}>


            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>
                    🎉 Commande réussie !
                </Text>

                <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 }}>
                    Vous recevrez les détails de votre achat par e-mail.
                </Text>

                <Text style={{ fontSize: 16, color: '#333', marginTop: 10 }}>
                    Numéro de commande : {orderId}
                </Text>
            </View>

            <Pressable
                onPress={handleReturnHome}
                style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4CAF50', padding: 15, borderRadius: 15, marginTop: 30, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 }}
            >
                <MaterialIcons name="home" size={24} color="white" />
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>
                    Retour à l'accueil
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default DétailsCommande;
