import { View, Text, Pressable, Animated, Easing } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Acessories = ({ categoryData }) => {
    const [viewLister, setViewLister] = useState(false);
    const [heightAnimation, setHeightAnimation] = useState(new Animated.Value(0));
    const [iconAnimation] = useState(new Animated.Value(viewLister ? 1 : 0));

    const navigation = useNavigation(); // 📌 Ajout de la navigation

    useEffect(() => {
        Animated.timing(heightAnimation, {
            toValue: viewLister ? 180 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        Animated.timing(iconAnimation, {
            toValue: viewLister ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [viewLister]);

    const toggleLister = () => {
        setViewLister(!viewLister);
    };
    console.log("C'est quelle caétgorie", categoryData)


    const navigateToCategory = (categoryId, categoryName) => {
        navigation.navigate('ListOfArtifclesByCatgories', { categoryId, categoryName });
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
            <Pressable onPress={toggleLister}
                style={{
                    width: "100%",
                    height: 40,
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>
                <Text style={{ fontSize: 24, fontWeight: "600", color: "black" }}>
                    {categoryData.name}
                </Text>

                <View style={{
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

            {/* Liste des sous-catégories */}
            <Animated.View
                style={{
                    width: "100%",
                    height: heightAnimation,
                    overflow: 'hidden',
                    paddingLeft: 10,
                    justifyContent: "center",
                }}>

                <Pressable onPress={() => navigateToCategory(96, 'Chaussures')}
                    style={{ width: "100%", height: 30, margin: 2, justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>CHAUSSURES</Text>
                </Pressable>
                <Pressable onPress={() => navigateToCategory(98, 'Baskets')}
                    style={{ width: "100%", height: 30, margin: 2, justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>BASKETS</Text>
                </Pressable>

                <Pressable onPress={() => navigateToCategory(20, 'Maroquinerie')}
                    style={{ width: "100%", height: 30, margin: 2, justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>MAROQUINERIE</Text>
                </Pressable>

                <Pressable onPress={() => navigateToCategory(99, 'Bijoux')}
                    style={{ width: "100%", height: 30, margin: 2, justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>BIJOUX</Text>
                </Pressable>

                <Pressable onPress={() => navigateToCategory(999, 'Voir Tout')}
                    style={{ width: "100%", height: 30, margin: 2, justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>VOIR TOUT</Text>
                </Pressable>

            </Animated.View>
        </>
    );
};

export default Acessories;
