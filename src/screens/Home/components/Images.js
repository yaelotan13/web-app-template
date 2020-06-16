import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-bootstrap/Carousel';

import { getHomeCarouselImages } from '../../../data/images';
import Content from './Content';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        marginTop: '12vh',
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
        }
    },
    carousel: {
        zIndex: 8,
        width: '100%',
        display: 'flex',
        paddingTop: '18vh',
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        }
    },
    imageContainer: {
        height: '70vh',
        width: '100vw',
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
            marginTop: '-2vh'
        }
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 0.8,
        [theme.breakpoints.down('xs')]: {
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }
    }
}));

const Images = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Content header="Tulis Event" subHeader="Planning your event in the most personal, thoughtful and beautiful way" />
            <Carousel interval="4000" pause="false" className={classes.carousel}>
                {getHomeCarouselImages().map(image => 
                    <Carousel.Item className={classes.imageContainer} key={image.id}>
                        <Box style={{ backgroundImage: `url(${image.src})`}} alt={image.alt} className={classes.image} />
                    </Carousel.Item>
                )}
            </Carousel>
        </Box>
    )
};

export default Images;
