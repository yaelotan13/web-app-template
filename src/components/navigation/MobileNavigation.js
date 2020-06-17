import React, { Fragment, useState } from 'react';
import { Hidden, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';
import { getDrawerIcon } from '../../data/screens';

import Flags from '../Flags';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles((theme) => ({
    hamburgerIcon: {
        alignSelf: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            alignSelf: 'flex-end',
        }
    },
    hamburgerIconLeft: {
        [theme.breakpoints.down('xs')]: {
            alignSelf: 'flex-start',
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
    drawerItemRightToLeft: {
        flexDirection: 'row-reverse',
        textAlign: 'right',
        marginLeft: '6vw',
        paddingRight: 0
    },
    highlight: {
        backgroundColor: theme.palette.background.default
    },
    drawerItemText: {
        marginLeft: '-4%',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h5.fontWeight,
    },
    drawerItemTextRightToLeft: {
        marginRight: 12
    }
}));

const MobileNavigation = (props) => {
    const classes = useStyle();
    const [openDrawer, setOpenDrawer] = useState(false);
    const { setCurrentScreen, currnetScreen, screens, rightToLeft } = props;

    const toggleDrawer = () => {
        setOpenDrawer(prevStateOpened => prevStateOpened ? false : true);
    };

    const getDrawerItemStyle = (index) => {
        let style = [classes.drawerItem];

        if (rightToLeft) {
            style.push(classes.drawerItemRightToLeft);
        }

        if (currnetScreen === `screen${index + 1}`) {
            style.push(classes.highlight)
        }
        
        return style;
    }

    return (
        <Hidden smUp>
            <Fragment>
                <IconButton 
                    className={rightToLeft ? [classes.hamburgerIcon, classes.hamburgerIconLeft].join(' ') : classes.hamburgerIcon} 
                    onClick={() => toggleDrawer()}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer 
                    open={openDrawer} 
                    onClose={() => setOpenDrawer(false)}
                    anchor={rightToLeft ? 'right' : 'left'}
                >
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
                                <ListItem className={getDrawerItemStyle(index + 1)}>
                                    <ListItemIcon>{getDrawerIcon(index)}</ListItemIcon>
                                    <ListItemText className={rightToLeft ? [classes.drawerItemText, classes.drawerItemTextRightToLeft] : classes.drawerItemText}>{screen}</ListItemText>
                                </ListItem>
                            </Link>
                        )}
                    </List>
                    <Flags mobile rightToLeft />
                </Drawer>
            </Fragment>
        </Hidden>
    )
};

export default MobileNavigation;
