import React from "react";
import { View, Text } from "react-native";

const NewsletterOption = ({ text }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: 100,
            }}
        >
            <View
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    backgroundColor: "green",
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "500",
                    paddingLeft: 10,
                    color: "black",
                }}
            >
                {text}
            </Text>
        </View>
    );
};

const NewsletterSubscription = () => {
    return (
        <View
            style={{
                width: "100%",
                height: 150,
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <View
                style={{
                    width: "98%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: "black",
                        textAlign: "left",
                    }}
                >
                    RECEVEZ NOS INVITATIONS : NOTRE NEWSLETTER POUR ÊTRE AU COURANT DE TOUT, TOUT LE MONDE
                </Text>
            </View>

            <View
                style={{
                    width: "98%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: "500",
                        color: "black",
                        textAlign: "left",
                    }}
                >
                    Notre newsletter pour être au courant de tout avant tout le monde
                </Text>
            </View>


            <View
                style={{
                    width: "50%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <NewsletterOption text="Oui" />
                <NewsletterOption text="Non" />
            </View>

            
        </View>
    );
};

export default NewsletterSubscription;
