import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import { ThemeProvider } from './context/ThemeContext' // ThemeProvider for the whole app

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
