import React from 'react';
import { Box, GridList, GridListTile, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getGalleryImages } from '../../data/images';

const useStyle = makeStyles(theme => ({
    content: {
        margin: '4vh 0',
        padding: '0 4vw'
    },
    header: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        }
    },
    subHeader: {
        marginTop: '1vh',
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
}));

const Gallery = (props) => {
    const classes = useStyle();
    const images = getGalleryImages();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Typography variant="h3" className={classes.header}>A Tast Of My Events</Typography>
                <Typography variant="h6" className={classes.subHeader}>Desctiption about the images that are below, saying nice things</Typography>
            </Box>
            <Box className={classes.galleryContainer}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {images.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </Box>
        </Box>
    )
};

export default Gallery;

