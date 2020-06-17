import React, { useState } from 'react';
import { Box, GridList, GridListTile, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

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
    rightToLeftHeader: {
        fontFamily: "'Amatic SC', cursive"
    },
    subHeader: {
        marginTop: '3vh',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    },
    subHeaderRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        marginTop: 4
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
    const [t, i18n] = useTranslation();

    const rightToLeft = () => i18n.language === "Hebrew";

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
                <Typography variant="h1" className={rightToLeft ? [classes.header, classes.rightToLeftHeader].join(' ') : classes.header}>{t("gallery")}</Typography>
                <Typography variant="h6" className={rightToLeft ? [classes.subHeader, classes.subHeaderRightToLeft].join(' ') : classes.subHeader}>{t("gallery-description")}</Typography>
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

