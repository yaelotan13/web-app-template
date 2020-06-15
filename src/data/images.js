import tuli1 from '../assets/images/tuli1.jpg';
import tuli2 from '../assets/images/tuli2.jpg';
import tuli3 from '../assets/images/tuli3.jpg';

import img1 from '../assets/images/beach.jpg';
import img2 from '../assets/images/birthday.jpg';
import img3 from '../assets/images/cocus.jpg';
import img4 from '../assets/images/lights.jpg';
import img5 from '../assets/images/party.jpg';
import img6 from '../assets/images/wedding4.jpg';
import img7 from '../assets/images/party3.jpg';
import img8 from '../assets/images/party5.jpg';
import img9 from '../assets/images/party6.jpg';
import img10 from '../assets/images/party9.jpg';
import img11 from '../assets/images/wedding1.jpg';

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