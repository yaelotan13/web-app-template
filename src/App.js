import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import { createBrowserHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './Routes';

const browserHistory = createBrowserHistory();

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
