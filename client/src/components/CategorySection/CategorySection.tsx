/* --- styling --- */
import "./CategorySection.scss"

/* --- react and react related imports --- */
import { Link } from "react-router-dom"

/* --- components --- */
import Pill from "../Pill/Pill"

/* --- data --- */
import { businessCategories } from "../../data/categoriesList"

export default function CategorySection() {
    return (
        <section className="category">
            <div className="category__wrapper">
                <h3 className="content-heading content-heading--onyx">Category</h3>
                <Link className="category__link" to="/">
                    See all
                </Link>
            </div>

            <div className="category__list-wrapper">
                <ul className="category__list">
                    {businessCategories.map((category) => (
                        <Pill
                            id={category.id}
                            category={category.category}
                            style={{backgroundColor: `${category.backgroundColor}`}}
                            emoji={category.emoji}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}