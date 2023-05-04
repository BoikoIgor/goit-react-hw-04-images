import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#212121',
    white: '#f9f9f9',
    accent: 'orangered',
    error: 'red',
  },
  radiuses: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
