import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getClients } from '../../../data/clients';
import Client from './Client';

const useStyle = makeStyles(theme => ({
    importantClientscontainer: {
        display: 'flex',
        width: '60vw',
        justifyContent: 'center',
        marginLeft: '15vw',
        marginTop: '4vh',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw'
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '60vw',
        marginLeft: '15vw',
        justifyContent: 'space-around',
        marginTop: '4vh',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw'
        },
    }
}));

const ClientList = (props) => {
    const classes = useStyle();
    const clients = getClients();
    const importantClients = clients.filter(client => client.important === true);
    const otherClients = clients.filter(client => client.important !== true);

    return (
        <>
            <Box className={classes.importantClientscontainer}>
                {importantClients.map(client => 
                    <Client key={client.id} alt={client.alt} img={client.img} important={client.important} />
                )}
            </Box>
            <Box className={classes.container}>
                {otherClients.map(client => 
                    <Client key={client.id} alt={client.alt} img={client.img} important={client.important} />
                )}
            </Box>
        </>
    )
};

export default ClientList;
