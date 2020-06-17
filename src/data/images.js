import tuli1 from '../assets/images/events/table2.jpg';
import tuli2 from '../assets/images/events/kids3.jpeg';
import tuli3 from '../assets/images/events/volley-crowd.jpeg';

import img1 from '../assets/images/events/kids1.jpeg';
import img2 from '../assets/images/events/people.jpg';
import img3 from '../assets/images/events/pillows.jpg';
import img4 from '../assets/images/events/kids2.jpeg';
import img5 from '../assets/images/events/rabin.jpeg';
import img6 from '../assets/images/events/footy2.jpeg';
import img7 from '../assets/images/events/tour-crowd.jpeg';
import img8 from '../assets/images/events/wedding.jpg';
import img9 from '../assets/images/events/volley2.jpeg';
import img10 from '../assets/images/events/show.jpg';
import img11 from '../assets/images/events/table2.jpg';

const homeCarouselImages = [
    {
        id: 1,
        src: tuli1,
        alt: ""
    },
    {
        id: 2,
        src: tuli2,
        alt: ""
    },
    {
        id: 3,
        src: tuli3,
        alt: ""
    }
];

const galleryImages = [
    {
        img: img1,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img2,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img4,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img5,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img6,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img7,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img8,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img9,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img10,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img11,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
];

export const getHomeCarouselImages = () => homeCarouselImages;
export const getGalleryImages = () => galleryImages;