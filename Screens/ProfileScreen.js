import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileHeader from '../Components/MyProfile/ProfileHeader'
import ProfilNavigation from '../Navigation/ProfilNavigation'

const Profile = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            }}>
            <ProfileHeader />
            <ProfilNavigation />
        </SafeAreaView>
    )
}

export default Profile