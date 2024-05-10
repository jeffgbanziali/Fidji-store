import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PaiementValidate = ({ calculateTotal, handlePaiement }) => {


    const navigation = useNavigation()


    const handleChoice = () => {
        console.log("Je l'ai validé")
    }
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
                onPress={() => handleChoice()}
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
        </View>
    )
}

export default PaiementValidate