import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { ClientList } from './components';

const useStyle = makeStyles(theme => ({
    headerContainer: {
        padding: '15vh 5vw 0 5vw'
    },
    mainHeader: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 32
        }
    },
    subHeader: {
        textAlign: 'center',
        marginTop: '2vh',
    }
}));

const Clients = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();

    return (
        <Box>
            <Box className={classes.headerContainer}>
                <Typography variant="h1" className={classes.mainHeader}>{t("clients")}</Typography>
                <Typography variant="subtitle1" className={classes.subHeader}>{t("clients-description")}</Typography>
            </Box>
            <ClientList />
        </Box>
    )
};

export default Clients;
