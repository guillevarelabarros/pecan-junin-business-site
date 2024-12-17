import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { PecanJuninApp } from './PecanJuninApp.jsx';
import theme from './theme';

import './styless.css'
import { ThemeProvider } from '@emotion/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PecanJuninApp />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
