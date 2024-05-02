import { SafeAreaView, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import NewsArticle from '../../Components/HomeScreen/NewsArticle'
import Eshop from '../../Components/HomeScreen/Eshop'
import Shirts from '../../Components/HomeScreen/Shirts'
import Coats from '../../Components/HomeScreen/Coats'
import Pants from '../../Components/HomeScreen/Pants'
import Sweatshirts from '../../Components/HomeScreen/Sweatshirts'
import Tshirts from '../../Components/HomeScreen/Tshirts'
import SearchBar from '../../Components/HomeScreen/SearchBar'
import TopNews from '../../Components/HomeScreen/TopNews'
import LastTrend from '../../Components/HomeScreen/LastTrend'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const HomeScreen = () => {


    const bottomTabHeight = useBottomTabBarHeight();


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
            }}>
            <ScrollView
                style={{
                    width: '100%',
                    height: "100%",
                }}>
                <SearchBar />
                <NewsArticle />
                <Eshop />
                <Shirts />
                <Coats />
                <Pants />
                <Sweatshirts />
                <Tshirts />
                <TopNews />
                <LastTrend />

            </ScrollView>
        </SafeAreaView >


    )
}

export default HomeScreen