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
            fontSize: 40,
        }
    },
    rightToLeftHeader: {
        fontFamily: "'Amatic SC', cursive"
    },
    subHeader: {
        marginTop: '6vh',
        textAlign: 'center',
        color: '#546e7a',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    },
    subHeaderRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        marginTop: 2
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
        width: '80vw',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            width: '95vw',
            height: '125vh',
        }
      },
      img: {
          cursor: 'pointer'
      }
}));

const Gallery = (props) => {
    const classes = useStyle();
    const images = getGalleryImages();
    const largeImages = images.reduce((acc, item) => [...acc, { original: item.img }], []);
    const [open, setOpen] = useState(false);
    const [curImageIndex, setCurImageIndex] = useState(0);
    const [t, i18n] = useTranslation();

    const rightToLeft = () => i18n.language === "Hebrew";

    const handleImageClicked = (index) => {
        setCurImageIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.container}>
            <LargeImage open={open} images={largeImages} index={curImageIndex} handleClose={handleClose} />
            <Box className={classes.content}>
                <Typography variant="h1" className={rightToLeft ? [classes.header, classes.rightToLeftHeader].join(' ') : classes.header}>{t("gallery")}</Typography>
                <Typography variant="h6" className={rightToLeft ? [classes.subHeader, classes.subHeaderRightToLeft].join(' ') : classes.subHeader}>{t("gallery-description")}</Typography>
            </Box>
            <Box className={classes.galleryContainer}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {images.map((tile, index) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img className={classes.img} src={tile.img} alt={tile.title} onClick={() => handleImageClicked(index)} />
                        </GridListTile>
                    ))}
                </GridList>
            </Box>
        </Box>
    )
};

export default Gallery;

