/* --- styling --- */
import "./CategorySection.scss"

/* --- react and react related imports --- */
import { Link } from "react-router-dom"

/* --- components --- */
import Pill from "../Pill/Pill"

/* --- data --- */
import { businessCategories } from "../../data/categoriesList"

/* --- util functions --- */
import capitalizeWords from "../../utils/capitalizeWords";

/* --- types --- */
interface CategorySectionProps {
    onCategoryClick: (category: string) => void;
    onSortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedCategory?: string | null;
    sortBy: string | null;
};

export default function CategorySection({ onCategoryClick, onSortByChange, selectedCategory, sortBy }: CategorySectionProps) {
    return (
        <section className="category">
            <div className="category__wrapper--row">
                <h2 className="section-heading">Category</h2>
                <Link className="category__link" to="/">
                    See all
                </Link>
            </div>

            <div className="category__list-wrapper">                
                <ul className="category__list">
                    {businessCategories.map((category) => (
                        <li key={category.id} className="category__list-item">
                            <Pill
                                id={category.id}
                                category={category.category}
                                style={{
                                    backgroundColor: `${category.color}`,
                                    borderColor: `${category.color}`,
                                }}
                                emoji={category.emoji}
                                onClick={() => onCategoryClick(category.category)}
                                selected={selectedCategory === category.category.toLowerCase()}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="category__wrapper--column">
                <h3 className="content-heading content-heading--onyx">
                    {selectedCategory ? capitalizeWords(selectedCategory) : "All Categories"}
                </h3>
                
                <div className="category__sorting-wrapper">
                    <label className="category__sorting" htmlFor="sort-select">
                        Sort by:
                        <select id="sort-select" value={sortBy || ""} onChange={onSortByChange} name="selectedOption" className="category__sorting-menu">
                            <option value="name-asc">Name (A-Z)</option>
                            <option value="name-desc">Name (Z-A)</option>
                            <option value="dist-asc">Distance (Low-High)</option>
                            <option value="dist-desc">Distance (High-Low)</option>
                        </select>
                    </label>
                </div>
        </div>
        </section>
    )
}