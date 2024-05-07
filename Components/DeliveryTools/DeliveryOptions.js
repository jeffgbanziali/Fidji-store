import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';



const DeliveryOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [storeDelivery, setStoreDelivery] = useState(false)
    const [homeDelivery, setHomeDelivery] = useState(false);
    const [heightAnimation] = useState(new Animated.Value(0));
    const [iconAnimation] = useState(new Animated.Value(0));
    const userData = useSelector((state) => state.userReducer)



    console.log("Ma data ", userData.customerData.billing)


    const handleSelectOption = (option) => {
        setSelectedOption(option);
        if (option === 1) {
            setStoreDelivery(true);
            setHomeDelivery(false);

        } else if (option === 2) {
            setHomeDelivery(true);
            setStoreDelivery(false);

        } else {
            setStoreDelivery(false);
            setHomeDelivery(false);
        }
    };



    useEffect(() => {
        Animated.timing(
            heightAnimation,
            {
                toValue: storeDelivery || homeDelivery ? 200 : 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();

        Animated.timing(
            iconAnimation,
            {
                toValue: storeDelivery || homeDelivery ? 1 : 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();
    }, [storeDelivery, homeDelivery]);

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

            <Animated.View
                style={[
                    styles.deliveryDetails,
                    {
                        height: heightAnimation,
                        opacity: iconAnimation,
                    },
                    storeDelivery && styles.show
                ]}
            >
                <View
                    style={{
                        width: "100%",
                        paddingLeft: 20,
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '500',
                            color: 'black',
                        }}>
                        Boutique FIDJI - Paris
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            paddingTop: 4,
                            fontWeight: '500',
                            color: 'black',
                        }}>
                        25 rue des martyrs Paris 75009
                        livraisn en 1h à la boutique
                    </Text>

                </View>

                {
                    userData.customerData.billing.length === 0 ? (
                        <View
                            style={{
                                width: "100%",
                                paddingTop: 14,
                            }}>

                            <Text
                                style={{
                                    fontSize: 20,
                                    paddingLeft: 20,
                                    fontWeight: '500',
                                    color: 'black',
                                }}>
                                Adresse de facturation
                            </Text>

                            <View
                                style={{
                                    width: "100%",
                                    height: 80,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <View
                                    style={{
                                        width: 320,
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: "black",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            color: 'white',
                                        }}>
                                        Ajouter une adresse
                                    </Text>
                                </View>
                            </View>

                        </View>
                    ) : (
                        <View
                            style={{
                                width: "100%",
                                paddingTop: 14,
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    paddingLeft: 20,
                                    fontWeight: '500',
                                    color: 'black',
                                }}>
                                Adresse de facturation
                            </Text>

                            <View
                                style={{
                                    width: "100%",
                                    flexDirection: "row"
                                }}>

                                <View
                                    style={{
                                        width: "85%",
                                        height: 80,
                                        justifyContent: "center"
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            paddingLeft: 20,
                                            fontWeight: '500',
                                            color: 'black',
                                        }}>
                                        {userData.customerData.billing.first_name} {userData.customerData.billing.last_name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            paddingLeft: 20,
                                            fontWeight: '500',
                                            color: 'black',
                                        }}>
                                        {userData.customerData.billing.address_1} {userData.customerData.billing.address_2}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            paddingLeft: 20,
                                            fontWeight: '500',
                                            color: 'black',
                                        }}>
                                        {userData.customerData.billing.postcode} {userData.customerData.billing.city} - {userData.customerData.billing.country}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: "15%",
                                        height: 80,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                    <View
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 30,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <AntDesign name="check" size={24} color="black" />
                                    </View>

                                </View>
                            </View>


                        </View>
                    )
                }



            </Animated.View>


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
                <Text style={styles.optionText}>Livraison à domicile - 8 €</Text>
            </TouchableOpacity>
            <Animated.View
                style={[
                    styles.deliveryDetails,
                    {
                        height: heightAnimation,
                        opacity: iconAnimation,
                    },
                    homeDelivery && styles.show
                ]}
            >

                <View
                    style={{
                        width: "100%",
                        height: 80,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <View
                        style={{
                            width: 320,
                            height: 50,
                            borderRadius: 10,
                            backgroundColor: "black",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: 'white',
                            }}>
                            Ajouter une adresse
                        </Text>
                    </View>


                </View>

                <View
                    style={{
                        width: "100%",
                        height: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row"
                    }}>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <AntDesign name="checkcircle" size={24} color="black" />
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '500',
                            paddingLeft: 10

                        }}>Utiliser cette adresse comme adresse de facturation</Text>
                </View>
            </Animated.View >

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        backgroundColor: "grau"
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 20,
        paddingLeft: 20,

    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 20,
        borderBottomWidth: 1,
        height: 60,
        // backgroundColor: "red"

    },
    checkboxContainer: {
        width: 25,
        height: 25,
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
        width: 12,
        height: 12,
        borderRadius: 30,


    },
    deliveryDetails: {
        width: "100%",
        height: 300,
        backgroundColor: "lightgray",
        marginBottom: 10,
        display: 'none',
    },
    show: {
        display: 'flex',
    },
    optionText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
});

export default DeliveryOptions;
