import React from 'react';
import { Box, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    mobileContent: {
        width: '100%',
        height: '40vh',
        backgroundColor: '#FAFAFA',
        padding: '18vh 4vw 0 4vw'
    },
    content: {
        zIndex: 9,
        position: 'absolute',
        top: '45vh',
        color: 'black',
        left: '10vw',
        width: '30vw'
    },
    header: {
        fontSize: 60,
        [theme.breakpoints.down('xs')]: {
            fontSize: 26,
            textAlign: 'center'
        }
    },
    subHeader: {
        marginTop: '3vh',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            textAlign: 'center',
            marginTop: 0,
        }
    },
}));

const Content = (props) => {
    const classes = useStyle();
    const { header, subHeader } = props;

    return (
        <>
            <Hidden smUp>
                <Box className={classes.mobileContent}>
                    <Typography variant="h1" className={classes.header}>{header}</Typography>
                    <Typography variant="h5" className={classes.subHeader}>{subHeader}</Typography>
                </Box>
            </Hidden>
            <Hidden xsDown>
                <Box className={classes.content}>
                    <Typography variant="h1" className={classes.header}>{header}</Typography>
                    <Typography variant="h5" className={classes.subHeader}>{subHeader}</Typography>
                </Box>
            </Hidden>
        </>
    )
};

export default Content;
