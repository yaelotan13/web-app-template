import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import { createBrowserHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './Routes';

const browserHistory = createBrowserHistory();

function App() {
  const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
  const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

  const matcher = window.matchMedia('(prefers-color-scheme: dark)');
  matcher.addListener(onUpdate);
  onUpdate();

  function onUpdate() {
    if (matcher.matches) {
      lightSchemeIcon.remove();
      document.head.append(darkSchemeIcon);
    } else {
      document.head.append(lightSchemeIcon);
      darkSchemeIcon.remove();
    }
  }

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
