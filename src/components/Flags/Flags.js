import React from 'react';
import { Box, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import i18next from 'i18next';

import hebrew from '../../assets/icons/hebrew.png';
import english from '../../assets/icons/english.png';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        position: 'absolute',
        right: 16,
        top: 12
    },
    mobile: {
        position: 'static',
        margin: '5vh auto'
    },
    avatar: {
        width: 30,
        height: 30,
        cursor: 'pointer'
    }
}));

const Flags = (props) => {
    const classes = useStyle();
    const { mobile } = props;

    const handleFlagClicked = (lan) => {
        i18next.changeLanguage(lan);
    };

    return (
        <Box className={mobile ? [classes.container, classes.mobile].join(' ') : classes.container}>
            <IconButton onClick={() => handleFlagClicked('Hebrew')}>
                <Avatar src={hebrew} className={classes.avatar} />
            </IconButton>
            <IconButton onClick={() => handleFlagClicked('English')}>
                <Avatar src={english} className={classes.avatar} />
            </IconButton>
        </Box>
    )
};

export default Flags;
