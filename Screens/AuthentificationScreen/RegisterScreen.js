import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {

    const navigation = useNavigation()
    const [showPass, setShowPass] = useState()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");

    const viewPass = () => {
        setShowPass(!showPass)
    }

    const retourned = () => {
        navigation.goBack("Start")
    }

    const handleRefresh = () => {
        setEmail('');

    };

    const validateFields = () => {
        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            identity.trim() === "" ||
            email.trim() === "" ||
            password.trim() === ""
        ) {
            alert("Veuillez remplir tous les champs.");
            return false;
        }
        return true;
    };


    const handleGoSign = () => {
        navigation.navigate("Signin")

    };

    const data = {
        first_name: firstName,
        last_name: lastName,
        username: identity,
        email: email,
        password: password

    }
    const handleRegister = (data) => {

        if (validateFields()) {
            navigation.navigate("Adress", { data });
        }

    }



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
                    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    alignItems: "center",
                }}>
                <ScrollView>

                    <View
                        style={{
                            width: "100%",
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center"

                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: "black"
                            }} >
                            Inscription
                        </Text>

                        <Pressable
                            onPress={retourned}
                            style={{
                                width: 50,
                                height: 50,
                                right: 2,
                                position: "absolute",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <Entypo name="cross" size={30} color="black" />
                        </Pressable>


                    </View>

                    <View
                        style={{
                            width: "100%",
                            height: "90%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>


                        <View
                            style={{
                                width: "60%",
                                height: 120,
                                alignItems: "center",
                                //backgroundColor: "gray",
                                justifyContent: "center"
                            }}>
                            <Image
                                source={require('../../assets/image/2.jpg')}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}

                            />


                        </View>

                        <View
                            style={{
                                width: "100%",
                                height: 300,
                                alignItems: "center",
                                justifyContent: "space-evenly"
                            }}>



                            <View
                                style={{
                                    width: 350,
                                    height: 50,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    borderWidth: 2,
                                    borderColor: "black",
                                    backgroundColor: "white"

                                }} >

                                <TextInput
                                    style={{
                                        width: "90%",
                                        height: "100%",
                                        paddingLeft: 12,
                                        fontSize: 18,
                                        color: 'black',
                                    }}
                                    onChangeText={(text) => setFirstName(text)}
                                    value={firstName}
                                    placeholder="Prénom"
                                    placeholderTextColor="black" />


                                <Pressable
                                    onPress={handleRefresh}
                                    style={{
                                        width: "10%",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}>
                                    <Entypo name="cross" size={24} color="black" />

                                </Pressable>

                            </View>



                            <View
                                style={{
                                    width: 350,
                                    height: 50,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    borderWidth: 2,
                                    borderColor: "black",
                                    backgroundColor: "white"

                                }} >

                                <TextInput
                                    style={{
                                        width: "90%",
                                        height: "100%",
                                        paddingLeft: 12,
                                        fontSize: 18,
                                        color: 'black',
                                    }}
                                    onChangeText={(text) => setLastName(text)}
                                    value={lastName}
                                    placeholder="Nom"
                                    placeholderTextColor="black"
                                     />


                                <Pressable
                                    onPress={handleRefresh}
                                    style={{
                                        width: "10%",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}>
                                    <Entypo name="cross" size={24} color="black" />

                                </Pressable>

                            </View>


                            <View
                                style={{
                                    width: 350,
                                    height: 50,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    borderWidth: 2,
                                    borderColor: "black",
                                    backgroundColor: "white"

                                }} >

                                <TextInput
                                    style={{
                                        width: "90%",
                                        height: "100%",
                                        paddingLeft: 12,
                                        fontSize: 18,
                                        color: 'black',
                                    }}
                                    onChangeText={(text) => setIdentity(text)}
                                    value={identity}
                                    placeholder="Identifiant"
                                    placeholderTextColor="black"
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    textContentType="username"
                                    autoCompleteType="username"
                                    autoComplete="username"

                                     />


                                <Pressable
                                    onPress={handleRefresh}
                                    style={{
                                        width: "10%",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}>
                                    <Entypo name="cross" size={24} color="black" />

                                </Pressable>

                            </View>

                            <View
                                style={{
                                    width: 350,
                                    height: 50,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    borderWidth: 2,
                                    borderColor: "black",
                                    backgroundColor: "white"

                                }} >

                                <TextInput
                                    style={{
                                        width: "90%",
                                        height: "100%",
                                        paddingLeft: 12,
                                        fontSize: 18,
                                        color: 'black',
                                    }}
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                    placeholder="E-mail"
                                    placeholderTextColor="black" 
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    autoCompleteType="email"
                                    autoComplete="email"
                                    />


                                <Pressable
                                    onPress={handleRefresh}
                                    style={{
                                        width: "10%",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}>
                                    <Entypo name="cross" size={24} color="black" />

                                </Pressable>

                            </View>

                            <View
                                style={{
                                    width: 350,
                                    height: 50,
                                    borderWidth: 2,
                                    borderColor: "black",
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    backgroundColor: "white"
                                }} >
                                <TextInput
                                    style={{
                                        width: "90%",
                                        paddingLeft: 12,
                                        height: "100%",
                                        fontSize: 18,
                                        color: 'black',
                                    }}
                                    onChangeText={(text) => setPassword(text)}
                                    value={password}
                                    secureTextEntry={!showPass}
                                    placeholder="Mot de passe"
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    textContentType="password"
                                    autoCompleteType="password"
                                    autoComplete="password"
                                    placeholderTextColor="black" />

                                <Pressable
                                    onPress={viewPass}
                                    style={{
                                        width: "10%",
                                        height: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",

                                    }}>
                                    {
                                        showPass ? (
                                            <Feather name="eye" size={20} color="black" />
                                        ) : (
                                            <Feather name="eye-off" size={20} color="black" />
                                        )
                                    }

                                </Pressable>
                            </View>


                        </View>


                        <View
                            style={{
                                width: "100%",
                                height: 160,
                                alignItems: "center",
                                justifyContent: "space-evenly"
                            }}>

                            <View
                                style={{
                                    flexDirection: "row",
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "500",
                                        alignItems: "center",

                                        color: "black"
                                    }} >
                                    Vous avez un compte ?


                                </Text>
                                <Pressable
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingLeft: 10
                                    }}

                                    onPress={handleGoSign}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: "blue"
                                        }} >
                                        Connecter vous
                                    </Text>
                                </Pressable>
                            </View>


                            <Pressable
                                onPress={() => handleRegister(data)}
                                style={{
                                    width: 150,
                                    height: 50,
                                    borderRadius: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    justifyContent: "space-evenly"
                                }}

                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "500",
                                        color: "white"
                                    }} >
                                    S'inscrire
                                </Text>
                            </Pressable>
                        </View>

                    </View>
                </ScrollView>



            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default RegisterScreen