import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const OrderTracking = () => {
    const route = useRoute();
    const { order } = route.params;
    const navigation = useNavigation();

    const retourned = () => {
        navigation.goBack();
    };





    // Extraire les informations de suivi depuis `meta_data`
    const trackingMeta = order.meta_data.find(item => item.key === "_wc_shipment_tracking_items");
    const trackingInfo = trackingMeta?.value?.[0];

    console.log("les informations de livraison", trackingInfo)

    // Générer un lien de suivi si le transporteur est "colissimo"
    const trackingLink = trackingInfo?.tracking_number
        ? `https://www.laposte.fr/outils/suivre-vos-envois?code=${trackingInfo.tracking_number}`
        : null;


    // Fonction pour ouvrir le lien du transporteur
    const openTrackingLink = () => {
        if (trackingLink) {
            Linking.openURL(trackingLink);
        }
    };


    const trackingSteps = [
        { label: "Commande passée", icon: "shopping-cart", completed: true },
        { label: "Commande en préparation", icon: "box", completed: order.status !== "pending" },
        { label: "Expédiée", icon: "truck", completed: order.status === "shipped" || order.status === "completed" || order.status === "delivered" },
        { label: "En cours de livraison", icon: "shipping-fast", completed: order.status === "shipped" || order.status === "delivered" },
        { label: "Livrée", icon: "home", completed: order.status === "delivered" },
    ];

    return (
        <LinearGradient colors={['#FFFFFF', '#f5e1ce', '#d3d3d3']}
            style={{ flex: 1, backgroundColor: '#F8F9FA' }}
        >
            <SafeAreaView >


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <TouchableOpacity onPress={retourned} style={{ padding: 10 }}>
                        <AntDesign name="left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", fontSize: 22, fontWeight: "bold", color: "black" }}>
                        Suivi de commande
                    </Text>
                </View>

                <ScrollView contentContainerStyle={{ padding: 15 }}>
                    {/* Informations de suivi */}
                    <View style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 12,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                        marginBottom: 20
                    }}>
                        {/* Titre centré */}
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#333", marginBottom: 15, textAlign: 'center' }}>
                            📦 Expédition actuelle
                        </Text>

                        {/* Informations de suivi bien alignées */}
                        <View style={{ marginBottom: 15 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, color: '#777' }}>Transporteur :</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>{trackingInfo?.tracking_provider || "Non spécifié"}</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                                <Text style={{ fontSize: 16, color: '#777' }}>Numéro de suivi :</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>{trackingInfo?.tracking_number || "Non disponible"}</Text>
                            </View>

                            {/* Date d'expédition */}
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
                                <Text style={{ fontSize: 16, color: '#777' }}>📦 Expédié le :</Text>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>
                                    {trackingInfo?.date_shipped
                                        ? new Date(trackingInfo.date_shipped * 1000).toLocaleDateString()
                                        : "Non disponible"}
                                </Text>
                            </View>

                            {order.status === "delivered" && trackingInfo?.date_delivered && (
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
                                    <Text style={{ fontSize: 16, color: '#777' }}>✅ Livré le :</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>
                                        {trackingInfo?.date_shipped
                                            ? new Date(trackingInfo.date_shipped * 1000).toLocaleDateString()
                                            : "Non disponible"}
                                    </Text>
                                </View>
                            )}

                        </View>

                        {/* Bouton de suivi modernisé */}
                        {trackingLink && (
                            <TouchableOpacity
                                onPress={openTrackingLink}
                                style={{
                                    backgroundColor: '#f5e1ce',
                                    paddingVertical: 12,
                                    paddingHorizontal: 15,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 10,
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 5,
                                    elevation: 3,
                                }}
                                activeOpacity={0.8}
                            >
                                <FontAwesome5 name="external-link-alt" size={18} color="black" style={{ marginRight: 8 }} />
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Suivre sur le site du transporteur</Text>
                            </TouchableOpacity>
                        )}
                    </View>


                    {/* Timeline de suivi */}
                    <View style={{ marginTop: 20, backgroundColor: "white", padding: 20, borderRadius: 12, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>🚚 Statut de la livraison</Text>
                        {trackingSteps.map((step, index) => (
                            <View key={index} style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                                <View style={{
                                    width: 30, height: 30, borderRadius: 15, backgroundColor: step.completed ? "#28a745" : "#ccc",
                                    alignItems: "center", justifyContent: "center", marginRight: 15
                                }}>
                                    <FontAwesome5 name={step.icon} size={16} color="white" />
                                </View>
                                <Text style={{ fontSize: 16, color: step.completed ? "black" : "gray" }}>{step.label}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView >
        </LinearGradient>

    );
};

export default OrderTracking;
