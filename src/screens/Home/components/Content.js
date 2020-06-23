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
        // width: '35vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            top: '28vh',
        }
    },
    header: {
        fontSize: 100,
        color: 'white',
        fontFamily: "'Amatic SC', cursive",
        [theme.breakpoints.down('xs')]: {
            fontSize: 56,
            textAlign: 'center',
            padding: '0 2vw'
        }
    },
    subHeader: {
        marginTop: '4vh',
        fontSize: 30,
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
            marginTop: '1vh',
        }
    },
}));

const Content = (props) => {
    const classes = useStyle();
    const { header, subHeader } = props;

    return (
        <>
            {/* <Hidden smUp> */}
                <Box className={classes.content}>
                    <Typography variant="h1" className={classes.header}>{header}</Typography>
                    <Typography variant="h5" className={classes.subHeader}>{subHeader}</Typography>
                </Box>
            {/* </Hidden> */}
            {/* <Hidden xsDown>
                <Box className={classes.content}>
                    <Typography variant="h1" className={classes.header}>{header}</Typography>
                    <Typography variant="h5" className={classes.subHeader}>{subHeader}</Typography>
                </Box>
            </Hidden> */}
        </>
    )
};

export default Content;
