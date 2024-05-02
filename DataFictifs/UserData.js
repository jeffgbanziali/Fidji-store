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
