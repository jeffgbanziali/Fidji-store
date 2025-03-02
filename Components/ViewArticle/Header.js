import { View, Text, Animated, Pressable, Easing, Image, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserData } from "../../DataFictifs/UserData"
import Modal from "react-native-modal";
import BasketScreen from '../../Screens/BasketScreen/BasketScreen';
import { AuthContext } from '../../Context/AuthContext';




const Header = () => {

    const navigation = useNavigation()


    const [basketHeight, setBasketHeight] = useState(new Animated.Value(0));
    const [showBasket, setShowBasket] = useState(false);
    const { cart } = useContext(AuthContext)

    const retourned = () => {
        navigation.goBack("Start")
    }

    const handleViewBasket = () => {
        if (showBasket) {
            Animated.timing(basketHeight, {
                toValue: 0,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }).start(() => setShowBasket(false));
        } else {
            setShowBasket(true);
            Animated.timing(basketHeight, {
                toValue: 200,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: true
            }).start();
        }
    };

    return (
        <View
            style={{
                width: "100%",
                height: 50,
                zIndex: 2,
                alignItems: "center",
                justifyContent: "center",


            }}>

            <Pressable
                onPress={retourned}
                style={{
                    width: 50,
                    height: 50,
                    left: 2,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <AntDesign name="left" size={24} color="black" />
            </Pressable>

            <View
                style={{

                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                    }}

                >
                    Détails
                </Text>

            </View>

            <Pressable
                onPress={handleViewBasket}
                style={{
                    width: 50,
                    height: 50,
                    right: 2,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        right: 2,
                        top: 2,
                        borderRadius: 100,
                        position: "absolute",
                        alignItems: "center",
                        backgroundColor: "black",
                        justifyContent: "center"
                    }}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: "white"
                        }} >
                        {cart.length}
                    </Text>
                </View>

                <SimpleLineIcons name="basket" size={26} color="black" />
            </Pressable>
            <Modal
                isVisible={showBasket}
                onBackdropPress={handleViewBasket}
                style={{ margin: 0, justifyContent: "flex-end" }}
                backdropOpacity={0.5}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                useNativeDriverForBackdrop
            >
                <BasketScreen handleViewBasket={handleViewBasket} />

            </Modal>
        </View >
    )
}

export default Header