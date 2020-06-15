import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

import Navigation from '../../components/navigation';
import Logo from '../../components/Logo';
import { Images } from './components';
import About from '../About';
import Gallery from '../Gallery';
import Contact from '../Contact';
import Footer from '../Footer';

const useStyle = makeStyles(theme => ({
    headerContainer: {
        position: 'fixed',
        display: 'felx',
        flexDirection: 'column',
        alignItems: 'space-around',
        marginTop: '-12vh',
        borderBottom: '1px solid #E6E6E6',
        zIndex: 10,
        backgroundColor: 'white',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-15vh', 
        }
    },
}));

const Home = (props) => {
    const classes = useStyle();

    return (
        <Box>
            <Element name="screen1" className="element">
                <Box className={classes.firstScreen}>
                    <Box className={classes.headerContainer}>
                        <Logo />
                        <Navigation />
                    </Box>
                    <Images />
                </Box>
            </Element>
            <Element name="screen2" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.secondScreen}>
                        <About />
                    </Box>
                </ScrollAnimation>
            </Element>
            <Element name="screen3" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.thirdScreen}>
                        <Gallery />
                    </Box>
                </ScrollAnimation>
            </Element>
            <Element name="screen4" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.thirdScreen}>
                        <Contact />
                    </Box>
                </ScrollAnimation>
            </Element>
            <Footer />
        </Box>
    )
};

export default Home;
