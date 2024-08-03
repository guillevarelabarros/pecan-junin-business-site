import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './styles.css'
import { PecanApp } from './PecanApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PecanApp />
    </BrowserRouter>
  </React.StrictMode>,
)
