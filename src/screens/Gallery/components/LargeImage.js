import React from 'react';
import { Box, Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            height: '60vh'
        }
    },
    closeIcon: {
        width: '4vw',
        height: '4vh',
        position: 'absolute',
        right: -8,
        top: 2,
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            right: 8,
            top: 4,
        }
    },
    img: {
        width: '60vw',
        height: '60vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            height: '60vh'
        }
    },
    arrowsContainer: {
        width: '100%',
        height: '60vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 6,
        left: 0
    },
    arrowIcon: {
        width: 40,
        height: 40,
        cursor: 'pointer'
    }
}));

const LargeImage = (props) => {
    const classes = useStyle();
    const { img, open, handleClose, getNextImage, getPrevImage } = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.container}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <CloseIcon className={classes.closeIcon} onClick={handleClose} />
                    <Box className={classes.img} style={{ backgroundImage: `url(${img})`}} />
                    <Box className={classes.arrowsContainer}>
                        <ArrowBackIosIcon className={classes.arrowIcon} onClick={getPrevImage} />
                        <ArrowForwardIosIcon className={classes.arrowIcon} onClick={getNextImage} />
                    </Box>
                </div>
            </Fade>
        </Modal>
    )
};

export default LargeImage;