import { View, Text } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';


const DeliveryAdress = ({ addressShipping, facturationAdressStore, isSameAddress, storeAdress, selectedOption }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 120,
                borderBottomWidth: 1,
                borderColor: "gray",
                justifyContent: "center"

            }}>

            {
                selectedOption === 2 ? (
                    <>

                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "600",
                                color: "black",
                                paddingLeft: 20,
                            }}>
                            Livraison à domicile
                        </Text>



                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                paddingLeft: 20,
                                alignItems: "center"

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
                                        fontWeight: '500',
                                        color: 'black',
                                    }}>
                                    {addressShipping.first_name} {addressShipping.last_name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: 'black',
                                    }}>
                                    {addressShipping.address_1} {addressShipping.address_2}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: 'black',
                                    }}>
                                    {addressShipping.postcode} {addressShipping.city} - {addressShipping.country}
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
                                    <SimpleLineIcons name="arrow-right" size={20} color="black" />
                                </View>

                            </View>
                        </View>
                    </>

                ) : (
                    <>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "600",
                                color: "black",
                                paddingLeft: 20,
                            }}>
                            Livraison en boutique
                        </Text>

                        <View
                            style={{
                                width: "100%",
                                paddingLeft: 20,
                                paddingTop: 4,


                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '500',
                                    color: 'black',
                                }}>
                                Boutique FIDJI - Paris
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: 'black',
                                }}>
                                25 rue des martyrs, Paris 75009
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: 'black',
                                }}>
                                livraisn en 1h à la boutique
                            </Text>

                        </View>
                    </>
                )
            }




        </View >
    )
}

export default DeliveryAdress