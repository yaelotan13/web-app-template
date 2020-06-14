import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Navigation from '../../components/navigation';
import Logo from '../../components/Logo';
import { Images } from './components';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh'
    },
    headerContainer: {
        position: 'fixed',
        display: 'felx',
        flexDirection: 'column',
        alignItems: 'space-around',
        marginTop: '-12vh',
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        zIndex: 10,
        [theme.breakpoints.down('xs')]: {
            marginTop: '-25vh', 
        }
    }
}));

const Home = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.headerContainer}>
                <Logo />
                <Navigation />
            </Box>
            <Images />
        </Box>
    )
};

export default Home;
