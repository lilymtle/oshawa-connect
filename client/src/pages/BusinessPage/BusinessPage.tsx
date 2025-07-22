/* --- styling --- */
import "./BusinessPage.scss"

/* --- components --- */
import CategorySection from "../../components/CategorySection/CategorySection"
import Card from "../../components/Card/Card"
import Pagination from "../../components/Pagination/Pagination"

/* --- react and react related imports --- */
import { useState } from "react"

/* --- data --- */
import { localBusinesses } from "../../data/localBusinesses"

export default function BusinessPage() {
    /* --- pill category navigation --- */
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const filteredBusinesses = selectedCategory ? localBusinesses.filter((business) => business.category === selectedCategory) : localBusinesses
    
    const handleCategoryClick = (category: string) => {
        const lowerCaseCategory = category.toLowerCase();
        setSelectedCategory((prev) => (prev === lowerCaseCategory ? null : lowerCaseCategory))
    };

    /* --- pagination --- */
    const postsPerPage: number = 5;
    const totalPages: number = Math.ceil(filteredBusinesses.length / postsPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexofFirstPost: number = indexOfLastPost - postsPerPage;
    const currentBusinesses = filteredBusinesses.slice(indexofFirstPost, indexOfLastPost);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (
        <section className="business">
            <div className="business__wrapper">
                <h2 className="section-heading">Support Local</h2>

                <p className="business__description">
                    Is there a local business missing and you would love to see here? 
                    You can submit a recommendation by visiting this page. {/* add link later */}
                </p>
            </div>

            <CategorySection 
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick}
            />

            <section className="business__cards">
                <ul className="business__cards-list">
                    {currentBusinesses.map((business) => (
                        <li key={business.id} className="business__list-item">
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

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                prevPage={handlePrev}
                nextPage={handleNext}
            />
        </section>
    )
}