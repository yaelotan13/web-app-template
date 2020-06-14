import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-bootstrap/Carousel';

import { getHomeCarouselImages } from '../../../data/images';

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
                {getHomeCarouselImages().map(image => 
                    <Carousel.Item className={classes.imageContainer} key={image.id}>
                        <img src={image.src} alt={image.alt} />
                    </Carousel.Item>
                )}
            </Carousel>
        </Box>
    )
};

export default Images;
