import { View, Text, SafeAreaView, Pressable, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons';


const BankCardMode = ({ handleBankCardMethod, handleCreateOrder }) => {




    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                alignItems: "center",
                height: "100%",
                width: "100%",

            }}
        >

            <SafeAreaView
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",

                }}>

                <View
                    style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        position: "absolute",
                        borderBottomWidth: 1,
                        top: 50,
                        borderColor: 'gray',
                        paddingLeft: 10
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "black"
                        }}>Carte Bancaire
                    </Text>
                    <Pressable
                        onPress={handleBankCardMethod}
                        style={{
                            width: 50,
                            height: 50,
                            right: 2,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Entypo name="cross" size={24} color="black" />
                    </Pressable>
                </View>



                <View
                    style={{
                        width: "100%",
                        height: 320,
                        justifyContent: "center",
                    }}>



                    <View
                        style={{
                            width: "100%",
                            height: 90,
                            paddingLeft: 20,
                            justifyContent: "center",
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "500",
                                color: "black"
                            }}>
                            Numéro de la carte carte
                        </Text>

                        <View
                            style={{
                                width: "90%",
                                height: 50,
                                marginTop: 10,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                //backgroundColor: "blue"
                            }}>
                            <TextInput
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 10,
                                    paddingLeft: 10,
                                    color: 'black',
                                    fontSize: 16
                                }}
                                placeholder="1234 5678 9012 3456"
                                placeholderTextColor="black"
                                value={cardNumber}
                                keyboardType="numeric"
                                fontSize={16}
                                onChangeText={setCardNumber}
                            />
                        </View>

                    </View>

                    <View
                        style={{
                            width: "100%",
                            height: 90,
                            paddingLeft: 20,
                            justifyContent: "center",
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "500",
                                color: "black"
                            }}>
                            Nom sur la carte
                        </Text>
                        <View
                            style={{
                                width: "90%",
                                height: 50,
                                marginTop: 10,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                            }}>
                            <TextInput
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 10,
                                    paddingLeft: 10,
                                    color: 'black',
                                    fontSize: 16
                                }}
                                placeholder="Entrer le numéro sur votre carte"
                                placeholderTextColor="black"
                                value={cardName}
                                fontSize={16}
                                onChangeText={setCardName}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            height: 90,
                            paddingLeft: 20,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                        <View
                            style={{
                                width: 180,
                                height: 90,
                                justifyContent: "center",
                            }}>

                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    color: "black"
                                }}>
                                Date d'expiration
                            </Text>
                            <View
                                style={{
                                    width: 140,
                                    height: 50,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                }}>
                                <TextInput
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 10,
                                        paddingLeft: 10,
                                        color: 'black',
                                        fontSize: 16
                                    }}
                                    value={expiryDate}
                                    placeholder="MM / AA"
                                    placeholderTextColor="black"
                                    fontSize={16}
                                    onChangeText={setExpiryDate}
                                />
                            </View>
                        </View>


                        <View
                            style={{
                                width: 180,
                                height: 90,
                                justifyContent: "center",
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "500",
                                    color: "black"
                                }}>
                                CVV / CVC
                            </Text>
                            <View
                                style={{
                                    width: 100,
                                    height: 50,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                }}>
                                <TextInput
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 10,
                                        paddingLeft: 10,
                                        color: 'black',
                                        fontSize: 16
                                    }}
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


                <View
                    style={{
                        width: "100%",
                        height: 70,
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                    <Pressable
                        onPress={() => handleCreateOrder()}
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
                            Commander -  €
                        </Text>
                    </Pressable>
                </View>




            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default BankCardMode