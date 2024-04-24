import { View, Text, Dimensions, Pressable, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../Components/ViewArticle/Header';
import ArticleElement from '../Components/ViewArticle/ArticleElement';
import InformationChoice from '../Components/ViewArticle/InformationChoice';
import AddBasket from '../Components/ViewArticle/AddBasket';
import MoreInformationsArticles from '../Components/ViewArticle/MoreInformationsArticles';
import PaymentTools from '../Components/ViewArticle/PaymentTools';




const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


const ViewArticleScreen = () => {



    const route = useRoute();
    const { article } = route.params;



    const navigation = useNavigation()






    return (
        <SafeAreaView
            style={{
                backgroundColor: "#f5e1ce",
                width: windowWidth,
                height: windowHeight,
                alignItems: "center",

            }}>


            <Header />
            <ScrollView
                style={{
                    width: '100%',
                    height: "100%",
                }}>



                <ArticleElement article={article} />
                <InformationChoice article={article} />
                <AddBasket />
                <MoreInformationsArticles article={article} />
                <PaymentTools />


            </ScrollView>
        </SafeAreaView>
    )
}

export default ViewArticleScreen