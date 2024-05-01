import { View, Text, Pressable, Easing, Animated } from 'react-native'
import React, { useContext, useState } from 'react'
import Modal from "react-native-modal";
import { AuthContext } from '../../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignOutButton = ({ setIsLoadingSignOut }) => {




    const [pressSignOut, setPressSignOut] = useState(new Animated.Value(0));
    const [pressIn, setPressIn] = useState(false);

    const { signOut } = useContext(AuthContext);


    const handleSignOut = async () => {
        setIsLoadingSignOut(true)
        try {
            await signOut();
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                setIsLoadingSignOut(false);
            }, 5000);
        }
    };


    const handleModalLogout = () => {
        if (pressIn) {
            Animated.timing(pressSignOut, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => setPressIn(false));
        } else {
            setPressIn(true);
            Animated.timing(pressSignOut, {
                toValue: 200,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    };


    return (
        <View
            style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",

            }}>
            <Pressable
                onPress={handleModalLogout}
                style={{

                    borderBottomWidth: 2,

                }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "500",
                        color: "black",

                    }}>
                    Me déconnecter

                </Text>
            </Pressable>

            <Modal
                isVisible={pressIn}
                onBackdropPress={handleModalLogout}
                //transparent={true}
                backdropOpacity={0.5}
                animationIn="pulse"
                animationOut="fadeOut"
                useNativeDriverForBackdrop
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 280,
                        height: 130,
                        backgroundColor: "white",
                        borderRadius: 30,
                    }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: "100%",
                            height: "65%",
                            borderBottomWidth: 1,
                            borderColor: "gray"

                        }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "600",
                            textAlign: "center",
                            color: "black",

                        }}>
                            Souhaitez-vous vous déconnecter ?
                        </Text>

                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: "100%",
                            height: "35%",
                            flexDirection: "row"
                        }}>

                        <Pressable
                            onPress={handleModalLogout}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "50%",
                                height: "100%",
                                borderRightWidth: 1,
                                borderColor: "gray"
                            }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "600",
                                textAlign: "center",
                                color: "black",

                            }}>
                                Non
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={handleSignOut}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "50%",
                                height: "100%",
                            }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "600",
                                textAlign: "center",
                                color: "red",

                            }}>
                                Oui
                            </Text>
                        </Pressable>

                    </View>

                </View>


            </Modal>

        </View >
    )
}

export default SignOutButton