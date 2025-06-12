import { IconButton } from "@mui/material";
import "./Header.scss"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const headerNavLinks = () => {
        const homeAboutLinks = navLinks.slice(0, 2);
        const exploreOshawaLinks = navLinks.slice(4);
        return homeAboutLinks.concat(exploreOshawaLinks);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 500); 
    };

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
                    className={`header__mobile-nav ${isOpen ? (isClosing ? "close" : "open") : "hidden"}`}
                >
                    <div className="header__mobile-nav-close">
                        <IconButton onClick={() => handleClose()}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    
                    <div className="header__mobile-nav-wrapper">
                        <ul className="header__mobile-nav-list">
                            {headerNavLinks().map((link) => (
                                <li className="header__mobile-nav-list-item">
                                    <Link to={link.path} onClick={() => setIsOpen(!isOpen)}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav> 
            }
        </header>
    );
}