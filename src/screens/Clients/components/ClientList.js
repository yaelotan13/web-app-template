import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getClients } from '../../../data/clients';
import Client from './Client';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '80vw',
        marginLeft: '10vw',
        justifyContent: 'space-around',
        marginTop: '6vh',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw'
        },
        [theme.breakpoints.down('xs')]: {
            width: '80vw',
            marginLeft: '10vw',
        }
    }
}));

const ClientList = (props) => {
    const classes = useStyle();
    const clients = getClients();

    return (
        <Box className={classes.container}>
            {clients.map(client => 
                <Client key={client.id} alt={client.alt} img={client.img} />
            )}
        </Box>
    )
};

export default ClientList;
