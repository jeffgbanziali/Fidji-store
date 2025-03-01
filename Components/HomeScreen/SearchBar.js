import { View, Text, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import SearchModal from '../Searching/SearchModal';

const SearchBar = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            {/* Barre de recherche */}
            <Pressable
                onPress={() => setModalVisible(true)}
                style={{
                    width: '100%',
                    height: 50,
                    alignItems: "center",
                    backgroundColor: "black",
                    flexDirection: "row",
                    paddingHorizontal: 10
                }}>
                <Feather name="search" size={24} color="white" />
                <Text
                    style={{
                        fontSize: 16,
                        color: 'white',
                        marginLeft: 10
                    }}>
                    QUE RECHERCHEZ-VOUS ?
                </Text>
            </Pressable>

            {/* Modal pour la recherche */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <SearchModal closeModal={() => setModalVisible(false)} />
            </Modal>
        </>
    );
};

export default SearchBar;
