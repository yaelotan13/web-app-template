import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

import { getEvents } from '../../../data/events';
import Event from './Event';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        width: '100vw',
        padding: '6vh 0 10vh 10vw',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3vh 0'
        }
    }
}));

const EventTypes = (props) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();
    const events = getEvents(t);

    return (
        <Box className={classes.container}>
            {events.map(event => 
                <Event 
                    key={event.id} 
                    img={event.img} 
                    alt={event.alt} 
                    title={event.title} 
                    description={event.description} 
                />
            )}
        </Box>
    )
};

export default EventTypes;