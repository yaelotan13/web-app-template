import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { ClientList } from './components';

const useStyle = makeStyles(theme => ({
    headerContainer: {
        padding: '15vh 5vw 0 5vw'
    },
    mainHeader: {
        textAlign: 'center'
    },
    subHeader: {
        textAlign: 'center',
        marginTop: '2vh',
    }
}));

const Clients = (props) => {
    const classes = useStyle();

    return (
        <Box>
            <Box className={classes.headerContainer}>
                <Typography variant="h2" className={classes.mainHeader}>Clients</Typography>
                <Typography variant="subtitle1" className={classes.subHeader}>
                    Some text about my clients that are the best and very known. 
                    <br />
                    My work with them produced the best events ever.
                </Typography>
            </Box>
            <ClientList />
        </Box>
    )
};

export default Clients;
