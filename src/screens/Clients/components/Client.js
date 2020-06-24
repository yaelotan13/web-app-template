import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    client: {
        width: 140,
        height: 60,
        marginRight: '1vw',
        marginTop: '3vh',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'height 0.4s',
        '&:hover': {
            height: 80,
        },
        [theme.breakpoints.down('sm')]: {
            width: 100,
            height: 40,
            marginTop: '2vh',
            marginRight: 8,
        },
        [theme.breakpoints.down('xs')]: {
            width: 80,
            height: 40,
            marginTop: '2vh',
            marginRight: 8,
        },
    },
    importantClient: {
        width: 170,
        height: 90,
        '&:hover': {
            height: 100,
        },
        [theme.breakpoints.down('sm')]: {
            width: 120,
            height: 60,
        },
        [theme.breakpoints.down('xs')]: {
            width: 100,
            height: 60,
        },
    }
}));

const Client = (props) => {
    const classes = useStyle();
    const { img, alt, important } = props;

    return (
        <Box 
            className={important ? [classes.client, classes.importantClient].join(' ') : classes.client} 
            alt={alt} 
            style={{ backgroundImage: `url(${img})`}}
        />
    )
};

export default Client;
