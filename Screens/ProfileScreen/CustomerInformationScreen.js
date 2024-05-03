import { View, SafeAreaView, Text, Dimensions, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const CustomerInformationScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const bottomTabHeight = useBottomTabBarHeight();

    const navigation = useNavigation();

    const retourned = () => {
        navigation.goBack()

    }

    const userData = useSelector((state) => state.userReducer)

    const data = userData.customerData



    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                backgroundColor: "#f5e1ce"

            }}>
            <View
                style={{
                    width: "100%",
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5e1ce"

                }}>

                <Pressable
                    onPress={retourned}
                    style={{
                        width: 50,
                        height: 50,
                        left: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color: "black"
                    }} >
                    Informations personnelles
                </Text>

            </View>

            <ScrollView>
                <View
                    style={{
                        width: "100%",
                        height: 350,
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>

                    <View
                        style={{
                            width: 380,
                            height: 60,
                            borderRadius: 4,
                            flexDirection: "row",
                            borderWidth: 1,
                            borderColor: "gray",
                            backgroundColor: "white"

                        }} >

                        <TextInput
                            style={{
                                width: "90%",
                                height: "100%",
                                paddingLeft: 12,
                                fontSize: 20,
                                color: 'black',
                            }}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            fontSize={20}
                            placeholder={data.username}
                            placeholderTextColor="black"
                            autoCapitalize="none"

                        />



                    </View>

                    <View
                        style={{
                            width: 380,
                            height: 60,
                            borderRadius: 4,
                            flexDirection: "row",
                            borderWidth: 1,
                            borderColor: "gray",
                            backgroundColor: "white"

                        }} >

                        <TextInput
                            style={{
                                width: "90%",
                                height: "100%",
                                paddingLeft: 12,
                                fontSize: 20,
                                color: 'black',
                            }}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder={data.first_name}
                            fontSize={20}
                            placeholderTextColor="black"
                            autoCapitalize="none"

                        />



                    </View>

                    <View
                        style={{
                            width: 380,
                            height: 60,
                            borderRadius: 4,
                            flexDirection: "row",
                            borderWidth: 1,
                            borderColor: "gray",
                            backgroundColor: "white"

                        }} >

                        <TextInput
                            style={{
                                width: "90%",
                                height: "100%",
                                paddingLeft: 12,
                                fontSize: 20,
                                color: 'black',
                            }}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder={data.last_name}
                            fontSize={20}
                            placeholderTextColor="black"
                            autoCapitalize="none"

                        />



                    </View>

                    <View
                        style={{
                            width: 380,
                            height: 60,
                            borderRadius: 4,
                            flexDirection: "row",
                            borderWidth: 1,
                            borderColor: "gray",
                            backgroundColor: "white"

                        }} >

                        <TextInput
                            style={{
                                width: "90%",
                                height: "100%",
                                paddingLeft: 12,
                                fontSize: 20,
                                color: 'black',
                            }}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder={data.email}
                            fontSize={20}
                            placeholderTextColor="black"
                            autoCapitalize="none"

                        />



                    </View>

                    <View
                        style={{
                            width: 380,
                            height: 60,
                            borderRadius: 4,
                            flexDirection: "row",
                            borderWidth: 1,
                            borderColor: "gray",
                            backgroundColor: "white"

                        }} >

                        <TextInput
                            style={{
                                width: "90%",
                                height: "100%",
                                paddingLeft: 12,
                                fontSize: 20,
                                color: 'black',
                            }}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder={data.billing.phone === "" ? "Votre numéro de téléphone" : data.billing.phone}
                            fontSize={20}
                            placeholderTextColor="black"
                            autoCapitalize="none"

                        />



                    </View>

                </View>

                <View
                    style={{
                        width: "100%",
                        height: 150,
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>


                    <View
                        style={{
                            width: "100%",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Pressable
                            style={{

                                borderBottomWidth: 2,

                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: "black",

                                }}>
                                Modifier mon adresse email

                            </Text>
                        </Pressable>

                    </View>

                    <View
                        style={{
                            width: "100%",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Pressable
                            style={{

                                borderBottomWidth: 2,

                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: "black",

                                }}>
                                Modifier mon mot de passe

                            </Text>
                        </Pressable>

                    </View>

                    <View
                        style={{
                            width: "100%",
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Pressable
                            style={{

                                borderBottomWidth: 2,
                                borderColor: "red"

                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "500",
                                    color: "red",

                                }}>
                                Supprimer mon compte

                            </Text>
                        </Pressable>

                    </View>




                </View>

                <View
                    style={{
                        width: "100%",
                        height: 150,
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>


                    <View
                        style={{
                            width: "98%",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingLeft: 5
                        }}>

                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "500",
                                color: "black",
                                textAlign: "left"

                            }}>
                            RECEVEZ NOS INVITATIONS : NOTRE NEWSLETTER POUR ÊTRE AU COURANT DE TOUT, TOUT LE MONDE

                        </Text>
                    </View>


                    <View
                        style={{
                            width: "98%",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingLeft: 5
                        }}>

                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "500",
                                color: "black",
                                textAlign: "left"

                            }}>
                            Notre newsletter pour être au courant de tout avant tout le monde

                        </Text>
                    </View>

                    <View
                        style={{
                            width: "50%",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "row"
                        }}>



                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                width: 100,
                            }}>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 30,
                                    backgroundColor: "green",

                                }}>

                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingLeft: 10,
                                    color: "black",

                                }}>
                                Oui
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                width: 100,
                            }}>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 30,
                                    backgroundColor: "green",

                                }}>

                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingLeft: 10,
                                    color: "black",
                                    textAlign: "left"

                                }}>

                                Non

                            </Text>
                        </View>

                    </View>

                </View>


            </ScrollView>

            <View
                style={{
                    width: "100%",
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Pressable
                    style={{
                        width: 300,
                        height: 50,
                        borderRadius: 10,
                        justifyContent: "center",
                        backgroundColor: "black",
                        alignItems: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "500",
                            color: "white",

                        }}>
                        Me déconnecter

                    </Text>
                </Pressable>

            </View>






        </SafeAreaView >
    )
}

export default CustomerInformationScreen