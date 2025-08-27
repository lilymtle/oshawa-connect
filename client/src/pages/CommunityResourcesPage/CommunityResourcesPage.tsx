/* --- components --- */
import CategorySection from "../../components/CategorySection/CategorySection";

/* --- data --- */
import { communityResourceCategories } from "../../data/categoriesList";

/* --- styling --- */
import "./CommunityResourcesPage.scss";



export default function CommunityResourcesPage() {
    return (
        <section className="community-resources">
            <div className="community-resources__wrapper">
                <h2 className="section-heading">Find Support</h2>

                <p className="community-resources__description">
                    Find local support programs, services, and organizations that help keep our community connected and cared for.
                </p>
            </div>

            <CategorySection
                categories={communityResourceCategories}
            />
        </section>
    )
}