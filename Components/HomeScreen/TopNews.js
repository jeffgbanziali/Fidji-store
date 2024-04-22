import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ArticleTopNews from './ArticleTopNews'
import { mockData } from '../../DataFictifs/DataNews'


const TopNews = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 1200,
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
                <View style={{
                    width: '100%',
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {mockData.map((item, index) => (
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