import { View, Text } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';


const DeliveryAdress = ({ userData, addressShipping, facturationAdressStore, isSameAddress, storeAdress, selectedOption }) => {

    console.log("addressShipping ", addressShipping)


    return (
        <View
            style={{
                width: "100%",
                height: 180,
                borderBottomWidth: 1,
                borderColor: "gray",
                justifyContent: "center",

            }}>

            {
                selectedOption === 2 ? (
                    <>
                        <View
                            style={{
                                width: "100%",
                                height: "20%",
                                flexDirection: "row",
                                alignItems: "center"
                            }} >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: "black",
                                    paddingLeft: 20,
                                }}>
                                Livraison à domicile
                            </Text>

                        </View>


                        <View
                            style={{
                                width: "100%",
                                height: "80%",
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
                                        marginTop: 2,
                                    }}>
                                    {addressShipping.first_name} {addressShipping.last_name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: 'black',
                                        marginTop: 2,
                                    }}>
                                    {userData.customerData.email}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: 'black',
                                        marginTop: 2,
                                    }}>
                                    {addressShipping.address_1} {addressShipping.address_2}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: 'black',
                                        marginTop: 2,
                                    }}>
                                    {addressShipping.postcode} {addressShipping.city} - {addressShipping.country}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: 'black',
                                        marginTop: 2,
                                    }}>
                                    {addressShipping.phone || 'Phone non renseigné'}
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
                                livraison en 1h à la boutique
                            </Text>

                        </View>
                    </>
                )
            }




        </View >
    )
}

export default DeliveryAdress