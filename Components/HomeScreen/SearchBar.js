import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = () => {


    const [isTyping, setIsTyping] = useState(false);
    const [newSearch, setNewSearch] = useState();

    const handleInputChange = (text) => {
        setNewSearch(text);
        setIsTyping(text.length > 0);
    };

    const handleRefresh = () => {
        setNewSearch('');
        setIsTyping(false);
    };


    return (
        <View
            style={{
                width: '100%',
                height: 50,
                alignItems: "center",
                backgroundColor: "black",
                flexDirection: "row"
            }}>
            <View
                style={{
                    width: '12%',
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                <View style={{
                    width: 60,
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Feather name="search" size={24} color="white" />
                </View>

            </View>
            <View
                style={{
                    width: '74%',
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",

                }}>

                <TextInput
                    style={{
                        width: isTyping ? '80%' : "100%",
                        paddingLeft: 4,
                        height: "100%",
                        fontSize: 16,
                        color: 'white',
                    }}
                    onChangeText={handleInputChange}
                    value={newSearch}
                    placeholder="QUE RECHERCHEZ-VOUS"
                    placeholderTextColor="white"
                    fontSize={16}

                />


                {isTyping && (
                    <View
                        style={{
                            width: '20%',
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <Pressable
                            style={{
                                width: 26,
                                height: 26,
                                borderRadius: 30,
                                justifyContent: "center",
                                borderWidth: 2,
                                borderColor: "white",
                                alignItems: "center",
                            }}
                            onPress={handleRefresh}
                        >
                            <Entypo name="cross" size={16} color="white" />
                        </Pressable>
                    </View>

                )}


            </View>



            <View
                style={{
                    width: '14%',
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    //backgroundColor: "yellow"

                }}>

            </View>

        </View>
    )
}

export default SearchBar