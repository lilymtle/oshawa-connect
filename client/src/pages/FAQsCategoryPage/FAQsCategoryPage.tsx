/* --- styling --- */
import "./FAQsCategoryPage.scss";

/* -- react imports --*/
import { Link, useNavigate, useParams } from "react-router-dom";

/* --- components --- */

import { Divider } from "@mui/material";

/* --- data --- */
import { FAQsCard, FAQs } from "../../data/faqsData";

export default function FAQsCategoryPage() {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();

    const handleBackClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(-1);
    };

    const matchedCategory = FAQsCard.find(
        (card) => card.slug === category
    );

    const filteredFAQs = FAQs.filter(
        (faq) => faq.category === matchedCategory?.category
    );

    return (
        <section className="faqs__category">
            <a className="faqs__link faqs__link--back" href="#" onClick={handleBackClick}>
                <img
                    className="faqs__icon faqs__icon--chevron"
                    src="/assets/icons/chevron-left.svg"
                    alt="Left Chevron"
                />
                Back
            </a>

            <div className="faqs__wrapper">
                <h2 className="section-heading">
                    { matchedCategory?.category || "Category Not Found" }
                </h2>

                <p className="faqs__description">
                    { matchedCategory?.description }
                </p>
            </div>

            <div className="faqs__nav">
                <h3 className="content-heading content-heading--onyx">On This Page</h3>

                <ul className="faqs__list faqs__list--nav">
                    {filteredFAQs.map((faq) =>
                        <li key={faq.id} className="faqs__item">
                            <a className="faqs__link" href={`#faq-${faq.id}`}>
                                {faq.question}
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            <Divider />

            <ul className="faqs__list">
                {filteredFAQs.map((faq) => (
                    <li key={faq.id} className="faqs__item" id={`faq-${faq.id}`}>
                        <p className="faqs__question">
                            {faq.question}
                        </p>

                        <p className="faqs__answer">
                            {faq.answer}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
