import "./Footer.scss"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__nav">
                <div className="footer__nav-wrapper">
                    <p className="footer__nav-label">
                        Oshawa Connect
                    </p>

                    <ul className="footer__nav-list">
                        <li className="footer__nav-list-item">
                            Home
                        </li>

                        <li className="footer__nav-list-item">
                            About
                        </li>

                        <li className="footer__nav-list-item">
                            FAQs
                        </li>

                        <li className="footer__nav-list-item">
                            Contact
                        </li>
                    </ul>
                </div>

                <div className="footer__nav-wrapper">
                    <p className="footer__nav-label">
                        Explore Oshawa
                    </p>

                    <ul className="footer__nav-list">
                        <li className="footer__nav-list-item">
                            Events
                        </li>

                        <li className="footer__nav-list-item">
                            Community Resources
                        </li>

                        <li className="footer__nav-list-item">
                            Local Businesses
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}