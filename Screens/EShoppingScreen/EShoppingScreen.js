import { View, Text, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import SearchBar from '../../Components/HomeScreen/SearchBar';
import CarouselHeader from '../../Components/Eshopping.js/CarouselHeader.jjs/CarouselHeader';
import ListsOfArticles from '../../Components/Eshopping.js/ListsOfArticles/ListsOfArticles';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../ReduxActions/category.actions';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");





const EShoppingScreen = () => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(state => state.categories);
    console.log("Mes catégories selon les cas", categories)

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

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
                <ListsOfArticles
                    categories={categories}
                    loading={loading}
                    error={error}
                />

            </ScrollView>


        </SafeAreaView>
    )
}

export default EShoppingScreen