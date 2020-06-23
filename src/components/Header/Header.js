import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2vh 4vh',
    },
    header: {
        margin: '5vh 0 1vh 0',
        textAlign: 'center',
        fontFamily: "'Amatic SC', cursive",
        [theme.breakpoints.down('sm')]: {
            fontSize: 40
        }
    },
    subHeader: {
        textAlign: 'center',
        padding: '0 5vw',
        marginTop: '1vh',
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const { title, subTitle } = props;

    return (
        <Box className={classes.container}>
            <ScrollAnimation 
                animateIn='fadeInUp'
                initiallyVisible={false}
                animateOnce={true}
            >
                <Typography variant="h1" className={classes.header}>{title}</Typography>
                <Typography variant="subtitle1" color="textSecondary" className={classes.subHeader}>{subTitle}</Typography>
            </ScrollAnimation>
        </Box>
    )
};

export default Header;
