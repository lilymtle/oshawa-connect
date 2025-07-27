/* --- components --- */
import BackLink from "../../components/BackLink/BackLink";
import Map from "../../components/Map/Map";
import StarRating from "../../components/StarRating/StarRating";

/* --- data --- */
import { BusinessDetailProps, localBusinesses } from "../../data/localBusinesses";

/* --- react and react related imports --- */
import { useParams } from "react-router-dom"

/* --- styling --- */
import "./BusinessDetailsPage.scss"

export default function BusinessDetailsPage() {
    const { id } = useParams();
    const businessDetails = localBusinesses.find(business => business.id === Number(id))

    if (!businessDetails || !businessDetails.details) {
        return <p>Business not found.</p>;
    }

    const businessDetailsHeading = [
        {
            heading: "Address",
            emoji: "📍",
        },
        {
            heading: "Hours",
            emoji: "🕒"
        },
        {
            heading: "Phone",
            emoji: "📞"
        },
        {
            heading: "Website",
            emoji: "🌐"
        },
        {
            heading: "Description",
            emoji: "📋"
        }
    ];

    const renderBusinessDetails = (key: string, detail: BusinessDetailProps) => {        
        switch(key) {
            case "address":
                return (
                    <div className="business-details__wrapper">
                        <p className="business-details__text">{detail.address.street}</p>
                        <p className="business-details__text">{detail.address.city} {detail.address.province} {detail.address.postalCode}</p>
                    </div>
                );
            case "hours":
                return (
                    <>
                        {detail.hours.map((hour, index) => (
                            <div className="business-details__wrapper" key={index}>
                                <p className="business-details__text">{hour.days}</p>
                                <p className="business-details__text">{hour.time}</p>
                            </div>
                        ))}
                    </>
                );
            case "phone":
                return (
                    <p className="business-details__text">
                        {detail.phone}
                    </p>
                );
            case "website":
                return (
                    <a className="business-details__link" href={detail.website} target="_blank">{detail.website}</a>
                );
            case "description":
                return (
                    <div className="business-details__description-box">
                        {detail.description.map((description, index) => (
                            <p key={index} className="business-details__text">{description}</p>
                        ))}
                    </div>
                )
            default:
                return (
                    <p className="business-details__text">
                        Details not found.
                    </p>
                )
        }
    }

    return (
        <section className="business-details">
            <BackLink />

            <h2 className="section-heading">{businessDetails?.name}</h2>
            <StarRating rating={businessDetails?.rating ?? 0} />

            <img
                className="business-details__image"
                src={businessDetails?.image}
                alt=""
            />
            
            <ul className="business-details__list">
                {businessDetailsHeading.map((heading) => (
                    <li key={heading.heading} className="business-details__list-item">
                        <h3 className="content-heading content-heading--onyx">{heading.emoji} {heading.heading}</h3>

                        {renderBusinessDetails(heading.heading.toLowerCase(), businessDetails.details)}
                    </li>
                ))}
            </ul>

            <div className="business-details__map">
                <Map 
                    latLon={businessDetails.latLon}
                    name={businessDetails.name}
                    street={businessDetails.details.address.street}
                    city={businessDetails.details.address.city}
                    province={businessDetails.details.address.province}
                    postalCode={businessDetails.details.address.postalCode}
                />
            </div>

        </section>
    )
}