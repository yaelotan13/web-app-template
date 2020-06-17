import React, { useState } from 'react';
import { Box, GridList, GridListTile, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getGalleryImages } from '../../data/images';
import { LargeImage } from './components';

const useStyle = makeStyles(theme => ({
    content: {
        margin: '4vh 0',
        padding: '0 4vw'
    },
    header: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 32,
        }
    },
    subHeader: {
        marginTop: '3vh',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    },
    galleryContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '8vh'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        width: '70vw',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            width: '95vw',
        }
      },
      img: {
          cursor: 'pointer'
      }
}));

const Gallery = (props) => {
    const classes = useStyle();
    const images = getGalleryImages();
    const [open, setOpen] = useState(false);
    const [curImage, setCurImage] = useState(null);

    const handleImageClicked = (image) => {
        setCurImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.container}>
            <LargeImage open={open} handleClose={handleClose} img={curImage} />
            <Box className={classes.content}>
                <Typography variant="h1" className={classes.header}>Gallery</Typography>
                <Typography variant="h6" className={classes.subHeader}>Desctiption about the images that are below, saying nice things</Typography>
            </Box>
            <Box className={classes.galleryContainer}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {images.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img className={classes.img} src={tile.img} alt={tile.title} onClick={() => handleImageClicked(tile.img)} />
                        </GridListTile>
                    ))}
                </GridList>
            </Box>
        </Box>
    )
};

export default Gallery;

