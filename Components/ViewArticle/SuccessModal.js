import { useEffect } from 'react';
import { Modal, Text, Pressable, View, StyleSheet } from 'react-native';

const SuccessModal = ({ visible, onClose }) => {


    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 1200000);

            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);


    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 10,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginBottom: 10,
                        }}>
                        L'article a été ajouté au panier avec succès !
                    </Text>
                    <Pressable onPress={onClose}>
                        <Text
                            style={{
                                color: 'blue',
                                fontSize: 16,
                            }}>Fermer</Text>
                    </Pressable>
                </View>
            </View>
        </Modal >
    );
};


export default SuccessModal