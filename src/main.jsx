import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../css/new.css';
import '../css/bootstrap.min.css';
import '../css/custom.css';
import '../css/loaders.css';
import '../css/swiper.min.css';
import '../css/animate.min.css';
import '../css/nivo-lightbox.css';
import '../css/nivo_themes/default/default.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
