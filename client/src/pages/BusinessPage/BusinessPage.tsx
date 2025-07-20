// styling
import "./BusinessPage.scss"

// components
import CategorySection from "../../components/CategorySection/CategorySection"
import Card from "../../components/Card/Card"
import { localBusinesses } from "../../data/localBusinesses"

export default function BusinessPage() {
    return (
        <section className="business">
            <div className="business__wrapper">
                <h2 className="section-heading">Support Local</h2>

                <p className="business__description">
                    Is there a local business missing and you would love to see here? 
                    You can submit a recommendation by visiting this page. {/* add link later */}
                </p>
            </div>

            <CategorySection />

            <section className="business__cards">
                <ul className="business__cards-list">
                    {localBusinesses.map((business) => (
                        <li className="business__list-item">
                            <article className="business__card">
                                <Card
                                    variant="business"
                                    className="business__card"
                                    style={{
                                        backgroundImage: `url(${business.image})`,
                                        backgroundSize: "cover"
                                    }}
                                    title={business.name}
                                    category={business.category}
                                    rating={business.rating}
                                    cuisine={business.details.cuisine}
                                    distance={business.details.distance}
                                    priceLevel={business.details.priceLevel}
                                />
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}