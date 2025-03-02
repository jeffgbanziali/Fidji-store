import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';

// Importation des composants des catégories
import Bags from './Bags';
import Shoes from './Shoes';
import Shirt from './Shirt';
import Mesh from './Mesh';
import Dress from './Dress';
import Down from './Down';
import Denim from './Denim';
import SkirtsAndShorts from './SkirtsAndShorts';
import JacketsAndCoats from './JacketsAndCoats';
import SweatshirtAndBretonTops from './SweatshirtAndBretonTops';
import ShirtAndBody from './ShirtAndBody';
import Acessories from './Acessories';
import Jewelry from './Jewelry';

const categoryComponents = {
    "accessories": Acessories, // Accessories -> Accessoires
    "bas": Down, // Bas -> Pantalons, shorts, etc.
    "baskets": Shoes, // Baskets -> Chaussures
    "blouses": Shirt, // Blouses -> Chemises
    "wps_wgm_giftcard": null, // Carte cadeau (on peut l’ignorer)
    "chaussures": Shoes, // Chaussures -> Shoes
    "chaussures-plates": Shoes, // Chaussures plates -> Shoes
    "chemises-de-nuit": Dress, // Chemises de nuit -> Robes / Pyjamas
    "gilets": JacketsAndCoats, // Gilets -> Vestes & Manteaux‚
    "hauts": SweatshirtAndBretonTops, // Hauts -> Sweats & Hauts bretons
};


const ListsOfArticles = ({ categories, loading, error }) => {

    if (loading) {
        return <ActivityIndicator size="large" color="black" />;
    }

    if (error) {
        return <Text style={{ color: "red", textAlign: "center" }}>Erreur : {error}</Text>;
    }

    return (
        <View
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
            }}
        >
            {categories.map(category => {
                const Component = categoryComponents[category.slug.toLowerCase()];
                return Component ? (
                    <Component
                        key={category.id}
                        categoryData={category} />
                ) : null;
            })}

        </View>
    );
};

export default ListsOfArticles;
