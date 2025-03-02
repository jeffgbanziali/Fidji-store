import { View, Text, Dimensions, Pressable, ScrollView, Image, SafeAreaView, Animated, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Carousel from './Carousel';
import AddBasket from './AddBasket';
import InformationChoice from './InformationChoice';



const { width: windowWidth, height: windowHeight } = Dimensions.get("window")



const ArticleElement = ({ article }) => {



    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        if (article && article.images && article.images.length > 0) {
            setIsLoading(false);
        }
    }, [article.images]);


    // Fonction pour mettre à jour la couleur sélectionnée
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    // Fonction pour mettre à jour la taille sélectionnée
    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };



    const [index, setIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current



    console.log("Mon article", article)




    function removeHtmlTags(html) {
        return html.replace(/<[^>]*>/g, '');
    }

    const handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        // console.log('viewableItems', viewableItems);
        setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;





    const renderItem = ({ item }) => {

        return (
            <>

                <View
                    style={{
                        height: "100%",
                        width: windowWidth * 0.9,
                        borderRadius: 50,

                    }}>

                    {
                        isLoading ? (
                            <Image
                                source={require('../../assets/image/backgroundImage.png')}
                                style={{
                                    width: '100%',
                                    height: "100%",
                                    borderRadius: 50,

                                    position: "absolute"
                                }
                                } />
                        ) : (
                            <Image
                                source={{ uri: item.src }}
                                style={{
                                    width: '100%',
                                    height: "100%",
                                    borderRadius: 50,
                                    resizeMode: "cover",
                                }} />
                        )}


                </View>


            </>
        )

    }





    return (
        <>
            <View
                style={{
                    height: windowHeight * 0.55,
                    width: windowWidth,
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",


                }}>

                <View style={{
                    width: windowWidth * 0.9,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                }}>

                    <FlatList
                        data={article.images}
                        horizontal
                        pagingEnabled
                        snapToAlignment="center"
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleOnScroll}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1
                        }}
                        onViewableItemsChanged={handleOnViewableItemsChanged}
                        viewabilityConfig={viewabilityConfig}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={renderItem} />
                </View>
            </View>



            <InformationChoice
                article={article}
                electedColor={selectedColor}
                selectedSize={selectedSize}
                quantity={quantity}
                setQuantity={setQuantity}
                onColorChange={handleColorChange}
                onSizeChange={handleSizeChange} />

            <AddBasket
                article={article}
                quantity={quantity}
                selectedColor={selectedColor}
                selectedSize={selectedSize} />


        </>
    )
}

export default ArticleElement