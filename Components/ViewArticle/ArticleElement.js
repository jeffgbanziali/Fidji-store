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
                        width: windowWidth,
                        position: "relative",


                    }}>

                    {
                        isLoading ? (
                            <Image
                                source={require('../../assets/image/backgroundImage.png')}
                                style={{
                                    width: '100%',
                                    height: "100%",
                                    position: "absolute"
                                }
                                } />
                        ) : (
                            <Image
                                source={{ uri: item.src }}
                                style={{
                                    width: '100%',
                                    height: "100%",
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
                    height: 600,
                    backgroundColor: "gray",
                    width: windowWidth,
                    position: "relative",


                }}>
                <FlatList
                    data={article.images}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleOnScroll}
                    onViewableItemsChanged={handleOnViewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={renderItem} />
            </View>


            <View
                style={{
                    width: "100%",
                    height: 80,
                    paddingTop: 10,
                }}>
                <View
                    style={{
                        width: "100%",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}>
                    <View
                        style={{
                            width: "70%",
                            height: "100%",
                            justifyContent: "center",
                        }}>
                        <Text
                            style={{
                                paddingLeft: 20,
                                fontSize: 20,
                                fontWeight: "600",
                            }}>
                            {article.name}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            paddingRight: 20,

                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                paddingRight: 10,
                                fontWeight: "400",
                            }}>
                            {article.price} €
                        </Text>
                        <View
                            style={{
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}>
                            <Fontisto name="heart-alt" size={18} color="black" />

                        </View>
                    </View>

                </View>

            </View>
            <InformationChoice article={article} onColorChange={handleColorChange} onSizeChange={handleSizeChange} />

            <AddBasket article={article} selectedColor={selectedColor} selectedSize={selectedSize} />


        </>
    )
}

export default ArticleElement