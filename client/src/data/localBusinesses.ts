interface BusinessProps {
    id: number;
    category: string;
    name: string;
    rating: number;
    details: BusinessDetailProps;
}

interface BusinessDetailProps {
    id: number;
    address: BusinessAddressProps;
    hours: BusinessHoursProps[];
    phone: string;
    website: string;
    description: string[];
    cuisine?: string;
    distance: number;
    priceLevel: number;
}

interface BusinessAddressProps {
    street: string;
    city: string;
    province: string;
    postalCode: string;
}

interface BusinessHoursProps {
    days: string;
    time: string;
}

export const localBusinesses: BusinessProps[] = [
    {
        id: 1,
        category: "Food & Drinks",
        name: "BanBan Korean Fried Chicken",
        rating: 4.6,
        details: {
            id: 1,
            address: {
                street: "20 Athol Street W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 1J5"
            },
            hours: [
                {
                    days: "Monday - Sunday", 
                    time: "12:00 pm - 9:00 pm"
                }
            ],
            phone: "(289) 312-0992",
            website: "https://banbanchk.ca",
            description: [
                "Banban Korean Fried Chicken serves up crispy, flavorful Korean-style fried chicken with a variety of sauces and sides. Known for its perfectly crunchy exterior and juicy meat inside.",
                "Banban offers a delicious taste of authentic Korean comfort food in a casual, welcoming setting. Whether you're craving classic soy garlic, spicy gochujang, or crispy wings, Banban is a go-to spot for fried chicken lovers."
            ],
            distance: 1.1,
            priceLevel: 2
        }
    }
]