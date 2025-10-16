import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AppLoading from './components/AppLoading'
import './App.css'
import { CartProvider } from './context/CartContext'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css' // AOS styles

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-back',
  once: true})

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <CartProvider>
        <App />
        {isLoading && <AppLoading onComplete={handleLoadingComplete} />}
      </CartProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
