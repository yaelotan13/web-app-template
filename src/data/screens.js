import React from 'react';
import { Box } from '@material-ui/core';

import home from '../assets/icons/home.png';
import about from '../assets/icons/about.png';
import gallery from '../assets/icons/gallery.png';
import contact from '../assets/icons/contact.png';

const screens = ['HOME', 'ABOUT', 'GALLERY', 'CONTACT ME'];

const drawerIcons = [home, about, gallery, contact];

export const getDrawerIcon = (index) => {
    const iconStyle = {
        width: 30,
        height: 30,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    switch (index) {
        case 0: {
            return <Box style={{
                ...iconStyle, 
                backgroundImage: `url(${drawerIcons[0]})`
            }} />
        }
        case 1: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${drawerIcons[1]})` 
            }} />
        }
        case 2: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${drawerIcons[2]})` 
            }} />
        }
        case 3: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${drawerIcons[3]})` 
            }} />
        }
        default: {
            return <Box style={{
                ...iconStyle,
                backgroundImage: `url(${drawerIcons[4]})` 
            }} />
        }
    }
};

export const getScreens = () => screens;