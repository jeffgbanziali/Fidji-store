import React from "react";
import { View, Text, Pressable } from "react-native";

const ActionButton = ({ text, onPress, color = "black", borderColor = "black" }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Pressable
                style={{
                    borderBottomWidth: 2,
                    borderColor: borderColor,
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "500",
                        color: color,
                    }}
                >
                    {text}
                </Text>
            </Pressable>
        </View>
    );
};

const UserActionButton = ({ data, onEditEmail, onEditPassword, onDeleteAccount }) => {
    return (
        <View
            style={{
                width: "100%",
                height: 150,
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <ActionButton text="Modifier mon adresse email" onPress={onEditEmail} />
            <ActionButton text="Modifier mon mot de passe" onPress={onEditPassword} />
            <ActionButton text="Supprimer mon compte" onPress={onDeleteAccount} color="red" borderColor="red" />
        </View>
    );
};

export default UserActionButton;
