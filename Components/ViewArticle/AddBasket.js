import React, { useContext, useState } from 'react'
import { Modal, Text, Pressable, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SuccessModal from './SuccessModal';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../Context/AuthContext';

const AddBasket = ({ article, quantity, setQuantity, selectedColor, selectedSize }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);



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
                height: 80,
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
            }}>


            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                <AntDesign name="tag" size={24} color="black" />
                <Text
                    style={{
                        fontSize: 30,
                        paddingLeft: 10,
                        fontWeight: "500",
                    }}>
                    {article.price} €
                </Text>

            </View>

            <Pressable
                onPress={handleAddCartArticle}
                style={{
                    width: 180,
                    height: 50,
                    margin: 4,
                    borderRadius: 20,
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