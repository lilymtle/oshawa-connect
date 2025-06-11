import { Divider, IconButton } from "@mui/material";
import "./Header.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const headerNavLinks = () => {
        const homeAboutLinks = navLinks.slice(0, 2);
        const exploreOshawaLinks = navLinks.slice(4);
        return homeAboutLinks.concat(exploreOshawaLinks);
    }

    return (
        <header className="header">
            <img
                className="logo"
                src="/assets/images/logo.png"
                alt="Oshawa Connect logo"
            />

            <div className="header__mobile-menu">
                <IconButton onClick={(e) => {
                    setIsOpen(!isOpen);
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </div>            

            { isOpen && 
                <nav 
                    className="header__mobile-nav"
                >
                    <ul className="header__mobile-nav-list">
                        {headerNavLinks().map((link) => (
                            <li className="header__mobile-nav-list-item">
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav> 
            }
        </header>
    );
}