import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NewsArticle = () => {
    const navigation = useNavigation()


    const handleGoToNew = () => {
        navigation.navigate("NewArticles")
    }
    return (


        <Pressable
            onPress={handleGoToNew}
            style={{
                width: '100%',
                height: 400,
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Image
                source={{ uri: "https://boutiquefidji.com/wp-content/uploads/2023/12/camelia-2.jpg" }}
                style={{
                    width: '100%',
                    height: "100%",
                    position: "absolute"
                }
                }
            />
            <Text
                style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "600"
                }}>
                NOUVEAUTÉS ET RESSORTS
            </Text>
            <Text
                style={{
                    fontWeight: "600",
                    color: "white",
                    fontSize: 40
                }}>
                NEW IN
            </Text>
        </Pressable >

    )
}

export default NewsArticle