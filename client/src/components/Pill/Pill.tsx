import "./Pill.scss"

interface CategoryProps {
    id: number;
    category: string;
    emoji: "🏛️" | "🍽️" | "🛍️"
    backgroundColor: string;
}

export default function Pill() {
    const categories: CategoryProps[] = [
        {
            id: 1,
            category: "Attractions",
            emoji: "🏛️",
            backgroundColor: "#C3E7FA",
        },
        {
            id: 2,
            category: "Foods & Drinks",
            emoji: "🏛️",
            backgroundColor: "#F4E5B5"
        },
        {
            id: 3,
            category: "Retail",
            emoji: "🛍️",
            backgroundColor: "#D6BADA"
        }
    ]

    return (
        <ul className="category__list">
            {categories.map((category) => (
                <div className="pill">
                    <p className="pill__category">
                        {category.category}
                    </p>
                </div>
            ))}
        </ul>
    )
}