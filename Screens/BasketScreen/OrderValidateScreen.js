import { View, Text, Modal, Pressable } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OrderValidateScreen = () => {

    const navigation = useNavigation()


    const onClose = () => {
        navigation.navigate('Basket')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                <Text>Votre commande a été validée avec succès!</Text>
                <Pressable onPress={onClose} style={{ marginTop: 10 }}>
                    <Text>Fermer</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default OrderValidateScreen