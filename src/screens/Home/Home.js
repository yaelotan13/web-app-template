import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import { fetchTopics } from '../../store/topics/actions';

const useStyle = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh'
    }
}));

const Home = (props) => {
    const classes = useStyle();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchTopics());
    }, [dispatch]);

    return (
        <Box className={classes.container}>
            Hola!!
        </Box>
    )
};

export default Home;
