import React from 'react';
import { Hidden, Toolbar, Button, AppBar, Slide, useScrollTrigger, Box } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        marginTop: '22vh'
    },
    navBar: {
        justifyContent: 'center',
        boxShadow: 'none'
    },
    navBarItem: {
        marginLeft: '1vw',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h2.fontWeight,
    },
    highlightNavBar: {
        borderTop: '2px solid black',
        borderRadius: 0
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const DesktopNavigation = (props) => {
    const classes = useStyle();
    const { screens, setCurrentScreen, currnetScreen } = props;

    return (
        <Hidden xsDown>
            <Box>
            {/* <HideOnScroll> */}
                <AppBar color="transparent" className={classes.appBar}>
                    <Toolbar className={classes.navBar}>
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
                                <Button 
                                    className={currnetScreen === `screen${index + 1}` ? [classes.navBarItem, classes.highlightNavBar].join(' ') : classes.navBarItem}
                                >
                                    {screen}
                                </Button>
                            </Link>
                        )}
                    </Toolbar>
                </AppBar>
            {/* </HideOnScroll> */}
            </Box>
        </Hidden>
    );
};

export default DesktopNavigation;