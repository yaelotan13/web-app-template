import React, { useState } from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { getScreens } from '../../data/screens';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const useStyle = makeStyles((theme) => ({
    navBarContainer: {
        marginLeft: '1%',
        display: 'flex',
        boxShadow: 'none',
    },
}));

const Navigation = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();
    const [currnetScreen, setCurrentScreen] = useState('screen1');
    const screens = getScreens(t);

    return (
        <AppBar className={classes.navBarContainer} color="transparent">
            <DesktopNavigation 
                screens={screens} 
                setCurrentScreen={setCurrentScreen} 
                currnetScreen={currnetScreen} 
                rightToLeft={i18n.language === 'Hebrew'}
            />
            <MobileNavigation 
                screens={screens} 
                setCurrentScreen={setCurrentScreen} 
                currnetScreen={currnetScreen} 
                rightToLeft={i18n.language === 'Hebrew'}
            />
        </AppBar>
    )
};

export default Navigation;
