import React from 'react';
import { Box, Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        position: 'relative'
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
        width: '50vw',
        height: '50vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
    }
}));

const LargeImage = (props) => {
    const classes = useStyle();
    const { img, open, handleClose } = props;

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
                </div>
            </Fade>
        </Modal>
    )
};

export default LargeImage;