import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import './index.css'
import style from "./main.module.css"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
 




)
