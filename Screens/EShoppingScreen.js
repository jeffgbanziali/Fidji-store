import { View, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../Components/HomeScreen/SearchBar';
import CarouselHeader from '../Components/Eshopping.js/CarouselHeader.jjs/CarouselHeader';
import ListsOfArticles from '../Components/Eshopping.js/ListsOfArticles/ListsOfArticles';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const EShoppingScreen = () => {


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight
            }}>
            <ScrollView
                style={{
                    width: '100%',
                    height: "100%",
                }}>
                <SearchBar />
                <CarouselHeader />
                <ListsOfArticles />

            </ScrollView>


        </SafeAreaView>
    )
}

export default EShoppingScreen