import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ActivityIndicator, Dimensions, FlatList, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardsArticles from '../Components/Eshopping.js/CardsArticles/CardsArticles';
import { UserData } from '../DataFictifs/UserData';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import SignOutButton from '../Components/MyProfile/Settings/SignOutButton';
import LoadingScreen from '../Components/SignInScreen/LoadingScreen';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const SettingScreen = () => {

    const navigation = useNavigation()
    const [isLoadingSignOut, setIsLoadingSignOut] = useState(false);

    const retourned = () => {
        navigation.replace("Profile");
    }
    const bottomTabHeight = useBottomTabBarHeight();

    return (


        <>
            {
                isLoadingSignOut ? (
                    <LoadingScreen />
                ) : (
                    <SafeAreaView
                        style={{
                            backgroundColor: "#f5e1ce",
                            width: windowWidth,
                            height: windowHeight - bottomTabHeight,
                            alignItems: "center",

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
                                Paramètres
                            </Text>



                        </View>

                        <SignOutButton
                            isLoadingSignOut={isLoadingSignOut}
                            setIsLoadingSignOut={setIsLoadingSignOut} />


                    </SafeAreaView>
                )}
        </>

    )
}

export default SettingScreen