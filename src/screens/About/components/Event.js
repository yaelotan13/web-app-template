import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyle = makeStyles(theme => ({
    container: {
        width: '30vw',
        marginRight: '5vw',
        [theme.breakpoints.down('sm')]: {
            width: '70vw',
            marginRight: 0,
            marginTop: '4vh'
        }
    },
    img: {
        height: 180
    },
    rightToLeftHeader: {
        fontFamily: "'Alef', sans-serif",
        fontSize: 22
    },
    description: {
        marginTop: '1vh',
        fontSize: 14,
        color: '#8D8D8D'
    },
    descriptionRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        marginTop: '1vw',
        fontSize: 16,
        textAlign: 'center',
    },
}));

const Event = (props) => {
    const classes = useStyle();
    const { img, alt, title, description, isRightToLeft } = props;

    return (
        <ScrollAnimation 
            animateIn='fadeInUp'
            delay={400}
            initiallyVisible={false}
            animateOnce={true}
        >
            <Card className={classes.container}>
                <CardMedia
                    className={classes.img}
                    image={img}
                    alt={alt}
                />
                <CardContent>
                    <Typography 
                        variant="h5" 
                        component="h2" 
                        align="center" 
                        className={isRightToLeft ? classes.rightToLeftHeader : null}
                    >
                        {title}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p" 
                        className={isRightToLeft ? [classes.descriptionRightToLeft] : classes.description}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </ScrollAnimation>
    )
};

export default Event;
