import { View, Text, SafeAreaView, Dimensions, StatusBar, Platform } from 'react-native'
import React from 'react'
import ProfileHeader from '../../Components/MyProfile/ProfileHeader'
import ProfilNavigation from '../../Navigation/Profil/ProfilTabNavigation'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");



const Profile = () => {



    const bottomTabHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                backgroundColor: "white",
               // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

            }}>
            <ProfileHeader />
            <ProfilNavigation />
        </SafeAreaView>
    )
}

export default Profile