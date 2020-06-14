import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import { browserHistory } from './store';
import { Router, BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
