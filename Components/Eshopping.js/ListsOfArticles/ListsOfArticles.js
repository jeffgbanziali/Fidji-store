import { View, Text } from 'react-native'
import React from 'react'
import Bags from './Bags'
import Shoes from './Shoes'
import Shirt from './Shirt'
import Mesh from './Mesh'
import Dress from './Dress'
import Down from './Down'
import Denim from './Denim'
import SkirtsAndShorts from './SkirtsAndShorts'
import JacketsAndCoats from './JacketsAndCoats'
import SweatshirtAndBretonTops from './SweatshirtAndBretonTops'
import ShirtAndBody from './ShirtAndBody'
import Acessories from './Acessories'
import Jewelry from './Jewelry'

const ListsOfArticles = () => {
    return (
        <View
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,

            }}>
            <Bags />
            <Shoes />
            <Shirt />
            <Mesh />
            <Dress />
            <Down />
            <SkirtsAndShorts />
            <JacketsAndCoats />
            <Denim />
            <SweatshirtAndBretonTops />
            <ShirtAndBody />
            <Acessories />
            <Jewelry />
        </View>
    )
}

export default ListsOfArticles