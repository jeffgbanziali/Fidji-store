import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Wishlist from '../ArticleChoise/Wishlist';

const ViewOrderDetailsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const { order } = route.params;

    console.log('Ma méthode de paiement', order.shipping_lines[0].total)

    // Fonction pour formater la date
    const formatDate = (dateString) => {
        if (!dateString) return "Not available";
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const retourned = () => {
        navigation.goBack();
    };

    // Calcul du total des articles commandés
    const itemsTotal = order.line_items.reduce((total, item) => total + parseFloat(item.total), 0);

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                {/* 🛡 En-tête Sécurité */}

                <View
                    style={{
                        width: "100%",
                        height: 50,
                        borderBottomWidth: 1,
                        borderColor: "lightgray",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <TouchableOpacity
                        onPress={retourned}
                        style={{
                            width: 40,
                            height: 40,
                            left: 0,
                            position: "absolute",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>Détails du paiement</Text>
                    <View style={styles.securityHeader}>
                        <AntDesign name="lock" size={20} color="green" />
                        <Text style={styles.securityText}>Toutes les données sont cryptées</Text>
                    </View>

                </View>

                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    width: "100%",
                    padding: 10,
                    height: "100%",
                }}>

                    {/* 💰 Détails du paiement */}
                    <View style={styles.orderTotal}>
                        <Text style={styles.orderTotalText}>Total de la commande :</Text>
                        <Text style={styles.orderTotalAmount}>{order.total}€</Text>
                    </View>

                    {/* 🛍 Détails de la commande */}
                    <View style={styles.orderDetails}>
                        <View style={styles.row}>
                            <Text style={styles.detailText}>Total des articles :</Text>
                            <Text style={styles.boldText}>{itemsTotal.toFixed(2)}€</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.detailText}>Expédition :</Text>
                            <Text style={styles.greenText}>{order.shipping_lines.length > 0 ? order.shipping_lines[0].total + "€" : "Gratuit"}
                            </Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.row}>
                            <Text style={styles.totalText}>Total de la commande :</Text>
                            <Text style={styles.boldText}>{order.total}€</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.vatText}>Inclut la TVA (si applicable) :</Text>
                        </View>
                    </View>


                    <View
                        style={{
                            width: "100%",
                            height: 100,
                            justifyContent: "center",


                        }}>

                        <Text style={styles.sectionTitle}>Mode de paiement</Text>
                        <View style={styles.paymentMethod}>
                            <View>
                                <Text style={styles.paymentText}>{order.payment_method === "stripe" ? "Carte Bancaire" : "Apple pay"}</Text>
                                <Text style={styles.paymentDate}>Payée le {formatDate(order.date_paid)}</Text>
                            </View>
                            <Text style={styles.paymentAmount}>{order.total}€</Text>
                        </View>

                    </View>
                    {/* 🔐 Certification Sécurité */}
                    <Text style={styles.sectionTitle}>Certification de sécurité</Text>
                    <View style={styles.securityContainer}>
                        <AntDesign name="checkcircle" size={20} color="green" />
                        <Text style={styles.securityDescription}>
                            FIDJI s'engage à protéger vos informations de paiement.
                        </Text>
                    </View>
                    <Text style={styles.securityDetails}>
                        Nous suivons les normes PCI DSS, utilisons un cryptage fort et effectuons des examens réguliers de son système pour protéger votre vie privée.
                    </Text>

                    {/* 🏦 Logos Sécurité */}
                    <View style={styles.securityLogos}>
                        {[
                            "https://www.pcisecuritystandards.org/images/logo-pci-dss.png",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/120px-Visa.svg.png",
                            "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.png",
                            "https://upload.wikimedia.org/wikipedia/commons/5/5e/Discover_Card_logo.png",
                            "https://upload.wikimedia.org/wikipedia/commons/8/80/JCB_logo.svg",
                            "https://upload.wikimedia.org/wikipedia/commons/2/25/Trusted_Site_logo.png"
                        ].map((url, index) => (
                            <Image key={index} source={{ uri: url }} style={styles.securityIcon} />
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        height: "100%",
    },
    securityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    securityText: {
        fontSize: 15,
        fontWeight: '400',
        color: 'green',
        marginLeft: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    orderTotal: {
        alignItems: 'center',
        marginBottom: 10,
    },
    orderTotalText: {
        fontSize: 18,
    },
    orderTotalAmount: {
        fontSize: 22,
        fontWeight: '500',
    },

    orderDetails: {
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    detailText: {
        fontSize: 16,
        color: '#333',
    },
    boldText: {
        fontWeight: '600',
        fontSize: 16,
    },
    greenText: {
        color: 'green',
        fontWeight: '600',
    },
    totalText: {
        fontSize: 18,
        fontWeight: '600',
    },
    vatText: {
        fontSize: 14,
        color: '#666',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },
    applePayLogo: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
    },
    paymentText: {
        fontSize: 16,
        fontWeight: '500',
    },
    paymentDate: {
        fontSize: 13,
        color: '#666',
    },
    paymentAmount: {
        fontSize: 16,
        fontWeight: '600',
    },
    securityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 5,
    },
    securityDescription: {
        fontSize: 14,
        color: 'green',
        marginLeft: 8,
    },
    securityDetails: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    securityLogos: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    securityIcon: {
        width: 60,
        height: 40,
        margin: 5,
        resizeMode: 'contain',
    },
});

export default ViewOrderDetailsScreen;
