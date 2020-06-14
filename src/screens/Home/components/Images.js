import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-bootstrap/Carousel';

import tuli1 from '../../../assets/images/tuli1.jpg';
import tuli2 from '../../../assets/images/tuli2.jpg';
import tuli3 from '../../../assets/images/tuli3.jpg';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        marginTop: '12vh',
    },
    carousel: {
        width: '100%',
        display: 'flex',
        paddingTop: '18vh',
    },
    imageContainer: {
        height: '90vh',
        width: '60vw'
    },
}));

const Images = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Carousel interval="3000" pause="false" className={classes.carousel}>
                <Carousel.Item className={classes.imageContainer}>
                    <img src={tuli1} alt="" />
                </Carousel.Item>
                <Carousel.Item className={classes.imageContainer}>
                    <img src={tuli2} alt="" />
                </Carousel.Item>
                <Carousel.Item className={classes.imageContainer}>
                    <img src={tuli3} alt="" />
                </Carousel.Item>
            </Carousel>
        </Box>
    )
};

export default Images;
