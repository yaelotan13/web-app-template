import React from 'react';
import { Box, Modal, Backdrop, Fade, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ImageGallery from 'react-image-gallery';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
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
        right: -1,
        top: 2,
        zIndex: 9,
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
            width: '85vw',
            height: '60vh'
        }
    },
    arrowsContainer: {
        width: '74vw',
        height: '60vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 6,
        left: '-7vw',
        [theme.breakpoints.down('sm')]: {
            width: '96vw',
        }
    },
    iconButton: {
        padding: 8,
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.44)'
        },
    },
    arrowIcon: {
        width: 45,
        height: 45,
        cursor: 'pointer',
        color: 'white',
        padding: 9
    },
    gallery: {
        outline: 'none'
    }
}));

const LargeImage = (props) => {
    const classes = useStyle();
    const { img, open, handleClose, getNextImage, getPrevImage, images, index } = props;

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
                {/* <div className={classes.paper}>
                    <CloseIcon className={classes.closeIcon} onClick={handleClose} />
                    <Box className={classes.img} style={{ backgroundImage: `url(${img})`}} />
                    <Box className={classes.arrowsContainer}>
                        <IconButton onClick={getPrevImage} className={classes.iconButton}>
                            <ArrowBackIosIcon className={classes.arrowIcon} />
                        </IconButton>
                        <IconButton onClick={getNextImage} className={classes.iconButton}>
                            <ArrowForwardIosIcon className={classes.arrowIcon} />
                        </IconButton>
                    </Box>
                </div> */}
                <ImageGallery originalClass={classes.gallery} items={images} startIndex={index} showThumbnails={false} />
            </Fade>
        </Modal>
    )
};

export default LargeImage;