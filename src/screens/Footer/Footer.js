import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import flower from '../../assets/icons/flower.png';

const useStyle = makeStyles(theme => ({
    footer: {
        width: '100vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10vh',
        paddingBottom: '2vh',
        backgroundColor: '#F6F6F6',
    },
    rightToLeft: {
        flexDirection: 'row-reverse'
    },
    content: {
        color: '#525252'
    },
    rightToLeftContent: {
        fontFamily: "'Amatic SC', cursive",
        fontSize: 20,
        fontWeight: 700
    },
    flower: {
        backgroundImage: `url(${flower})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 28,
        height: 28,
        marginLeft: 8,
        marginRight: 8
    },
}));

const Footer = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();
    
    const rightToLeft = () => i18n.language === "Hebrew";
    
    return (
        <Box className={rightToLeft ? [classes.footer, classes.rightToLeft].join(' ') : classes.footer}>
            <Typography variant="h6" className={rightToLeft ? [classes.content, classes.rightToLeftContent].join(' ') : classes.content}>{t("built-by-yael")}</Typography>
            <Box className={classes.flower} />
        </Box>
    )
};

export default Footer;
