import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globle.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theam-provider/TheamProvider.tsx'
import { Toaster } from "@/components/ui/toaster"
import LoadingProvider from './context/LoadingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <LoadingProvider>
     <App />
     </LoadingProvider>
     <Toaster/>
     </ThemeProvider>
     </BrowserRouter>
   
  </React.StrictMode>,
)
