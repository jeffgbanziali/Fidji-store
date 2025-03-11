import { View, Text, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform, Image, ActivityIndicator, Dimensions, FlatList, Animated, Easing, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardsArticles from '../../Components/Eshopping.js/CardsArticles/CardsArticles';
import { UserData } from '../../DataFictifs/UserData';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import SignOutButton from '../../Components/MyProfile/Settings/SignOutButton';
import LoadingScreen from '../../Components/SignInScreen/LoadingScreen';
import CustomersInformations from '../../Components/MyProfile/Settings/CustomInfoTools/CustomersInformations';
import PaymentMode from '../../Components/MyProfile/Settings/PaymentMode';
import AddressBook from '../../Components/MyProfile/Settings/AddressBook';
import DeliveryCountry from '../../Components/MyProfile/Settings/DeliveryCountry';
import Notifications from '../../Components/MyProfile/Settings/Notifications';
import CGV from '../../Components/MyProfile/Settings/CGV';
import Confidentialities from '../../Components/MyProfile/Settings/Confidentialities';
import Discounts from '../../Components/MyProfile/Settings/Discounts';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const SettingScreen = () => {

    const navigation = useNavigation()
    const [isLoadingSignOut, setIsLoadingSignOut] = useState(false);

    const retourned = () => {
        navigation.goBack("");
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
                            //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,


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
                                    fontSize: 24,
                                    fontWeight: "500",
                                    color: "black"
                                }} >
                                Paramètres
                            </Text>



                        </View>

                        <ScrollView
                            style={{
                                width: '100%',
                                height: "100%",
                            }}>
                            <SignOutButton
                                isLoadingSignOut={isLoadingSignOut}
                                setIsLoadingSignOut={setIsLoadingSignOut} />
                            <CustomersInformations />
                            <PaymentMode />
                            <AddressBook />
                            <Discounts />
                            <DeliveryCountry />
                            <Notifications />
                            <CGV />
                            <Confidentialities />
                        </ScrollView>



                    </SafeAreaView>
                )}
        </>

    )
}

export default SettingScreen