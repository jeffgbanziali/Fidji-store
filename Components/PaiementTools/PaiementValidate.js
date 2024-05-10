import { View, Text, Pressable, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import PaiementMode from './PaiementMode';


const PaiementValidate = ({ calculateTotal, handlePaiement }) => {


    const navigation = useNavigation()

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
                onPress={() => handlePaiementMethod()}
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
                <PaiementMode handlePaiementMethod={handlePaiementMethod} />
            </Modal>
        </View>
    )
}

export default PaiementValidate