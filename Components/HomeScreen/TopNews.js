import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import ArticleTopNews from './ArticleTopNews'
import { mockData } from '../../DataFictifs/DataNews'


const TopNews = () => {


    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch('https://boutiquefidji.com/wp-json/wc/v3/products?per_page=4&consumer_key=ck_0826f0fe6024b7755eab9e9666f5c2349119b7c8&consumer_secret=cs_72dbc2d001c870f1fee182ca1122592f1a1d7abf')
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);




    return (
        <View
            style={{
                width: '100%',
                height: 1000,
                alignItems: "center",
            }}>

            <View
                style={{
                    width: '80%',
                    height: "20%",
                    alignItems: "center",
                    //backgroundColor: "red",
                    justifyContent: "space-evenly",
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: "center",
                        color: "black"
                    }}>
                    TROUVEZ LA PIÈCE PARFAITE POUR VOTRE COLLECTION
                </Text>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "600",
                        textAlign: "center",
                        color: "black"
                    }}>
                    NOUVEAUTÉS
                </Text>
            </View>

            <View
                style={{
                    width: '100%',
                    height: "80%",
                    alignItems: "center",
                    justifyContent: "space-evenly"

                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                    {
                        article.map((item, index) => (
                            <ArticleTopNews
                                key={index}
                                item={item}
                            />
                        ))}
                </View>




            </View>
        </View>
    )
}

export default TopNews