export interface CategoryProps {
    id: number;
    category: string;
    emoji: string;
    color: string;
}

export const businessCategories: CategoryProps[] = [
    {
        id: 1,
        category: "Attractions",
        emoji: "🏛️",
        color: "#C3E7FA",
    },
    {
        id: 2,
        category: "Foods & Drinks",
        emoji: "🍽️",
        color: "#F4E5B5"
    },
    {
        id: 3,
        category: "Recreation",
        emoji: "🎯",
        color: "#B2E2CC"
    },
    {
        id: 4,
        category: "Retail",
        emoji: "🛍️",
        color: "#D6BADA"
    }
]

export const communityResourceCategories: CategoryProps[] = [
    {
        id: 1,
        category: "Employment",
        emoji: "💼",
        color: "#C3E7FA"
    },
    {
        id: 2,
        category: "Health",
        emoji: "🌱",
        color: "#F4E5B5"
    },
    {
        id: 3,
        category: "Housing",
        emoji: "🏠",
        color: "#B2E2CC"
    }
    
]