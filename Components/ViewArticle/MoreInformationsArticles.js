import { View, Text, Pressable, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const MoreInformationsArticles = ({ article }) => {
    const [viewLister, setViewLister] = useState(false);
    const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(0));
    const [iconAnimation] = useState(new Animated.Value(viewLister ? 1 : 0));

    useEffect(() => {
        Animated.timing(
            heightAnimation,
            {
                toValue: viewLister ? 320 : 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();

        Animated.timing(
            iconAnimation,
            {
                toValue: viewLister ? 1 : 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start();
    }, [viewLister]);

    const toggleLister = () => {
        setViewLister(!viewLister);
    };

    const rotateInterpolate = iconAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const animatedStyles = {
        transform: [{ rotate: rotateInterpolate }],
    };




    function removeHtmlTags(html) {
        return html.replace(/<[^>]*>/g, '');
    }





    return (
        <>
            <View
                style={{
                    width: "100%",
                    height: 150,
                    justifyContent: "center",
                    paddingLeft: 16,
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "500", color: "black"
                }}>
                    {removeHtmlTags(article.short_description)}
                </Text>


            </View>

            <View
                style={{
                    width: "100%",
                    height: 50,
                    marin: 2,
                    paddingLeft: 10,
                    borderTopWidth: 2,
                    borderColor: "gray",
                    justifyContent: "center",
                }}>

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                    }}>GUIDES DES TAILLES</Text>


                <Pressable
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                </Pressable>

            </View>


            <Pressable
                onPress={toggleLister}

                style={{
                    width: "100%",
                    height: 50,
                    marin: 2,
                    paddingLeft: 10,
                    borderTopWidth: 2,
                    borderColor: "gray",
                    justifyContent: "center",
                }}>

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                    }}>DÉTAILS & COMPOSITION</Text>


                <View
                    style={{
                        width: 50,
                        height: 50,
                        right: 2,
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Animated.View style={animatedStyles}>

                        <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                    </Animated.View>

                </View>


            </Pressable>


            <Animated.View
                style={{
                    width: "100%",
                    height: heightAnimation,
                    overflow: 'hidden',
                }}>
                <View
                    style={{
                        width: "100%",
                        paddingLeft: 10,
                    }}>

                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "600",
                            lineHeight: 22,
                            color: "black"
                        }} >
                        {" \n"}{removeHtmlTags(article.description)}
                    </Text>

                </View>


            </Animated.View >
        </>

    )
}

export default MoreInformationsArticles