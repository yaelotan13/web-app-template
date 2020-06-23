import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header';
import { ClientList } from './components';

const useStyle = makeStyles(theme => ({
    container: {
        padding: '15vh 5vw 0 5vw'
    },
}));

const Clients = (props) => {
    const classes = useStyle();
    const [t] = useTranslation();

    return (
        <Box className={classes.container}>
            <Header title={t("clients")} subTitle={t("clients-description")} />
            <ClientList />
        </Box>
    )
};

export default Clients;
