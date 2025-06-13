import React from "react";
import EventIcon from "@mui/icons-material/Event";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PeopleIcon from "@mui/icons-material/People";
import { People } from "@mui/icons-material";

interface DiscoverCardProps {
    id: number;
    icon: React.ElementType
    title: string;
    description: string;
}

export const discoverCards: DiscoverCardProps[] = [
    {
        id: 1,
        icon: EventIcon,
    title: "Events",
        description: "Discover exciting local events, festivals, and activities happening in Oshawa.",
    },
    {
        id: 2,
        icon: LocalDiningIcon,
        title: "Local Businesses",
        description: "Connect with and support Oshawa’s thriving small businesses and entrepreneurs.",
    },
    {
        id: 3,
        icon: PeopleIcon,
        title: "Community Resources",
        description: "Access essential services, programs, and support to strengthen our community.",
    },
];
