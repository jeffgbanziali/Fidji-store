import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import SearchBar from '../Components/HomeScreen/SearchBar';
import CarouselHeader from '../Components/Eshopping.js/CarouselHeader.jjs/CarouselHeader';
import ListsOfArticles from '../Components/Eshopping.js/ListsOfArticles/ListsOfArticles';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const EShoppingScreen = () => {

    const bottomTabHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight
            }}>
            <SearchBar />
            <CarouselHeader />
            <ListsOfArticles />

        </SafeAreaView>
    )
}

export default EShoppingScreen