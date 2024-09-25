import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { PecanJuninApp } from './PecanJuninApp.jsx';
import './styless.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PecanJuninApp />
    </BrowserRouter>
  </StrictMode>
)
