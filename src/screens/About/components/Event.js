import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    description: {
        marginTop: '1vh',
        textAlign: 'center',
        fontSize: 14
    }
}));

const Event = (props) => {
    const classes = useStyle();
    const { img, alt, title, description, opposite } = props;

    return (
        <Card className={classes.container}>
            <CardMedia
                className={classes.img}
                image={img}
                alt={alt}
            />
            <CardContent>
                <Typography variant="h5" component="h2" align="center">{title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default Event;
