import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();