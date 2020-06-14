import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh'
    }
}));

const Home = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            Hola!!
        </Box>
    )
};

export default Home;
