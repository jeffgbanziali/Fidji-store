import { View, Text, SafeAreaView, TextInput, Pressable, StatusBar, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import LoadingScreen from '../../Components/SignInScreen/LoadingScreen';

const SignInScreen = () => {

    const navigation = useNavigation()
    const [showPass, setShowPass] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);

    const viewPass = () => {
        setShowPass(!showPass)
    }

    const retourned = () => {
        navigation.goBack("Start")
    }

    const handleRefresh = () => {
        setEmail('');

    };
    const handleChangePassWord = () => {
        console.warn("change your password")
    };


    const { signIn } = useContext(AuthContext);

    const handleSignIn = async () => {
        setIsLoadingSignIn(true);

        try {
            const response = await fetch('https://boutiquefidji.com/wp-json/api/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();
                // Récupérer les détails de l'utilisateur en appelant une autre API WordPress avec le token JWT
                const userResponse = await fetch('https://boutiquefidji.com/wp-json/wp/v2/users/me', {
                    headers: {
                        'Authorization': 'Bearer ' + data.jwt_token
                    }
                });

                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    // Extraire l'ID de l'utilisateur de userData
                    const userId = userData.id;
                    console.log('Détails de l\'utilisateur:', userId);

                    // Continuer avec votre logique de connexion
                    signIn(data.jwt_token, userId);

                } else {
                    // Gérer les erreurs lors de la récupération des détails de l'utilisateur
                    console.error('Erreur lors de la récupération des détails de l\'utilisateur');
                }

            } else {
                Alert.alert('Erreur', 'Identifiants incorrects. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer plus tard.');
        } finally {
            setTimeout(() => {
                setIsLoadingSignIn(false);
            }, 5000);
        }
    };






    const handleGoSignUp = () => {
        navigation.navigate("Register");
    };



    return (


        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            shouldRasterizeIOS={true}
            style={{
                flex: 1,
                alignItems: "center",
                height: "100%",
                width: "100%",

            }}
        >

            {
                isLoadingSignIn ? (
                    <LoadingScreen />
                ) : (
                    <SafeAreaView
                        style={{
                            width: "100%",
                            height: "100%",
                            // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                            alignItems: "center",
                        }}>

                        <View
                            style={{
                                width: "100%",
                                height: 50,
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 2

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "500",
                                    color: "black"
                                }} >
                                Me connecter
                            </Text>

                            <Pressable
                                onPress={retourned}
                                style={{
                                    width: 50,
                                    height: 50,
                                    right: 2,
                                    position: "absolute",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                    height: 80,
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
                                    height: 160,
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
                                        onChangeText={(text) => setEmail(text)}
                                        value={email}
                                        placeholder="Identifiant ou e-mail"
                                        placeholderTextColor="black"
                                        autoCapitalize="none"

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
                                        autoCapitalize="none"
                                        placeholder="Mot de passe"
                                        placeholderTextColor="black"

                                    />

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
                                    height: 120,
                                    //backgroundColor: "red",
                                    alignItems: "center",
                                    justifyContent: "space-evenly"
                                }}>
                                <Pressable onPress={handleChangePassWord}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: "black"
                                        }} >
                                        Mot de passe perdu ?
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={handleSignIn}
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
                                        Se connecter
                                    </Text>
                                </Pressable>
                            </View>

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
                                    Vous n'avez pas de compte ?


                                </Text>
                                <Pressable
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingLeft: 10
                                    }}

                                    onPress={handleGoSignUp}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "500",
                                            color: "blue"
                                        }} >
                                        Inscripvez vous
                                    </Text>
                                </Pressable>
                            </View>
                        </View>


                    </SafeAreaView>
                )
            }


        </KeyboardAvoidingView >

    )
}

export default SignInScreen