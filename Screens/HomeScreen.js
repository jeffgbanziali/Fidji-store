import { SafeAreaView, Text, ScrollView } from 'react-native'
import React from 'react'
import NewsArticle from '../Components/HomeScreen/NewsArticle'
import Eshop from '../Components/HomeScreen/Eshop'
import Shirts from '../Components/HomeScreen/Shirts'
import Coats from '../Components/HomeScreen/Coats'
import Pants from '../Components/HomeScreen/Pants'
import Sweatshirts from '../Components/HomeScreen/Sweatshirts'
import Tshirts from '../Components/HomeScreen/Tshirts'
import SearchBar from '../Components/HomeScreen/SearchBar'
import TopNews from '../Components/HomeScreen/TopNews'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "#f5e1ce"
        }}>
            <ScrollView
                style={{
                    width: "100%",
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
            </ScrollView>
        </SafeAreaView>


    )
}

export default HomeScreen