import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    client: {
        width: 140,
        height: 60,
        marginRight: '1vw',
        marginTop: '3vh',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
}));

const Client = (props) => {
    const classes = useStyle();
    const { img, alt } = props;

    return (
        // <Avatar className={classes.client} alt={alt} src={img} variant="square" />
        <Box className={classes.client} alt={alt} style={{ backgroundImage: `url(${img})`}}/>
    )
};

export default Client;
