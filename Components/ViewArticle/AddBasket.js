import React, { useContext, useState } from 'react'
import { Modal, Text, Pressable, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SuccessModal from './SuccessModal';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../Context/AuthContext';

const AddBasket = ({ article, selectedColor, selectedSize }) => {
    const [quantity, setQuantity] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };


    const userData = useSelector((state) => state.userReducer)



    const { cart, addToCart } = useContext(AuthContext)



    const handleAddCartArticle = () => {

        const updatedArticle = { ...article };
        console.log("Mon update est là", updatedArticle.attributes)

        if (updatedArticle) {
            if (updatedArticle.attributes && updatedArticle.attributes.length > 0) {
                if (updatedArticle.attributes.length > 0) {
                    updatedArticle.attributes[0].options = selectedColor;
                }
                if (updatedArticle.attributes.length > 1) {
                    updatedArticle.attributes[1].options = selectedSize;
                }
            } else {
                console.log("Le tableau des attributs est vide.");
                updatedArticle.attributes = [
                    { options: [selectedColor] },
                    { options: [selectedSize] }
                ];
            }

            updatedArticle.stock_quantity = quantity;
        }

        addToCart(updatedArticle);
        setShowSuccessModal(true);



    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };





    return (
        <View
            style={{
                width: "100%",
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
            }}>

            <View
                style={{
                    width: 120,
                    height: 45,
                    margin: 4,
                    borderRadius: 10,
                    flexDirection: "row",
                    paddingLeft: 2,
                    paddingRight: 2,
                    borderWidth: 2,
                    borderColor: "gray",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>

                <Pressable
                    onPress={decreaseQuantity}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                    <AntDesign name="minus" size={20} color="black" />

                </Pressable>


                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                    }}>
                    {quantity}
                </Text>

                <Pressable
                    onPress={increaseQuantity}
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                    <AntDesign name="plus" size={20} color="black" />
                </Pressable>

            </View>


            <Pressable
                onPress={handleAddCartArticle}
                style={{
                    width: 200,
                    height: 50,
                    margin: 4,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black"
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "white"
                    }}>
                    Ajouter au panier
                </Text>
            </Pressable>


            <SuccessModal visible={showSuccessModal} onClose={closeSuccessModal} />

        </View>
    )
}

export default AddBasket