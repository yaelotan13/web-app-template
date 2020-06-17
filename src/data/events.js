import businessEvent from '../assets/images/concert.jpg';
import privateEvent from '../assets/images/wedding-event.jpg';

export const getEvents = (t) => 
    [
        {
            id: 0, 
            img: businessEvent,
            alt: "",
            title: t("business-events-title"),
            description: t("business-events-description")
        },
        {
            id: 1, 
            img: privateEvent,
            alt: "",
            title: t("private-events-title"),
            description: t("private-events-description")
        },
    ];