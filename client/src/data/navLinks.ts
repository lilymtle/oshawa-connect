interface NavLinkProps {
    name: string;
    path: string;
}

export const navLinks: NavLinkProps[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
    { name: "Events", path: "/" },
    { name: "Community Resources", path: "/" },
    { name: "Local Businesses", path: "/business" }
]