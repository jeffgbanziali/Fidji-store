import { View, Text, Dimensions, Platform, ScrollView, Image, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../Components/ViewArticle/Header';
import ArticleElement from '../../Components/ViewArticle/ArticleElement';
import InformationChoice from '../../Components/ViewArticle/InformationChoice';
import AddBasket from '../../Components/ViewArticle/AddBasket';
import MoreInformationsArticles from '../../Components/ViewArticle/MoreInformationsArticles';
import PaymentTools from '../../Components/ViewArticle/PaymentTools';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const ViewArticleScreen = () => {



    const route = useRoute();
    const { article } = route.params;

    const bottomTabHeight = useBottomTabBarHeight();





    return (
        <SafeAreaView
            style={{
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight - bottomTabHeight,
                alignItems: "center",
                //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,


            }}>


            <Header />
            <ScrollView
                style={{
                    width: '100%',
                    height: "100%",
                    paddingTop: 20,
                }}
                showsVerticalScrollIndicator={false}
            >




                <ArticleElement article={article} />
                <MoreInformationsArticles article={article} />
                <PaymentTools />


            </ScrollView>
        </SafeAreaView >
    )
}

export default ViewArticleScreen