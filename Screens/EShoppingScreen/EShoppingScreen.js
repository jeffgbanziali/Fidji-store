import { View, Text, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/HomeScreen/SearchBar';
import CarouselHeader from '../../Components/Eshopping.js/CarouselHeader.jjs/CarouselHeader';
import ListsOfArticles from '../../Components/Eshopping.js/ListsOfArticles/ListsOfArticles';
import { Platform } from 'react-native';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const EShoppingScreen = () => {


    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight,
              //  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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