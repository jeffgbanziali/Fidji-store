import { View, Text, Pressable, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const Shoes = () => {


    const [viewLister, setViewLister] = useState(false);
    const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(0));
    const [iconAnimation] = useState(new Animated.Value(viewLister ? 1 : 0));

    useEffect(() => {
        Animated.timing(
            heightAnimation,
            {
                toValue: viewLister ? 200 : 0,
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
        outputRange: ['0deg', '90deg'],
    });

    const animatedStyles = {
        transform: [{ rotate: rotateInterpolate }],
    };


    return (
        <>
            <Pressable
                onPress={toggleLister}
                style={{
                    width: "100%",
                    height: 60,
                    marin: 2,
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>

                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "600",
                        color: "black"
                    }}>Chaussures</Text>


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

                        <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
                    </Animated.View>
                </View>

            </Pressable>




            <Animated.View
                style={{
                    width: "100%",
                    height: heightAnimation,
                    overflow: 'hidden',
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>

                <Pressable
                    style={{
                        width: "100%",
                        height: 30,
                        margin: 2,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,

                            fontWeight: "500",
                            color: "black"
                        }} >SANDALES</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: "100%",
                        height: 30,
                        margin: 2,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "500",
                            color: "black"
                        }} >BABIES, BALLERINES & ESCAPINS</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: "100%",
                        height: 30,
                        margin: 2,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,

                            fontWeight: "500",
                            color: "black"
                        }} >ESPADRILLES & SABOTS</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: "100%",
                        height: 30,
                        margin: 2,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,

                            fontWeight: "500",
                            color: "black"
                        }} >MOCASSINS & BASKETS</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: "100%",
                        height: 30,
                        margin: 2,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "500",
                            color: "black"
                        }} >ENTRETIEN DU CUIR</Text>
                </Pressable>

                <Pressable
                    style={{
                        width: "100%",
                        height: 30,
                        margin: 2,
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 18,

                            fontWeight: "500",
                            color: "black"
                        }} >VOIR TOUT</Text>
                </Pressable>


            </Animated.View >

        </>

    )

}

export default Shoes