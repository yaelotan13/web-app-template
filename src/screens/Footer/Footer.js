import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    footer: {
        width: '100vw',
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20vh'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '40vh'
        },
    },
    content: {
        color: '#525252'
    }
}));

const Footer = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.footer}>
            <Typography variant="h6" className={classes.content}>
                Made with 💛 by Yael
            </Typography>
        </Box>
    )
};

export default Footer;
