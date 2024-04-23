import { View, Text, Pressable, Animated } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const SweatshirtAndBretonTops = () => {


    const [viewLister, setViewLister] = useState(false);
    const [heightAnimation] = useState(new Animated.Value(0));

    const showLister = () => {
        setViewLister(!viewLister);
        Animated.timing(
            heightAnimation,
            {
                toValue: viewLister ? 0 : 110,
                duration: 300,
                useNativeDriver: false,
            }
        ).start();
    };
    return (
        <>
            <View
                style={{
                    width: "100%",
                    height: 60,
                    marin: 2,
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>

                <Text
                    style={{
                        fontSize: 28,

                        fontWeight: "600",
                        color: "black"
                    }}>Sweatshirt & Marinières</Text>

                {viewLister ? (
                    <Pressable
                        onPress={showLister}
                        style={{
                            width: 50,
                            height: 50,
                            right: 2,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                    </Pressable>
                ) : (
                    <Pressable
                        onPress={showLister}
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
                )}

            </View>



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
                        }} >MARINIÈRES</Text>
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
                        }} >SWEATS</Text>
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

export default SweatshirtAndBretonTops