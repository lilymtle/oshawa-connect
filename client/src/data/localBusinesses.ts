import { getImagePath } from "../utils/getImagePath";

interface BusinessProps {
    id: number;
    category: string;
    name: string;
    image: string;
    rating: number;
    coordinates: {latitude: number, longitude: number};
    details: BusinessDetailProps;
}

export interface BusinessDetailProps {
    address: BusinessAddressProps;
    hours: BusinessHoursProps[];
    phone?: string;
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
    days?: string;
    time?: string;
    other?: string;
}

export const localBusinesses: BusinessProps[] = [
    {
        id: 1,
        category: "foods & drinks",
        name: "BanBan Korean Fried Chicken",
        image: getImagePath("businesses", "foods-and-drinks", "banban.jpg"),
        rating: 4.7,
        coordinates: {latitude: 43.89680, longitude: -78.86402},
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
            cuisine: "Korean",
            distance: 1.1,
            priceLevel: 2
        }
    },
    {
        id: 2,
        category: "attractions",
        name: "NEB's Fun World",
        image: getImagePath("businesses", "attractions", "nebs.jpg"),
        rating: 4.5,
        coordinates: { latitude: 43.93556, longitude: -78.85896},
        details: {
            address: {
                street: "1300 Wilson Rd N",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1K 2B8"
            },
            hours: [
                { days: "Sunday - Thursday", time: "9:30 am - 10:00 pm" },
                { days: "Friday - Saturday", time: "9:30 am - 11:00 pm" }
            ],
            phone: "(905) 723-2631",
            website: "https://www.nebsfunworld.com",
            description: [
                "NEB’s Fun World in Oshawa is a premier indoor entertainment centre offering fun for the whole family. It features the world’s largest 5-pin bowling facility with 52 lanes, a massive arcade with over 120 games, and exciting rides including an indoor roller coaster and thrill rides.",
                "For younger kids, there’s a large indoor play area, plus mini golf courses, virtual reality experiences, bumper cars, and a full-service lounge. NEB’s is also great for birthdays, group outings, and team-building events, making it a go-to spot for all ages."
            ],
            distance: 2
        }
    },
    {
        id: 3,
        category: "attractions",
        name: "Canadian Automotive Museum",
        image: getImagePath("businesses", "attractions", "canadian-automotive-museumn.jpg"),
        rating: 4.5,
        coordinates: {latitude: 43.895124328773306, longitude: -78.86149945765962},
        details: {
            address: {
                street: "99 Simcoe St S",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 4G7"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Sunday", time: "10:00 am - 4:00 pm" }
            ],
            phone: "(905) 576-1222",
            website: "https://www.canadianautomotivemuseum.com/",
            description: [
                "The Canadian Automotive Museum preserves and showcases Canada's rich automotive heritage in a historic 1920s car dealership building. Inside, you’ll find a carefully curated collection of vintage vehicles, from rare European classics to Canadian-made models that shaped the nation's roads. Interactive displays and interpretive signage provide insight into the evolution of transportation and the impact of the auto industry on Canadian culture.",
                "The museum is a great destination for history enthusiasts, families, and anyone with a love for cars. Whether you’re exploring the sleek lines of a 1930s luxury coupe or learning about Canada’s manufacturing legacy, the museum offers a nostalgic and educational experience. It also hosts events, educational programs, and rotating exhibits to keep things fresh for repeat visitors."
            ],
            distance: 2
        }
    },
    {
        id: 4,
        category: "attractions",
        name: "The Robert McLaughlin Gallery",
        image: getImagePath("businesses", "attractions", "robert-mclaughlin-gallery.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.895083078245555, longitude: -78.86545571533172},
        details: {
            address: {
                street: "72 Queen St",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 3Z3"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Sunday", time: "10:00 am - 4:00 pm"}
            ],
            phone: "(905) 576-3000",
            website: "https://rmg.on.ca/",
            description: [
                "As Durham Region’s largest public art gallery, The Robert McLaughlin Gallery features an impressive collection of over 4,500 works, focusing heavily on Canadian modernism and abstract art. It’s especially known for its ties to Painters Eleven, a groundbreaking group of abstract artists in Ontario. The gallery space itself is bright and contemporary, encouraging thoughtful engagement with the art.",
                "Beyond exhibitions, the gallery offers community programming, workshops, and events that make art accessible to all. It’s not only a space for viewing art but also for learning, creating, and connecting with local culture. The gallery’s commitment to inclusion and education makes it a cornerstone of Oshawa’s cultural scene."
            ],
            distance: 4
        }
    },
    {
        id: 5,
        category: "foods & drinks",
        name: "Brew Wizards",
        image: getImagePath("businesses", "foods-and-drinks", "brew-wizards.jpg"),
        rating: 4.7,
        coordinates: {latitude: 43.89600931769849, longitude: -78.86097622195233},
        details: {
            address: {
                street: "74 Celina St",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 4N2"
            },
            hours: [
                { days: "Sunday - Monday", time: "Closed" },
                { days: "Tuesday - Thursday", time: "10:00 am - 10:00 pm" },
                { days: "Friday", time: "10:00 am - 12:00 am "},
                { days: "Saturday", time: "11:00 am - 12:00 am" }
            ],
            phone: "(905) 240-5504",
            website: "https://brewwizards.ca/",
            description: [
                "Brew Wizards is a welcoming café and board game lounge that blends specialty coffee, local craft beer, and hundreds of games under one roof. The space is cozy and community-oriented, making it the perfect hangout for game nights, casual meetups, or solo work sessions. Whether you’re into classics like Catan or indie card games, there’s something for everyone.",
                "The staff are knowledgeable and eager to help you find your next favorite game or recommend a perfect drink pairing. With regular events like trivia nights and tournaments, Brew Wizards is more than just a coffee shop—it’s a social hub for Oshawa’s gaming and geek culture."
            ],
            cuisine: "Cafe",
            distance: 3
        }
    },
    {
        id: 6,
        category: "foods & drinks",
        name: "Karèza Café",
        image: getImagePath("businesses", "foods-and-drinks", "kareza-cafe.jpg"),
        rating: 4.5,
        coordinates: {latitude: 43.895284646605944, longitude: -78.86343882697116},
        details: {
            address: {
                street: "27 Debwewin Miikan",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 4A1"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Friday", time: "8:00 am - 8:00 pm" },
                { days: "Saturday", time: "9:00 am - 8:00 pm" },
                { days: "Sunday", time: "9:00 am - 7:00 pm" }
            ],
            phone: "(905) 576-4766",
            website: "https://kareza.mynilead.com/",
            description: [
                "Kareza Café is a cozy and inviting café offering fresh baked goods, artisan coffee, and a rotating menu of wholesome breakfast and lunch options. Its warm atmosphere and rustic charm make it a relaxing place to enjoy everything from hearty sandwiches to delicate pastries. With a focus on quality ingredients and comfort food, Kareza has built a loyal following among locals.",
                "Perfect for casual catch-ups, work sessions, or weekend brunches, the café also frequently features seasonal specials and homemade treats. Whether you're in the mood for a hot espresso or a filling meal, Kareza Café provides a homestyle experience that feels both personal and delicious."
            ],
            distance: 4
        }
    },
    {
        id: 7,
        category: "foods & drinks",
        name: "Midami Sushi",
        image: getImagePath("businesses", "foods-and-drinks", "midami-sushi.jpg"),
        rating: 4.8,
        coordinates: {latitude: 43.932810661695704, longitude: -78.87767386929825},
        details: {
            address: {
                street: "7 Taunton Rd E",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 3T6"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Sunday", time: "11:30 am - 9:00 pm "}
            ],
            phone: "(905) 240-1200",
            website: "https://www.midamisushi.com/",
            description: [
                "Midami Sushi offers a delicious all-you-can-eat Japanese dining experience, known for its wide variety of fresh sushi rolls, sashimi, tempura, and hot dishes. The restaurant is clean, stylish, and welcoming, with an efficient ordering system that makes dining easy and enjoyable. Dishes are presented with care, blending visual appeal with authentic flavors.",
                "Whether you're a seasoned sushi lover or new to Japanese cuisine, Midami’s menu offers something for everyone. Guests especially appreciate the consistency in quality, the friendly service, and the generous portions. It's a go-to spot in Oshawa for casual lunches, dinner dates, or group celebrations."
            ],
            cuisine: "Asian",
            distance: 5
        }
    },
    {
        id: 8,
        category: "attractions",
        name: "Parkwood National Historic Site",
        image: getImagePath("businesses", "attractions", "parkwood-national-historic-site.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.9048955923144, longitude: -78.86670407115119},
        details: {
            address: {
                street: "270 Simcoe St N",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 4T5"
            },
            hours: [
                { days: "Sunday - Friday", time: "10:30 am - 5:00 pm" },
                { days: "Saturday", time: "10:00 am - 5:00 pm" }
            ],
            phone: "(905) 433-4311",
            website: "https://www.parkwoodestate.com/",
            description: [
                "Once the grand residence of Canadian auto baron R.S. McLaughlin, the Parkwood Estate is one of Canada’s finest surviving examples of 20th-century Beaux-Arts architecture. Inside the mansion, visitors can take guided tours that reveal lavish interiors, original furnishings, and stories about the McLaughlin family’s influence on Canadian industry and philanthropy.",
                "Outside, the estate boasts beautifully maintained gardens, fountains, and greenhouses, designed by some of North America's top landscape architects. Parkwood is not only a historic landmark but also a popular filming location for period films and TV shows. Its elegance and preserved detail offer a unique window into the life of Canadian high society during the early 1900s."
            ],
            distance: 3
        }
    },
    {
        id: 9, 
        category: "attractions",
        name: "Oshawa Valley Botanical Gardens",
        image: getImagePath("businesses", "attractions", "oshawa-valley-botanical-gardens.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.900736495392536, longitude: -78.86898162115105},
        details: {
            address: {
                street: "155 Arena St",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1J 4E8"
            },
            hours: [
                { days: "Monday - Sunday", time: "6:00 am - 10:00 pm" }
            ],
            phone: "(905) 436-3311",
            website: "https://www.oshawa.ca/en/parks-recreation-and-culture/oshawa-valley-botanical-gardens.aspx",
            description: [
                "The Oshawa Valley Botanical Gardens are a peaceful urban oasis featuring manicured gardens, winding pathways, and a stunning collection of peonies—one of the largest in North America. The gardens are open year-round and provide a tranquil setting for walking, photography, and quiet reflection.",
                "Each spring, the gardens host the annual Peony Festival, drawing visitors from across Ontario to see the vibrant blooms. Whether you're a plant enthusiast or simply seeking a quiet place to relax, the Botanical Gardens offer a refreshing escape from city life while showcasing Oshawa’s natural beauty and horticultural pride."
            ],
            distance: 5
        }
    },
    {
        id: 10,
        category: "recreation",
        name: "Lakeview Park Beach",
        image: getImagePath("businesses", "recreation", "lakeview-park-beach.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.864977898662424, longitude: -78.82381339866137},
        details: {
            address: {
                street: "1675 Simcoe St S",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 8J7"
            },
            hours: [
                { other: "Open 24/7" }
            ],
            website: "https://www.oshawa.ca/en/parks-recreation-and-culture/lakeview-park-beach.aspx",
            description: [
                "Lakeview Park Beach is one of Oshawa’s most beloved waterfront destinations, located on the scenic shores of Lake Ontario. With its sandy beach, picnic areas, walking trails, and playgrounds, the park is ideal for family outings, sunbathing, and casual strolls along the lakefront.",
                "The beach area is complemented by surrounding parkland that includes historical monuments, sports fields, and ample green space. Whether you're going for a swim, hosting a BBQ, or enjoying a summer sunset, Lakeview Park Beach offers something for everyone to enjoy in a picturesque, well-kept setting."
            ],
            distance: 3
        }
    },
    {
        id: 11,
        category: "retail",
        name: "The 3D Shoppe",
        image: getImagePath("businesses", "retail", "the-3d-shoppe.jpg"),
        rating: 5,
        coordinates: {latitude: 43.8974575534378, longitude: -78.86596637670839},
        details: {
            address: {
                street: "74 King St W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 1A6"
            },
            hours: [
                { days: "Monday - Saturday", time: "10:00 am - 11:00 pm" },
                { days: "Sunday", time: "10:00 am - 6:00 pm" }
            ],
            phone: "(365) 282-1467",
            website: "https://www.the3dshoppe.ca/",
            description: [
                "The 3D Shoppe is a locally owned creative tech studio specializing in custom 3D printing and design. Whether you need a personalized gift, a prototype for an invention, or a one-of-a-kind figurine, they bring digital concepts to life with precision and craftsmanship.",
                "The shop caters to hobbyists, inventors, cosplayers, and small businesses looking for unique, tangible products. With a passion for innovation and attention to detail, The 3D Shoppe turns imagination into reality, serving as a go-to resource for custom projects and creative collaborations."
            ],
            distance: 2
        }
    },
    {
        id: 12,
        category: "retail",
        name: "Addictive Hobbies & Games",
        image: getImagePath("businesses", "retail", "addictive-hobbies-and-games.jpg"),
        rating: 5,
        coordinates: {latitude: 43.8974575534378, longitude: -78.86596637670839},
        details: {
            address: {
                street: "13 King St W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 1A1"
            },
            hours: [
                { days: "Monday - Thursday", time: "10:00 am - 6:00 pm" },
                { days: "Friday", time: "10:00 am - 9:00 pm" },
                { days: "Saturday", time: "10:00 am - 6:00 pm" },
                { days: "Sunday", time: "12:00 pm - 5:00 pm" }
            ],
            phone: "(905) 926-9309",
            website: "https://addictivehobbies.wixsite.com/website",
            description: [
                "Addictive Hobbies and Games is a paradise for collectors, gamers, and hobbyists. Specializing in trading cards, tabletop games, and collectible figures, the store offers a wide selection of popular brands like Magic: The Gathering, Pokémon, and Warhammer, as well as newer indie games.",
                "In addition to merchandise, the store hosts regular gaming events, tournaments, and community nights that bring enthusiasts together. It’s more than just a retail space—it’s a social hub where friendships form over shared interests, strategy, and a love of gaming culture."
            ],
            distance: 1
        }
    },
    {
        id: 13,
        category: "foods & drinks",
        name: "Ayothaya",
        image: getImagePath("businesses", "foods-and-drinks", "ayothaya.jpg"),
        rating: 4.5,
        coordinates: {latitude: 43.9363858863969, longitude: -78.86725342697041},
        details: {
            address: {
                street: "300 Taunton Rd E",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 7T4"
            },
            hours: [
                { days: "Monday - Sunday", time: "11:30 am - 11:00 pm" }
            ],
            phone: "(365) 881-6131",
            website: "https://www.ayothaya.ca/",
            description: [
                "Ayothaya brings the bold and fragrant flavours of Thailand to Oshawa, serving traditional Thai dishes made with fresh herbs, spices, and authentic ingredients. Their menu features beloved classics like Pad Thai, green curry, and Tom Yum soup, each crafted with care and beautifully presented.",
                "The restaurant’s cozy, welcoming environment makes it perfect for a relaxed night out or a flavorful takeout dinner. With generous portions, vegetarian-friendly options, and attentive service, Ayothaya consistently delivers a satisfying dining experience that transports you straight to Southeast Asia."
            ],
            cuisine: "Asian",
            distance: 7
        }
    },
    {
        id: 14,
        category: "foods & drinks",
        name: "Berry Hill Food Co.",
        image: getImagePath("businesses", "foods-and-drinks", "berry-hill-food-co.jpg"),
        rating: 4.5,
        coordinates: {latitude: 43.89714193007639, longitude: -78.86603102697117},
        details: {
            address: {
                street: "82 King St W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 1A6"
            },
            hours: [
                { days: "Tuesday - Thursday", time: "11:00 am - 8:00 pm" },
                { days: "Friday", time: "11:00 am - 9:00 pm "},
                { days: "Saturday", time: "9:30 am - 9:00 pm" },
                { days: "Sunday", time: "9:30 am - 2:30 pm" }
            ],
            phone: "(905) 240-9055",
            website: "https://www.berryhillfoodco.ca/",
            description: [
                "Berry Hill Food Co. is a charming eatery known for its fresh, seasonal menu and cozy, rustic vibe. Specializing in brunch and lunch fare, the restaurant emphasizes locally sourced ingredients and house-made recipes that feel both comforting and elevated.",
                "With standout dishes like eggs benedict, gourmet grilled cheese, and inventive salads, Berry Hill is a favourite spot for casual meetups, special occasions, or weekend indulgence. Friendly staff, artistic plating, and a warm atmosphere make it a true gem in the local food scene."
            ],
            cuisine: "Brunch",
            distance: 5
        }
    },
    {
        id: 15,
        category: "retail",
        name: "FRÈRE DU NORD",
        image: getImagePath("businesses", "retail", "frere-du-nord.jpg"),
        rating: 5,
        coordinates: {latitude: 43.89882028039601, longitude: -78.86452329020018},
        details: {
            address: {
                street: "45 Prince St",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 4C9"
            },
            hours: [
                { days: "Monday - Friday", time: "10:00 am - 5:00 pm" },
                { days: "Saturday", time: "10:00 am - 4:00 pm" },
                { days: "Sunday", time: "Closed" }
            ],
            phone: "(905) 240-6100",
            website: "https://freredunord.com/",
            description: [
                "Frère du Nord is a downtown Oshawa clothing brand and factory offering men’s, women’s, and children’s apparel crafted with Canadian-sourced materials. Their in-house production process—from design to hand-sewing—ensures quality and sustainability, with a focus on reducing waste and ethical manufacturing.",
                "The shop doubles as a retail space and live factory, inviting customers to connect with the craftsmanship behind each piece. Known for its minimalist, durable styles and community involvement, Frère du Nord embodies Canadian heritage with a modern, responsible approach to fashion."
            ],
            distance: 3
        }
    },
    {
        id: 16,
        category: "retail",
        name: "Wilson Furniture",
        image: getImagePath("businesses", "retail", "wilson-furniture.jpg"),
        rating: 4.2,
        coordinates: {latitude: 43.89789168819967, longitude: -78.8654678912639},
        details: {
            address: {
                street: "20 Centre St N",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 4B3"
            },
            hours: [
                { days: "Monday", time: "10:00 am - 5:00 pm" },
                { days: "Tuesday - Wednesday", time: "Closed" },
                { days: "Thursday - Sunday", time: "10:00 am - 5:00 pm" }
            ],
            phone: "(905) 723-2255",
            website: "https://wilsonfurniture.com/",
            description: [
                "Wilson Furniture is a long-standing, family-run business offering high-quality home furnishings with a focus on comfort, style, and customer service. The showroom features everything from classic to contemporary designs, with pieces for every room in the house.",
                "Known for its personalized service and attention to detail, Wilson Furniture helps customers find pieces that truly fit their space and lifestyle. Whether you’re redecorating or furnishing a new home, the store offers expert advice, custom orders, and a commitment to quality that has stood the test of time."
            ],
            distance: 3
        }
    },
    {
        id: 17,
        category: "retail",
        name: "G.A.M.E.S",
        image: getImagePath("businesses", "retail", "games.jpg"),
        rating: 4.3,
        coordinates: {latitude: 43.928660237311014, longitude: -78.87701628834716},
        details: {
            address: {
                street: "1180 Simcoe St N",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 4W8"
            },
            hours: [
                { days: "Monday - Friday", time: "11:00 am - 7:00 pm" },
                { days: "Saturday", time: "11:00 am - 8:00 pm" },
                { days: "Sunday", time: "11:00 am - 6:00 pm" }
            ],
            phone: "(905) 579-7529",
            website: "https://www.facebook.com/gamesaremysource/",
            description: [
                "G.A.M.E.S is a tabletop game store offering a curated selection of board games, miniature figures, role-playing game supplies, and accessories. It caters to both casual players and serious strategists with brands ranging from Dungeons & Dragons to Settlers of Catan and more.",
                "What sets G.A.M.E.S apart is its vibrant community. Regular events, paint nights, and campaign meetups make it a lively gathering space for hobbyists. Whether you're looking to build your collection or join a new campaign, this store offers both the tools and the connections to dive deeper into the world of tabletop gaming."
            ],
            distance: 2
        }
    },
    {
        id: 18,
        category: "foods & drinks",
        name: "Rainbow Sushi",
        image: getImagePath("businesses", "foods-and-drinks", "rainbow-sushi.jpg"),
        rating: 4.2,
        coordinates: {latitude: 43.92880068301918, longitude: -78.87717415951118},
        details: {
            address: {
                street: "1180 Simcoe St E",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 4W8"
            },
            hours: [
                { days: "Monday - Saturday", time: "11:30 am - 10:00 pm" },
                { days: "Sunday", time: "11:30 am - 9:45 pm" }
            ],
            phone: "(905) 240-5666",
            website: "https://rainbowsushi.ca/",
            description: [
                "Rainbow Sushi delivers a vibrant and satisfying sushi experience in a relaxed, modern setting. Offering an extensive all-you-can-eat menu, the restaurant features fresh sashimi, creative specialty rolls, bento boxes, and hot dishes like teriyaki and tempura.",
                "With friendly service and a bright, casual atmosphere, Rainbow Sushi is a great spot for both newcomers to Japanese cuisine and seasoned sushi fans. Guests appreciate the variety, fast ordering system, and consistent quality, making it a go-to for group dinners and casual outings."
            ],
            distance: 1
        }
    },
    {
        id: 19,
        category: "foods & drinks",
        name: "Pho Vietnam 999",
        image: getImagePath("businesses", "foods-and-drinks", "pho-vietnam-999.jpg"),
        rating: 4.4,
        coordinates: {latitude: 43.89476807631895, longitude: -78.87405845819765},
        details: {
            address: {
                street: "299 King St W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1J 2J8"
            },
            hours: [
                { days: "Monday - Thursday", time: "11:00 am - 9:00 pm" },
                { days: "Friday - Saturday", time: "11:00 am - 10:00 pm" },
                { days: "Sunday", time: "11:00 am - 9:00 pm" }
            ],
            phone: "(905) 728-8999",
            website: "https://phovn999osh.com/",
            description: [
                "Pho Vietnam 999 is a cozy, family-run restaurant serving authentic Vietnamese cuisine, with a focus on warm, flavorful bowls of pho. Their signature broth is rich and aromatic, simmered for hours and paired with fresh herbs, rice noodles, and a variety of meat and vegetarian options.",
                "Beyond pho, the menu includes classic Vietnamese dishes like spring rolls, vermicelli bowls, and Bánh mì sandwiches. The generous portions, friendly staff, and home-cooked flavors make Pho Vietnam 999 a beloved local favorite for a comforting, satisfying meal."
            ],
            distance: 1
        }
    },
    {
        id: 20,
        category: "recreation",
        name: "McLaughlin Bay Wildlife Reserve",
        image: getImagePath("businesses", "recreation", "mclaughlin-bay-wildlife-reserve.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.87502057996378, longitude: -78.80173012088909},
        details: {
            address: {
                street: "1908 Colonel Sam Dr",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 8P7"
            },
            hours: [
                { other: "Open 24/7" }
            ],
            website: "https://www.ontariotrails.on.ca/trail/mclaughlin-bay-wildlife-reserve",
            description: [

            ],
            distance: 1
        }
    },
    {
        id: 21,
        category: "foods & drinks",
        name: "MATHILDA's",
        image: getImagePath("businesses", "foods-and-drinks", "mathildas.jpg"),
        rating: 5,
        coordinates: {latitude: 43.89690619063076, longitude: -78.8624599698372},
        details: {
            address: {
                street: "29 Simcoe St S",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 4G1"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Saturday", time: "12:00 pm - 6:00 pm" },
                { days: "Sunday", time: "Closed" }
            ],
            phone: "(365) 688-3663",
            website: "https://www.mathildas.ca/",
            description: [
                "Mathilda’s is a vibrant vegan restaurant in Oshawa known for its diverse menu of plant-based dishes inspired by global flavours. The menu features allergy-friendly options that are gluten-free, oil-free, soy-free, and refined sugar-free, all crafted to be both nutritious and delicious.",
                "With a welcoming atmosphere and creative culinary approach, Mathilda’s offers a unique dining experience that combines health and taste. It’s a popular spot for those seeking wholesome, flavorful vegan meals that nourish the body and delight the palate."
            ],
            cuisine: "Vegan",
            distance: 1
        }
    },
    {
        id: 22,
        category: "foods & drinks",
        name: "Cork & Bean",
        image: getImagePath("businesses", "foods-and-drinks", "cork-and-bean.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.89796532815222, longitude: -78.86342820183978},
        details: {
            address: {
                street: "8 Sincoe St N",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1G 4R8"
            },
            hours: [
                { days: "Monday - Tuesday", time: "8:00 am - 9:00 pm" },
                { days: "Wednesday", time: "8:00 am - 10:00 pm" },
                { days: "Thursday - Saturday", time: "8:00 am - 11:00 pm" },
                { days: "Sunday", time: "8:00 am - 9:00 pm" }
            ],
            phone: "(905) 240-2326",
            website: "https://corkandbean.ca/oshawa/",
            description: [
                "Cork and Bean is a unique blend of coffeehouse, wine bar, and live music venue. By day, it offers expertly crafted espresso drinks and fresh baked goods in a cozy, artsy space; by night, it transforms into a vibrant lounge with wine, local craft beers, and regular acoustic performances.",
                "Whether you’re catching up with friends, attending an open mic night, or sipping wine while working on your laptop, Cork and Bean offers a warm, versatile environment. Its creative spirit and community vibe make it one of downtown Oshawa’s most beloved hangouts."
            ],
            cuisine: "Café",
            distance: 1
        }
    },
    {
        id: 23,
        category: "recreation",
        name: "Treetop Eco-Adventure Park",
        image: getImagePath("businesses", "recreation", "treetop-eco-adventure-park.jpg"),
        rating: 4.6,
        coordinates: {latitude: 44.024022276926146, longitude: -78.92888193199964},
        details: {
            address: {
                street: "53 Snow Ridge Ct",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 0S5"
            },
            hours: [
                { days: "Monday - Sunday", time: "9:00 am - 5:00 pm" }
            ],
            phone: "(905) 655-1113",
            website: "https://treetopeco-adventurepark.com/",
            description: [
                "Treetop Eco-Adventure Park offers a thrilling outdoor experience with zip lines, suspension bridges, and aerial obstacle courses nestled in the forest. Designed for all ages and skill levels, the park encourages physical activity, teamwork, and a spirit of adventure.",
                "Whether you're zipping through the canopy or navigating a rope ladder, the park provides a fun and safe way to explore Oshawa’s natural surroundings. With group packages, birthday options, and night climbs, it’s a favorite destination for families, friends, and outdoor lovers."
            ],
            distance: 1
        }
    },
    {
        id: 24,
        category: "recreation",
        name: "Purple Woods Conservation Area",
        image: getImagePath("businesses", "recreation", "purple-woods-conservation-area.jpg"),
        rating: 4.5,
        coordinates: {latitude: 44.03564238849527, longitude: -78.91728601347626},
        details: {
            address: {
                street: "38 Coates Rd E",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 7K4"
            },
            hours: [
                { other: "Open 24/7 from dawn until dusk" }
            ],
            phone: "(905) 579-0411",
            website: "https://www.cloca.com/purple-woods",
            description: [
                "Purple Woods Conservation Area is a scenic forested space known for its walking trails, sugar bush, and annual Maple Syrup Festival. The site includes a historic sugar shack where visitors can learn about traditional maple syrup production while sampling fresh syrup and treats.",
                "Throughout the year, Purple Woods offers nature hikes, educational programs, and seasonal events that highlight Durham Region’s natural heritage. It’s a peaceful destination that combines environmental learning with the joy of experiencing local traditions."
            ],
            distance: 1
        }
    },
    {
        id: 25,
        category: "foods & drinks",
        name: "Avanti Trattoria",
        image: getImagePath("businesses", "foods-and-drinks", "avanti-trattoria.jpg"),
        rating: 4.5,
        coordinates: {latitude: 43.89777739055635, longitude: -78.86241667485604},
        details: {
            address: {
                street: "17 King St E",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 1A8"
            },
            hours: [
                { days: "Monday - Wednesday", time: "4:00 pm - 9:00 pm" },
                { days: "Thursday", time: "11:30 am - 9:00 pm" },
                { days: "Friday", time: "11:30 am - 10:00 pm" },
                { days: "Saturday", time: "4:00 pm - 10:00 pm" },
                { days: "Sunday", time: "4:00 pm - 9:00 pm "}
            ],
            phone: "(905) 404-8040",
            website: "https://www.avantifood.com/",
            description: [
                "Avanti Trattoria is a family-run Italian restaurant known for its warm atmosphere and authentic cuisine. The menu features handmade pastas, wood-fired pizzas, fresh seafood, and classic Italian desserts, all served in a welcoming, upscale-casual space.",
                "The restaurant’s attentive service and cozy ambiance make it ideal for date nights, family dinners, or special celebrations. With generous portions and bold flavours, Avanti Trattoria offers a true taste of Italy right in downtown Oshawa."
            ],
            cuisine: "Italian",
            distance: 1
        }
    },
    {
        id: 26,
        category: "foods & drinks",
        name: "Spicy Affairs",
        image: getImagePath("businesses", "foods-and-drinks", "spicy-affairs.jpg"),
        rating: 4.2,
        coordinates: {latitude: 43.89713525900057, longitude: -78.8659147201},
        details: {
            address: {
                street: "84 King St W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 8W7"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Thursday", time: "2:00 pm - 9:00 pm" },
                { days: "Friday", time: "11:30 am - 9:00 pm" },
                { days: "Saturday - Sunday", time: "2:00 pm - 9:00 pm" },
            ],
            phone: "(905) 240-8600",
            website: "https://spicyaffairs.ca/",
            description: [
                "Spicy Affairs brings the rich and diverse flavours of Indian cuisine to Oshawa with a menu that includes butter chicken, biryani, tandoori specialties, and vegetarian curries. Dishes are made to order, with customizable spice levels to suit every palate.",
                "The restaurant’s modern interior and attentive service elevate the casual dining experience. Whether dining in or ordering takeout, Spicy Affairs is known for bold tastes, aromatic spices, and consistently satisfying meals."
            ],
            cuisine: "Indian",
            distance: 1
        }
    },
    {
        id: 27,
        category: "retail",
        name: "Doug Wilson Men's Wear",
        image: getImagePath("businesses", "retail", "doug-wilson-mens-wear.jpg"),
        rating: 4.7,
        coordinates: {latitude: 43.89717612317941, longitude: -78.86291978649548},
        details: {
            address: {
                street: "18 Simcoe St S",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 4G2"
            },
            hours: [
                { days: "Monday", time: "Closed" },
                { days: "Tuesday - Friday", time: "10:00 am - 5:00 pm" },
                { days: "Saturday", time: "10:00 am - 4:00 pm" },
                { days: "Sunday", time: "Closed" }
            ],
            phone: "(905) 571-3100",
            website: "https://dougwilsonmenswear.com/",
            description: [
                "Doug Wilson Men’s Wear has been a trusted name in Oshawa for decades, offering classic and contemporary menswear with expert tailoring and personalized service. The store carries suits, business casual pieces, accessories, and outerwear suitable for all occasions.",
                "Known for its professionalism and attention to fit, Doug Wilson Men’s Wear helps customers look sharp and feel confident. Whether you're dressing for a wedding, job interview, or everyday life, the shop delivers timeless style with a local touch."
            ],
            distance: 1
        }
    },
    {
        id: 28,
        category: "foods & drinks",
        name: "Uncle Fluffy",
        image: getImagePath("businesses", "foods-and-drinks", "uncle-fluffy.jpg"),
        rating: 4.6,
        coordinates: {latitude: 43.897407305347414, longitude: -78.8639656343804},
        details: {
            address: {
                street: "17 King St W",
                city: "Oshawa",
                province: "ON",
                postalCode: "L1H 1A1"
            },
            hours: [
                { days: "Monday - Thursday", time: "11:00 am - 9:00 pm" },
                { days: "Friday - Sunday", time: "12:00 pm - 10:00 pm" }
            ],
            phone: "(905) 728-1188",
            website: "https://www.instagram.com/unclefluffycan/",
            description: [
                "Uncle Fluffy is a dessert shop specializing in ultra-light Japanese cheesecakes known for their jiggly texture and melt-in-your-mouth softness. Baked fresh daily, these cheesecakes are less sweet than traditional Western versions, offering a unique and delightful treat.",
                "The shop also features other sweet offerings like mini cakes and beverages, all presented with fun and friendly branding. Whether you're picking up a gift or treating yourself, Uncle Fluffy delivers a whimsical dessert experience that’s hard to resist."
            ],
            cuisine: "Dessert",
            distance: 1
        }
    }
]