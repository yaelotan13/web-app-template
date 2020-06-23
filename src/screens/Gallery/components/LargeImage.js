import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ImageGallery from 'react-image-gallery';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gallery: {
        outline: 'none'
    }
}));

const LargeImage = (props) => {
    const classes = useStyle();
    const { open, handleClose, images, index } = props;

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
                <ImageGallery originalClass={classes.gallery} items={images} startIndex={index} showThumbnails={false} />
            </Fade>
        </Modal>
    )
};

export default LargeImage;