import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import HeaderPower from '../../Components/MyProfile/MyDesires/HeaderPower'
import NotArticle from '../../Components/MyProfile/ArticleChoise/NotArticle'
import StockAlert from '../../Components/MyProfile/ArticleChoise/StockAlert'
import { useNavigation } from '@react-navigation/native'
import { UserData } from "../../DataFictifs/UserData"
import Wishlist from '../../Components/MyProfile/ArticleChoise/Wishlist'



const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const MyDesiresScreen = () => {



    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight
            }}>

            <ScrollView
                style={{
                    width: '100%',
                    height: "100%",
                }}>




                <HeaderPower wishlist={UserData.wishlist} />

                {
                    UserData.wishlist.length > 0 ? (
                        <Wishlist wishlist={UserData.wishlist} />
                    ) : (
                        <NotArticle />

                    )
                }

                <StockAlert />
            </ScrollView>

        </View>
    )
}

export default MyDesiresScreen