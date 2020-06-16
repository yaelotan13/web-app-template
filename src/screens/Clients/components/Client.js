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
        }
    }
}));

const Client = (props) => {
    const classes = useStyle();
    const { img, alt } = props;

    return (
        <Box className={classes.client} alt={alt} style={{ backgroundImage: `url(${img})`}}/>
    )
};

export default Client;
