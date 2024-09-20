import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NewCollection from './NewCollection'
import Maroquineries from './Maroquineries'
import ShoesStore from './ShoesStore'
import Denin from './Denin'
import TheArtilesClasses from './TheArticlesClasses'

const CarouselHeader = () => {
    return (
        <View
            style={{
                width: "100%",
                height: 200,

            }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingLeft: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <NewCollection />
                    <Maroquineries />
                    <ShoesStore />
                    <Denin />
                    <TheArtilesClasses />
                </View>

            </ScrollView>
        </View>
    )
}

export default CarouselHeader