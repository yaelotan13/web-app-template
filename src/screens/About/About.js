import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
        fontSize: 40,
        marginBottom: '5vh',
        color: '#363636',
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
            marginBottom: '2vh',
        }
    },
    content: {
        lineHeight: 2,
        [theme.breakpoints.down('xs')]: {
            lineHeight: 1.7,
        }
    },
    sideColoredBox: {
        marginTop: '10vh',
        width: '6vw',
        height: '35vh',
        backgroundColor: '#EB9FC0',
        position: 'absolute',
        left: '67vw',
        zIndex: 2,
        [theme.breakpoints.down('sm')]: {
            height: '30vh',
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
    },
    eventsSubTitle: {
        textAlign: 'center',
        padding: '0 5vw'
    }
}));

const About = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.coloredBox}>
                <Typography variant="h1" className={classes.header}>About Me</Typography>
                <Typography variant="subtitle1" className={classes.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Box>
            <Box className={classes.sideColoredBox} />
            <Box className={classes.eventsContainer}>
                <Typography variant="h4" className={classes.title}>Event Types</Typography>
                <Typography variant="subtitle1" color="textSecondary" className={classes.eventsSubTitle}>My events are tailored maid to suit your needs, whether it's a business event or a personal event</Typography>
                <EventTypes />
            </Box>
        </Box>
    )
};

export default About;
