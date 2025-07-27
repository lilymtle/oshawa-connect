import "./FAQsPage.scss";
import { FAQsCard } from "../../data/faqsData";
import Card from "../../components/Card/Card";

import { Link } from "react-router-dom";

export default function FAQsPage() {
    return (
        <section className="faqs">
            <div className="faqs__wrapper">
                <h2 className="section-heading">Let's Get Started</h2>

                <p className="faqs__description text">
                    New to Oshawa Connect? Pick a category below to find answers to common questions, or browse all FAQs here.
                </p>

                <div className="faqs__cards">
                    <ul className="faqs__list">
                        {FAQsCard.map((card) => (
                            <li className="faqs__item">
                                <Link to={`/faqs/${card.slug}`}>
                                    <Card
                                        variant="faqs"
                                        key={card.id}
                                        className="faqs__card"
                                    >
                                        <h3 className="card__heading">
                                            {card.category}
                                        </h3>
                                    </Card>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}