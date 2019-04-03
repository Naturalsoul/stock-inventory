import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, cyan } from '@material-ui/core/colors';
import './App.css';

// Routes
import Routes from './routes/routes';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: cyan,
  },
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);
