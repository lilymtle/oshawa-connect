/* --- styling --- */
import "./BackLink.scss"

/* --- react and react related imports --- */
import { useNavigate } from "react-router-dom";

export default function BackLink() {
    const navigate = useNavigate();

    const handleBackClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(-1);
    };

    return (
        <a className="back-link" href="#" onClick={handleBackClick}>

            <img
            className="back-link__icon"
            src="/assets/icons/chevron-left.svg"
            alt="Left Chevron"
            />

            Back
        </a>
    )
}