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
            fontSize: 40
        }
    },
    rightToLeftMainHeader: {
        fontFamily: "'Amatic SC', cursive"
    },
    subHeader: {
        textAlign: 'center',
        marginTop: '0',
        color: '#546e7a',
    },
    subHeaderRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        marginTop: 0
    },
}));

const Clients = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();

    const rightToLeft = () => i18n.language === "Hebrew";

    return (
        <Box>
            <Box className={classes.headerContainer}>
                <Typography variant="h1" className={rightToLeft ? [classes.mainHeader, classes.rightToLeftMainHeader].join(' ') : classes.mainHeader}>{t("clients")}</Typography>
                <Typography variant="subtitle1" className={rightToLeft ? [classes.subHeader, classes.subHeaderRightToLeft].join(' ') : classes.subHeader}>{t("clients-description")}</Typography>
            </Box>
            <ClientList />
        </Box>
    )
};

export default Clients;
