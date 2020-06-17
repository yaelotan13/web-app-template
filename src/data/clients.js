import client1 from '../assets/images/clients/atarim.png';
import client2 from '../assets/images/clients/bat-yam.png';
import client3 from '../assets/images/clients/beach-volleyball.jpg';
import client4 from '../assets/images/clients/british-embassy.jpg';
import client5 from '../assets/images/clients/client1.jpeg';
import client6 from '../assets/images/clients/client2.jpeg';
import client7 from '../assets/images/clients/client3.jpeg';
import client8 from '../assets/images/clients/digitel.jpg';
import client9 from '../assets/images/clients/footy.jpeg';
import client10 from '../assets/images/clients/liveperson.jpg';
import client11 from '../assets/images/clients/mexico-embassy.jpeg';
import client12 from '../assets/images/clients/tlv.jpg';


const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12];

const clientsData = [
    { 
        id: 0,
        img: clients[0],
        alt: ""
    },
    { 
        id: 1,
        img: clients[1],
        alt: ""
    },
    { 
        id: 2,
        img: clients[2],
        alt: ""
    },
    { 
        id: 3,
        img: clients[3],
        alt: ""
    },
    { 
        id: 4,
        img: clients[4],
        alt: ""
    },
    { 
        id: 5,
        img: clients[5],
        alt: ""
    },
    { 
        id: 6,
        img: clients[6],
        alt: ""
    },
    { 
        id: 7,
        img: clients[7],
        alt: ""
    },
    { 
        id: 8,
        img: clients[8],
        alt: ""
    },
    { 
        id: 9,
        img: clients[9],
        alt: ""
    },
    { 
        id: 10,
        img: clients[10],
        alt: ""
    },
    { 
        id: 11,
        img: clients[11],
        alt: ""
    },
];

export const getClients = () => clientsData;
