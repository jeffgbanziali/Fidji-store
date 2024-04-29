export const UserData = {
    id: 1,
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    shippingAddress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA"
    },
    billingAddress: {
        street: "456 Broadway",
        city: "New York",
        state: "NY",
        zipCode: "10002",
        country: "USA"
    },
    dateOfBirth: "1990-01-01",
    gender: "Male",
    profilePicture: "https://example.com/profile.jpg",
    username: "johndoe",
    password: "hashedPassword",
    orderHistory: [
        {
            orderId: 1,
            products: [
                {
                    productId: 1,
                    productName: "T-shirt",
                    quantity: 2,
                    price: 25.99
                },
                {
                    productId: 2,
                    productName: "Jeans",
                    quantity: 1,
                    price: 39.99
                }
            ],
            totalAmount: 91.97,
            orderDate: "2024-04-23",
            status: "Delivered"
        },
        // Autres commandes ici...
    ],

    wishlist: [
        {
            productId: 1,
            productName: "Chemise en coton",
            description: "Chemise décontractée en coton 100% avec col boutonné.",
            price: 29.99,
            couleur: "bleu",
            taille: "M",
            imageUri: "https://img.freepik.com/photos-gratuite/belle-jeune-femme-parisienne-aux-cheveux-bruns-beret-elegant-trench-coat-beige-sac-noir-debout-vieux-escaliers-posant-sensibilite-exterieur_197531-24472.jpg",
            couture: [
                "- Pantalon long",
                "- Poches italiennes devant et passepoilées au dos",
                "- Plis cassés devant et dos",
                "- Fermeture par agrafes et zip cachée",
                "- Longueur intérieur jambe 84,5 cm (pour un 36)",
            ],
            details: [
                "94% Coton biologique - textile à base de fibres biologiques, 6% Élasthanne"
            ],
            composition: [
                "40% polyester",
                " 35% lurex",
                " 25% coton"
            ],
            entretien: [
                "Le haut MELIA est simple d’entretien",
                "un lavage en machine à 40° est conseillé. ",
                "Avant de l’étendre, redonner sa forme initiale au haut et le laisser sécher naturellement. ",
                "Le séchage en machine est fortement déconseillé."]

        },

        {
            productId: 2,
            productName: "Chemise en coton",
            description: "Chemise décontractée en coton 100% avec col boutonné.",
            price: 29.99,
            couleur: "bleu",
            taille: "M",
            imageUri: "https://img.freepik.com/photos-gratuite/belle-jeune-femme-parisienne-aux-cheveux-bruns-beret-elegant-trench-coat-beige-sac-noir-debout-vieux-escaliers-posant-sensibilite-exterieur_197531-24472.jpg",
            couture: [
                "- Pantalon long",
                "- Poches italiennes devant et passepoilées au dos",
                "- Plis cassés devant et dos",
                "- Fermeture par agrafes et zip cachée",
                "- Longueur intérieur jambe 84,5 cm (pour un 36)",
            ],
            details: [
                "94% Coton biologique - textile à base de fibres biologiques, 6% Élasthanne"
            ],
            composition: [
                "40% polyester",
                " 35% lurex",
                " 25% coton"
            ],
            entretien: [
                "Le haut MELIA est simple d’entretien",
                "un lavage en machine à 40° est conseillé. ",
                "Avant de l’étendre, redonner sa forme initiale au haut et le laisser sécher naturellement. ",
                "Le séchage en machine est fortement déconseillé."]

        },

        {
            productId: 3,
            productName: "Chemise en coton",
            description: "Chemise décontractée en coton 100% avec col boutonné.",
            price: 29.99,
            couleur: "bleu",
            taille: "M",
            imageUri: "https://img.freepik.com/photos-gratuite/belle-jeune-femme-parisienne-aux-cheveux-bruns-beret-elegant-trench-coat-beige-sac-noir-debout-vieux-escaliers-posant-sensibilite-exterieur_197531-24472.jpg",
            couture: [
                "- Pantalon long",
                "- Poches italiennes devant et passepoilées au dos",
                "- Plis cassés devant et dos",
                "- Fermeture par agrafes et zip cachée",
                "- Longueur intérieur jambe 84,5 cm (pour un 36)",
            ],
            details: [
                "94% Coton biologique - textile à base de fibres biologiques, 6% Élasthanne"
            ],
            composition: [
                "40% polyester",
                " 35% lurex",
                " 25% coton"
            ],
            entretien: [
                "Le haut MELIA est simple d’entretien",
                "un lavage en machine à 40° est conseillé. ",
                "Avant de l’étendre, redonner sa forme initiale au haut et le laisser sécher naturellement. ",
                "Le séchage en machine est fortement déconseillé."]

        },

    ],
    cart: [
       


        // Autres produits dans le panier ici...
    ],
    notificationPreferences: {
        emailNotifications: true,
        pushNotifications: true
    },
    reviews: [
        {
            productId: 1,
            productName: "T-shirt",
            rating: 4,
            reviewText: "Great quality and comfortable fit."
        },
        // Autres avis ici...
    ],
    paymentMethods: [
        {
            cardType: "Visa",
            cardNumber: "**** **** **** 1234",
            expirationDate: "12/25",
            billingAddress: {
                street: "456 Broadway",
                city: "New York",
                state: "NY",
                zipCode: "10002",
                country: "USA"
            }
        },
        // Autres méthodes de paiement ici...
    ],
    accountStatus: "Active",
    accountSettings: {
        language: "en",
        timeZone: "America/New_York"
    }
};
