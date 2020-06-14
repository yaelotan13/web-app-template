import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import tuli from '../../../assets/images/tuli1.jpg';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '70vw',
        marginTop: '12vh',
    },
    image: {
        height: '100%',
        backgroundImage: `url(${tuli})`
    }
}));

const Images = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.image} />
        </Box>
    )
};

export default Images;
