import { View, Text, Pressable } from 'react-native';
import React, { useState, useMemo } from 'react';
import { SimpleLineIcons, AntDesign, Fontisto } from '@expo/vector-icons';

const InformationChoice = ({ article, quantity, setQuantity, onColorChange, onSizeChange }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };




    const dataOptionsColor = useMemo(() => {
        const colors = article?.attributes?.[0]?.options || [];
        return colors.length > 0 ? colors.map(option => ({ label: option, value: option })) : [{ label: 'Unique', value: 'unique' }];
    }, [article?.attributes]);


    const dataOptionsLenght = useMemo(() => {
        const sizes = article.attributes[1]?.options || [];
        return sizes.length > 0 ? sizes.map(option => ({ label: option, value: option })) : [{ label: 'Unique', value: 'unique' }];
    }, [article.attributes]);

    return (
        <View
            style={{
                paddingTop: 10,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <View
                style={{
                    width: "100%",
                    height: 50,
                    flexDirection: "row",
                }}>
                <View
                    style={{
                        width: '60%',
                        height: 60,
                        justifyContent: "center",
                        paddingLeft: 20,
                        flexShrink: 1,

                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        {article.name}
                    </Text>
                </View>


                <View
                    style={{
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderColor: "gray",
                        flexDirection: "row",
                    }}
                >
                    {dataOptionsColor.map((color, index) => (
                        <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                            {color.value === 'unique' ? (
                                <Pressable
                                    onPress={() => {
                                        if (color.value !== 'gray') { // Vérifie que la couleur n'est pas unique avant de sélectionner
                                            setSelectedColor(color.value);
                                            onColorChange(color.label);
                                        } else {
                                            alert("Cet article est disponible uniquement en une seule couleur.");
                                        }
                                    }}
                                    style={{
                                        width: 80,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 5,
                                        backgroundColor: selectedColor === color.value ? "black" : 'transparent',
                                    }}
                                >
                                    {selectedColor === color.value ? (
                                        <View style={{
                                            width: 80,
                                            height: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 10,
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 14,
                                                fontWeight: "600"
                                            }}>{color.label}</Text>
                                        </View>
                                    ) : (
                                        <View style={{
                                            width: 80,
                                            height: 30,
                                            borderRadius: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }} >
                                            <Text style={{ color: 'gray', fontWeight: "600", fontSize: 14 }}>{color.label}</Text>
                                        </View>
                                    )}


                                </Pressable>

                            ) : (
                                <Pressable
                                    onPress={() => {
                                        setSelectedColor(color.value);
                                        onColorChange(color.label);
                                    }}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: 30,
                                        marginRight: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 2,
                                        borderColor: selectedColor === color.value ? color.value : 'transparent',
                                    }}
                                >
                                    {selectedColor === color.value ? (
                                        <View style={{
                                            width: 14,
                                            height: 14,
                                            backgroundColor: selectedColor === color.value ? color.value : 'transparent',
                                            borderRadius: 30,
                                        }} />
                                    ) : (
                                        <View style={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: 30,
                                            backgroundColor: color.value,
                                        }} />
                                    )}
                                </Pressable>
                            )}
                        </View>
                    ))}


                </View>


            </View>

            <View
                style={{
                    width: "100%",
                    height: 60,
                    justifyContent: "center",

                }}>

                <Text
                    style={{
                        paddingLeft: 20,
                        fontSize: 16,
                        fontWeight: '500',
                    }}>Sizes</Text>
                <View
                    style={
                        {
                            justifyContent: "space-between",
                            flexDirection: "row",
                            paddingRight: 10,
                        }
                    }>


                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingLeft: 20,

                        }}>
                        {dataOptionsLenght.map((size, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    setSelectedSize(size.value);
                                    onSizeChange(size.label)
                                }}
                                style={{
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    borderRadius: 8,
                                    marginRight: 8,
                                    backgroundColor: selectedSize === size.value ? 'black' : null,
                                }}
                            >
                                <Text style={{
                                    color: selectedSize === size.value ? 'white' : 'gray',
                                    fontSize: 18,
                                    fontWeight: "500",
                                }}>{size.label}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <View
                        style={{
                            width: 100,
                            height: 25,
                            margin: 4,
                            borderRadius: 10,
                            flexDirection: "row",
                            paddingLeft: 2,
                            paddingRight: 2,
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>

                        <Pressable
                            onPress={decreaseQuantity}
                            style={{
                                width: 25,
                                height: 25,
                                borderRadius: 100,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                            <AntDesign name="minus" size={16} color="white" />

                        </Pressable>


                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "600",
                                color: "black"
                            }}>
                            {quantity}
                        </Text>

                        <Pressable
                            onPress={increaseQuantity}
                            style={{
                                width: 25,
                                height: 25,
                                borderRadius: 100,
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                            <AntDesign name="plus" size={15} color="white" />
                        </Pressable>

                    </View>
                </View>
            </View>

        </View >
    );
};

export default InformationChoice;
