import { View, SafeAreaView, Text, Dimensions, Pressable, TextInput, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { Platform } from 'react-native';
import UserInfoForm from '../../Components/MyProfile/Settings/CustomInfoTools/UserInfoForm';
import { LinearGradient } from 'expo-linear-gradient';
import UserActionButton from '../../Components/MyProfile/Settings/CustomInfoTools/UserActionButton';
import NewsletterSubscription from '../../Components/MyProfile/Settings/CustomInfoTools/NewsletterSubscription';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const CustomerInformationScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const bottomTabHeight = useBottomTabBarHeight();

    const navigation = useNavigation();

    const retourned = () => {
        navigation.goBack()

    }

    const userData = useSelector((state) => state.userReducer.user)

    const data = userData.customerData


    const handleEditEmail = () => {
        // Exemple de mise à jour de l'email
        console.log("Modification de l'email...");
        // Ici, tu peux ouvrir une modale ou naviguer vers une autre page
        navigation.navigate("EditEmailScreen");
    };

    const handleEditPassword = () => {
        // Exemple de mise à jour du mot de passe
        console.log("Modification du mot de passe...");
        // Ici, tu peux ouvrir une modale ou naviguer vers une autre page
        navigation.navigate("EditPasswordScreen");
    };

    const handleDeleteAccount = () => {
        // Exemple de suppression de compte avec une confirmation
        console.log("Suppression du compte...");
        // Tu peux afficher une alerte de confirmation ici avant d'exécuter la suppression
        Alert.alert(
            "Suppression du compte",
            "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.",
            [
                { text: "Annuler", style: "cancel" },
                {
                    text: "Supprimer",
                    onPress: () => {
                        console.log("Compte supprimé");
                        // Appelle une action Redux ou une requête API ici
                    },
                    style: "destructive",
                },
            ]
        );
    };





    return (
        <LinearGradient colors={['#f5e1ce', '#d3d3d3']}
            style={{ flex: 1, backgroundColor: '#F8F9FA' }}
        >

            <SafeAreaView
                style={{
                    flex: 1,
                    width: windowWidth,
                    height: windowHeight - bottomTabHeight,
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,


                }}>
                <View
                    style={{
                        width: "100%",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",

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
                    <UserInfoForm data={data} />
                    <UserActionButton
                        data={data}
                        onEditEmail={handleEditEmail}
                        onEditPassword={handleEditPassword}
                        onDeleteAccount={handleDeleteAccount}
                    />

                    <NewsletterSubscription />

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
        </LinearGradient>

    )
}

export default CustomerInformationScreen