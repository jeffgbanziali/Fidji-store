import React, { useState } from "react";
import { View, TextInput } from "react-native";

const InputField = ({ placeholder, value, onChangeText }) => {
    return (
        <View
            style={{
                width: 380,
                height: 50,
                borderRadius: 10,
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "gray",
                backgroundColor: "white",
                marginBottom: 10,
            }}
        >
            <TextInput
                style={{
                    width: "90%",
                    height: "100%,",
                    paddingLeft: 12,
                    fontSize: 20,
                    color: "black",
                }}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor="black"
                autoCapitalize="none"
            />
        </View>
    );
};

const UserInfoForm = ({ data }) => {
    const [email, setEmail] = useState("");

    return (
        <View
            style={{
                width: "100%",
                height: 350,
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <InputField placeholder={data.username} value={email} onChangeText={setEmail} />
            <InputField placeholder={data.first_name} value={email} onChangeText={setEmail} />
            <InputField placeholder={data.last_name} value={email} onChangeText={setEmail} />
            <InputField placeholder={data.email} value={email} onChangeText={setEmail} />
            <InputField placeholder={data.billing.phone === "" ? "Votre numéro de téléphone" : data.billing.phone} value={email} onChangeText={setEmail} />
        </View>
    );
};

export default UserInfoForm;
