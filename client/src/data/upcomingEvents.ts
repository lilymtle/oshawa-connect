interface UpcomingEventsProps {
    id: number;
    date: string;
    name: string;
    image: string;
}

const imagePath = "/assets/images/upcoming-event-image";

export const upcomingEvents: UpcomingEventsProps[] = [
    {
        id: 1,
        date: "Aug 30, 2025",
        name: "SixQuad Summer League",
        image: `${imagePath}-1.png`
    },
    {
        id: 2,
        date: "Sep 19, 2025",
        name: "Skydiggers",
        image: `${imagePath}-2.png`
    },
    {
        id: 3,
        date: "Sep 19 - 20, 2025",
        name: "Convergence Festival",
        image: `${imagePath}-3.png`
    }
]