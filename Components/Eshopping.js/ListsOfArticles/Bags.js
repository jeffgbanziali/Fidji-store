import { View, Text, Pressable, Animated, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const Bags = () => {


    const [viewLister, setViewLister] = useState(false);
    const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(0));
    const [iconAnimation] = useState(new Animated.Value(viewLister ? 1 : 0));

    useEffect(() => {
        Animated.timing(
            heightAnimation,
            {
                toValue: viewLister ? 110 : 0,
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
                        fontSize: 24,
                        fontWeight: "600",
                        color: "black"
                    }}>
                    Sacs
                </Text>


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
                        }} >PANIERS & POCHETTES</Text>
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
                        }} >PETITES MAROQUERIES</Text>
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

export default Bags