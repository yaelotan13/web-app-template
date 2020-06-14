import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/icons/logo.png';

const useStyle = makeStyles(theme => ({
    container: {
        marginBottom: '10vh',
        width: '100vw',
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: '4vh',
        height: '100%',
        width: '30vw',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
}));

const Logo = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.logo} />
        </Box>
    )
};

export default Logo;
