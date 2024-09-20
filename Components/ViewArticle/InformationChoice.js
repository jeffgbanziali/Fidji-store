import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';



const InformationChoice = ({ article, onSizeChange, onColorChange }) => {


    const [taille, setTaille] = useState(null);
    const [value, setValue] = useState(null);




    const dataOptionsColor = article.attributes[0].options.map(option => ({
        label: option,
        value: option
    }));


    const dataOptionsLenght = article.attributes[1].options.map(option => ({
        label: option,
        value: option
    }));


    const dataName = article.attributes[0].name
    const dataColor = article.attributes[1].name





    const renderItem = item => {
        return (
            <View
                style={{
                    padding: 17,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 18,
                    }}>{item.label}</Text>
                {item.value === value && (
                    <AntDesign
                        style={{
                            marginRight: 5,
                        }}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
            </View>
        );
    };



    const renderColor = item => {
        return (
            <View
                style={{
                    padding: 17,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 18,
                    }}>{item.label}</Text>
                {item.value === value && (
                    <AntDesign
                        style={{
                            marginRight: 5,
                        }}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
            </View>
        );
    };


    return (
        <View
            style={{
                width: "100%",
                height: 70,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>



            <View
                style={{
                    width: 240,
                    margin: 4,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 2,
                    borderRadius: 12,
                    borderColor: "gray",
                    paddingRight: 10,
                }}>
                <Dropdown
                    style={{
                        height: 50,
                        width: 240,
                        padding: 12,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                    }}
                    dropdownStyle={{
                        backgroundColor: 'red',
                    }}
                    placeholderStyle={{
                        fontSize: 14,
                    }}
                    selectedTextStyle={{
                        fontSize: 16,

                    }}
                    inputSearchStyle={{
                        height: 40,
                        fontSize: 16,
                        backgroundColor: 'red',

                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,

                    }}
                    data={dataOptionsColor}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={dataName}
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                        onColorChange(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={{ marginRight: 5, }}
                            color="black"
                            name="Safety"
                            size={20} />
                    )}
                    renderItem={renderColor}
                />
            </View>


            <View
                style={{
                    width: 100,
                    height: 50,
                    borderWidth: 2,
                    borderRadius: 12,
                    borderColor: "gray",
                    paddingRight: 10,
                    margin: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",

                }}>
                <Dropdown
                    style={{
                        height: 50,
                        width: 100,
                        padding: 12,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 2,
                    }}
                    dropdownStyle={{
                        backgroundColor: 'red',
                    }}
                    placeholderStyle={{
                        fontSize: 14,
                    }}
                    selectedTextStyle={{
                        fontSize: 16,

                    }}
                    inputSearchStyle={{
                        height: 40,
                        fontSize: 16,
                        backgroundColor: 'red',

                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,

                    }}
                    data={dataOptionsLenght}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={dataColor}
                    value={taille}
                    onChange={item => {
                        setTaille(item.value);
                        onSizeChange(item.value);
                    }}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default InformationChoice