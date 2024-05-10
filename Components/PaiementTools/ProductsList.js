import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../../Context/UtilsFunctions';

const ProductsList = ({ cart, totalStockQuantity }) => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (!isEmpty(cart)) {
            setIsLoading(false);
        }
    }, [cart]);

    return (
        <View
            style={{
                width: "100%",
                height: 230,
                borderBottomWidth: 1,
                borderColor: "gray",

            }}>
            <Text style={{
                fontSize: 22,
                fontWeight: "600",
                color: "black",
                paddingLeft: 20,
            }}>
                {totalStockQuantity} Articles
            </Text>
            <View
                style={{
                    width: "100%",
                    height: "90%",
                    paddingLeft: 10,
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                <FlatList
                    data={cart}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(cart) => cart.id.toString()}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                width: 120,
                                height: 180,
                                margin: 4
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
                                        source={{ uri: item.images[0].src }}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}

                                    />
                                )}
                        </View>

                    )} />

            </View>
        </View>
    )
}

export default ProductsList