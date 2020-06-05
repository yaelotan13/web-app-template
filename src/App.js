import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux'
import theme from './theme/index';
import { browserHistory } from './store';
import { Router, BrowserRouter } from 'react-router-dom';

import { store } from './store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
