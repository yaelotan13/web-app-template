import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import flower from '../../assets/icons/flower.png';

const useStyle = makeStyles(theme => ({
    footer: {
        width: '100vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '2vh',
        backgroundColor: '#F6F6F6',
    },
    content: {
        color: '#525252'
    },
    flower: {
        backgroundImage: `url(${flower})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 30,
        height: 30,
        marginLeft: 8
    }
}));

const Footer = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.footer}>
            <Typography variant="h6" className={classes.content}>
                Build by Yael 
            </Typography>
            <Box className={classes.flower} />
        </Box>
    )
};

export default Footer;
