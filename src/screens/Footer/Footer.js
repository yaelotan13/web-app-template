import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import yaelLogo from '../../assets/icons/yael-logo.jpg';

const useStyle = makeStyles(theme => ({
    footer: {
        width: '100vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2vh',
        backgroundColor: 'white',
    },
    rightToLeft: {
        flexDirection: 'row-reverse'
    },
    content: {
        color: '#525252'
    },
    rightToLeftContent: {
        fontFamily: "'Amatic SC', cursive",
        fontSize: 18,
        fontWeight: 700
    },
    icon: {
        backgroundImage: `url(${yaelLogo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 400,
        height: 70,
        marginBottom: '2vh'
    },
}));

const Footer = (props) => {
    const classes = useStyle();
    
    return (
        <Box className={classes.footer}>
            <Box className={classes.icon} />
        </Box>
    )
};

export default Footer;
