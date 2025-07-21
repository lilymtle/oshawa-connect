import "./Footer.scss";

import { navLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <div className="footer__wrapper">
                    <p className="footer__label">
                        Oshawa Connect
                    </p>

                    <ul className="footer__list">
                        {navLinks.slice(0,4).map((link) => (
                            <li key={link.name} className="footer__item">
                                <Link to={link.path} className="footer__link">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="footer__wrapper">
                    <p className="footer__label">
                        Explore Oshawa
                    </p>

                    <ul className="footer__list">
                        {navLinks.slice(4).map((link) => (
                            <li key={link.name} className="footer__item">
                                <Link to={link.path} className="footer__link">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}