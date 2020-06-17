import businessEvent from '../assets/images/concert.jpg';
import privateEvent from '../assets/images/wedding-event.jpg';

const eventsData = [
    {
        id: 0, 
        img: businessEvent,
        alt: "",
        title: "Business Events",
        description: "A paragraph not too long saying that Tuli can orgenize many types of events like city events, sport events, compenies events and also mentioning that these events are the best"
    },
    {
        id: 1, 
        img: privateEvent,
        alt: "",
        title: "Private Events",
        description: "Another short paragraph saying that Tuli can also plan weddings, birthdays, baby showers, bar mitzva, bat mitzva that would be speical for your loved one"
    },
];

export const getEvents = () => eventsData;