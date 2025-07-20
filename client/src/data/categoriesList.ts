interface CategoryProps {
    id: number;
    category: string;
    emoji: "🏛️" | "🍽️" | "🛍️"
    backgroundColor: string;
}

export const businessCategories: CategoryProps[] = [
        {
            id: 1,
            category: "Attractions",
            emoji: "🏛️",
            backgroundColor: "#C3E7FA",
        },
        {
            id: 2,
            category: "Foods & Drinks",
            emoji: "🍽️",
            backgroundColor: "#F4E5B5"
        },
        {
            id: 3,
            category: "Retail",
            emoji: "🛍️",
            backgroundColor: "#D6BADA"
        }
    ]
