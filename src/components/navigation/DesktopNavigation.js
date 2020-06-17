import React from 'react';
import { Hidden, Toolbar, Button, AppBar, Box } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

import Flags from '../Flags';

const useStyle = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        marginTop: '20vh',
        position: 'relative',
    },
    navBar: {
        justifyContent: 'center',
        boxShadow: 'none',
        display: 'flex',
    },
    rightToLeft: {
        flexDirection: 'row-reverse'
    },
    navBarItem: {
        marginLeft: '1vw',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
    },
    itemRightToLeft: {
        fontFamily: "'Amatic SC', sans-serif",
        fontSize: 22,
        fontWeight: 700
    },
    highlightNavBar: {
        borderTop: '2px solid black',
        borderRadius: 0
    },
}));

const DesktopNavigation = (props) => {
    const classes = useStyle();
    const { screens, setCurrentScreen, currnetScreen, rightToLeft } = props;

    const getItemStyle = (index) => {
        let style = [classes.navBarItem];

        if (currnetScreen === `screen${index}`) {
            style.push(classes.highlightNavBar);
        }

        if (rightToLeft) {
            style.push(classes.itemRightToLeft)
        }
        console.log(style);
        return style;
    };

    return (
        <Hidden xsDown>
            <Box>
                <AppBar color="transparent" className={classes.appBar}>
                    <Toolbar className={rightToLeft? [classes.navBar, classes.rightToLeft] : classes.navBar}>
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
                                <Button className={getItemStyle(index + 1)}>
                                    {screen}
                                </Button>
                            </Link>
                        )}
                    </Toolbar>
                </AppBar>
                <Box className={classes.flagsContainer}>
                    <Flags />
                </Box>
            </Box>
        </Hidden>
    );
};

export default DesktopNavigation;