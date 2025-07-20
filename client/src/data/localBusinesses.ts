interface BusinessProps {
    id: number;
    category: string;
    name: string;
    rating: number;
    image: string;
    details: BusinessDetailProps;
}

interface BusinessDetailProps {
    address: BusinessAddressProps;
    hours: BusinessHoursProps[];
    phone: string;
    website: string;
    description: string[];
    cuisine?: string;
    distance: number;
    priceLevel?: number;
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

const imagePath = "/assets/images/businesses";

export const localBusinesses: BusinessProps[] = [
    {
        id: 1,
        category: "food",
        name: "BanBan Korean Fried Chicken",
        image: `${imagePath}/banban.jpg`,
        rating: 4.6,
        details: {
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
    },
    {
        id: 2,
        category: "attractions",
        name: "NEB's Fun World",
        image: `${imagePath}/nebs.jpg`,
        rating: 4.5,
        details: {
            address: {
                street: "1300 Wilson Rd N",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1K 2B8"
            },
            hours: [
                {
                    days: "Sunday - Thursday", time: "9:30 am - 10:00 pm"
                },
                {
                    days: "Friday - Saturday", time: "9:30 am - 11:00 pm"
                }
            ],
            phone: "(905) 723-2631",
            website: "https://www.nebsfunworld.com",
            description: [
                "NEB’s Fun World in Oshawa is a premier indoor entertainment centre offering fun for the whole family. It features the world’s largest 5-pin bowling facility with 52 lanes, a massive arcade with over 120 games, and exciting rides including an indoor roller coaster and thrill rides.",
                "For younger kids, there’s a large indoor play area, plus mini golf courses, virtual reality experiences, bumper cars, and a full-service lounge. NEB’s is also great for birthdays, group outings, and team-building events, making it a go-to spot for all ages."
            ],
            distance: 2,
        }
    }
]