import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';



const InformationChoice = ({ article }) => {

    console.log("Mes attributs", article.attributes[0].options.name)

    const [value, setValue] = useState(null);

    const data = article.attributes[0].options.map(option => ({
        label: option,
        value: option
    }));





    const renderItem = item => {
        return (
            <View
                style={{
                    padding: 17,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{
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


            {/*   <View
                style={{
                    width: 240,
                 
                    margin: 4,
                    paddingLeft: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 2,
                    borderColor: "gray",
                    paddingRight: 10,
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                    }}>
                    {article.attributes[0].options[0]}
                </Text>

                <Pressable
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                </Pressable>


            </View>*/}
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
                        borderRadius: 12,
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
                    placeholderStyle={{
                        fontSize: 16,
                    }}
                    selectedTextStyle={{ fontSize: 16, }}
                    inputSearchStyle={{
                        height: 40,
                        fontSize: 16,
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,

                    }}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Gender"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign style={{ marginRight: 5, }} color="black" name="Safety" size={20} />
                    )}
                    renderItem={renderItem}
                />
            </View>


            <View
                style={{
                    width: 100,
                    height: 50,
                    borderWidth: 2,
                    borderColor: "gray",
                    paddingLeft: 20,
                    paddingRight: 10,
                    margin: 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",

                }}>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "600",
                    }}>
                    {article.attributes[1].options[1]}
                </Text>

                <Pressable
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

export default InformationChoice