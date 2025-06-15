interface UpcomingEventsProps {
    id: number;
    date: string;
    eventName: string;
    image: string;
}

const imagePath = "/assets/images/upcoming-events-image";

export const upcomingEvents: UpcomingEventsProps[] = [
    {
        id: 1,
        date: "August 30, 2025",
        eventName: "SixQuad Summer League",
        image: `${imagePath}-1.png`
    },
    {
        id: 2,
        date: "Sep 19, 2025",
        eventName: "Skydiggers",
        image: `${imagePath}-2.png`
    },
    {
        id: 3,
        date: "Sep 19 - 20, 2025",
        eventName: "Convergence Festival",
        image: `${imagePath}-3.png`
    }
]