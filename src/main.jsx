import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './App.css'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css' // AOS styles

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-back',
  once: true})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)