import React, { Fragment, useState } from 'react';
import { Hidden, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';
import { getDrawerIcon } from '../../data/screens';

import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles((theme) => ({
    hamburgerIcon: {
        alignSelf: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            alignSelf: 'flex-end',
        }
    },
    drawerList: {
        width: 250
    },
    drawerItem: {
        color: 'grey',
        marginTop: '2%',
        display: 'flex',
        alignItems: 'center',
    },
    highlight: {
        backgroundColor: theme.palette.background.default
    },
    drawerItemText: {
        marginLeft: '-4%',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h5.fontWeight,
    },
}));

const MobileNavigation = (props) => {
    const classes = useStyle();
    const [openDrawer, setOpenDrawer] = useState(false);
    const { setCurrentScreen, currnetScreen, screens } = props;

    const toggleDrawer = () => {
        setOpenDrawer(prevStateOpened => prevStateOpened ? false : true);
    };

    return (
        <Hidden smUp>
            <Fragment>
                <IconButton className={classes.hamburgerIcon} onClick={() => toggleDrawer()}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                    <List className={classes.drawerList}>
                        {screens.map((screen, index) => 
                            <Link 
                                key={screen.concat(index)} 
                                activeClass="active" 
                                className={`screen${index + 1}`} 
                                to={`screen${index + 1}`} 
                                spy={true} 
                                smooth={true} 
                                duration={500}
                                onSetActive={() => {setCurrentScreen(`screen${index + 1}`)}}
                            >
                                <ListItem className={currnetScreen === `screen${index + 1}` ? [classes.drawerItem, classes.highlight].join(' '): classes.drawerItem}>
                                    <ListItemIcon>{getDrawerIcon(index)}</ListItemIcon>
                                    <ListItemText className={classes.drawerItemText}>{screen}</ListItemText>
                                </ListItem>
                            </Link>
                        )}
                    </List>
                </Drawer>
            </Fragment>
        </Hidden>
    )
};

export default MobileNavigation;
