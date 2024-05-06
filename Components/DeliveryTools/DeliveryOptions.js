import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeliveryOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        console.log("Option sélectionnée :", option);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sélectionnez un mode de livraison</Text>

            <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelectOption(1)}
            >
                <View style={styles.checkboxContainer}>
                    {selectedOption !== 1 ? (
                        <View style={styles.checkbox} />
                    ) : (
                        <View style={[styles.checkbox, styles.checked]} />
                    )}
                </View>
                <Text style={styles.optionText}>En boutique - Gratuit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelectOption(2)}
            >
                <View style={styles.checkboxContainer}>
                    {selectedOption !== 2 ? (
                        <View style={styles.checkbox} />
                    ) : (
                        <View style={[styles.checkbox, styles.checked]} />
                    )}
                </View>
                <Text style={styles.optionText}>Livraison en point-relais - 4 €</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelectOption(3)}
            >
                <View style={styles.checkboxContainer}>
                    {selectedOption !== 3 ? (
                        <View style={styles.checkbox} />
                    ) : (
                        <View style={[styles.checkbox, styles.checked]} />
                    )}
                </View>
                <Text style={styles.optionText}>Livraison à domicile - 8 €</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        paddingLeft: 20
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxContainer: {
        width: 28,
        height: 28,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: "center"

    },
    checkbox: {
        backgroundColor: 'transparent',
    },
    checked: {
        backgroundColor: 'gray',
        width: 14,
        height: 14,
        borderRadius: 30,


    },
    optionText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
});

export default DeliveryOptions;
