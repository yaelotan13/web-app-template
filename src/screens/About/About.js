import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';

import { EventTypes } from './components';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '8vh 0',
    },
    coloredBox: {
        backgroundColor: '#E6E6E6',
        width: '60vw',
        marginLeft: '10vw',
        padding: '5vw',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw'
        },
    },
    header: {
        textAlign: 'center',
        color: '#363636',
        marginBottom: '1vh',
        [theme.breakpoints.down('xs')]: {
            fontSize: 40,
            marginBottom: 0,
        }
    },
    rightToLeftHeader: {
        fontFamily: "'Amatic SC', cursive"
    },
    subHeader: {
        textAlign: 'center',
        marginBottom: '5vh',
        fontWeight: 700,
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2vh',
            fontSize: 18
        }
    },
    subHeaderRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        fontWeight: 700
    },
    content: {
        lineHeight: 2,
        color: '#415158',
        [theme.breakpoints.down('xs')]: {
            lineHeight: 1.7,
        }
    },
    contentRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        textAlign: 'center',
        paddingRight: '2vw'
    },
    sideColoredBox: {
        marginTop: '10vh',
        width: '6vw',
        height: '45vh',
        backgroundColor: '#C15986',
        position: 'absolute',
        left: '67vw',
        zIndex: 2,
        [theme.breakpoints.down('sm')]: {
            height: '40vh',
            left: '90vw',
        },
        [theme.breakpoints.down('xs')]: {
            left: '92vw',
        },
    },
    eventsContainer: {
        backgroundColor: '#F6F6F6',
        marginTop: '10vh',
    },
    title: {
        margin: '5vh 0 1vh 0',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 40
        }
    },
    eventsSubTitle: {
        textAlign: 'center',
        padding: '0 5vw',
        marginTop: '1vh',
    }
}));

const About = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();
    
    const isRightToLeft = () => i18n.language === "Hebrew";

    return (
        <Box className={classes.container}>
            <ScrollAnimation 
                animateIn='fadeInUp'
                delay={800}
                initiallyVisible={false}
                animateOnce={true}
            >
                <Box className={classes.coloredBox}>
                    <Typography variant="h1" className={isRightToLeft ? [classes.header, classes.rightToLeftHeader].join(' ') : classes.header}>{t("about-me-title")}</Typography>
                    <Typography variant="h4" className={isRightToLeft ? [classes.subHeader, classes.subHeaderRightToLeft].join(' ') : classes.subHeader}>{t("sub-title")}</Typography>
                    <Typography variant="subtitle1" className={isRightToLeft ? [classes.content, classes.contentRightToLeft].join(' ') : classes.content}>{t("about-me-body")}</Typography>
                </Box>
            </ScrollAnimation>
            <Box className={classes.sideColoredBox} />
            <Box className={classes.eventsContainer}>
                <Typography variant="h1" className={isRightToLeft ? [classes.title, classes.rightToLeftHeader].join(' ') : classes.title}>{t("event-types-title")}</Typography>
                <Typography variant="subtitle1" color="textSecondary" className={isRightToLeft ? [classes.eventsSubTitle, classes.contentRightToLeft].join(' ') : classes.eventsSubTitle}>{t("event-types-description")}</Typography>
                <EventTypes isRightToLeft />
            </Box>
        </Box>   
    )
};

export default About;
