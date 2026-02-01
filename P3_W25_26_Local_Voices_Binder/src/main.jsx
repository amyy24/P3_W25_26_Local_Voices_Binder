import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './index.css';

// Fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontFamily: 'Inter' },
    h2: { fontFamily: 'Inter' },
    h3: { fontFamily: 'Inter' },
    h4: { fontFamily: 'Inter' },
    h5: { fontFamily: 'Inter' },
    h6: { fontFamily: 'Inter', fontSize: '1.25rem' },
    title: { fontFamily: 'Inter', fontSize: '2rem',fontWeight: 500,   },
    subtitle1: { fontFamily: 'Inter', fontSize: '1.25rem' },
    subtitle2: { fontFamily: 'Inter', fontSize: '1rem' },
    body1: { fontFamily: 'Inter',fontSize: '1rem' },
    body2: { fontFamily: 'Inter',fontSize: '0.90rem', },
    body3: { fontFamily: 'Inter',fontSize: '0.75rem', },
    button: { fontFamily: 'Inter',fontSize: '1rem' },
    caption: { fontFamily: 'Inter' },
    overline: { fontFamily: 'Inter' },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
