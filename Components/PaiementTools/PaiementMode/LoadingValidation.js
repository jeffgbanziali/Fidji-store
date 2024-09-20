import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingValidation = () => {
    return (
        <View style={styles.container}>


            <View
                style={{
                    width: 300,
                    height: 200,
                }}>
                <Image
                    source={require('../../../assets/image/3.jpg')}
                    style={{
                        width: '100%',
                        height: "100%",
                        position: "absolute"
                    }
                    } />
            </View>
            <Text
                style={{
                    fontSize: 26,
                    color: "white",
                }}
            >
                Votre commande est cours de traitement
            </Text>
            <View
                style={{
                    width: 300,
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <ActivityIndicator size="large" color="white" />

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: "100%",
        width: "100%",
        alignItems: 'center',
        backgroundColor: "#131313"
    },
});


export default LoadingValidation