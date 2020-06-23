import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

import Content from './Content';
import { getHomeCarouselImages } from '../../../data/images';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        marginTop: '12vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
        }
    },
    carousel: {
        zIndex: 8,
        width: '100%',
        display: 'flex',
        paddingTop: '20vh',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '0vh',
        }
    },
    imageContainer: {
        height: '70vh',
        width: '100vw',
        [theme.breakpoints.down('xs')]: {
            height: '70vh',
            marginTop: '20vh',
        }
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 0.6,
        filter: 'brightness(50%)',
        [theme.breakpoints.down('xs')]: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }
    }
}));

const Images = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();

    return (
        <Box className={classes.container}>
            <Content header={t("about-me-title")} subHeader={t("sub-title")} />
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
