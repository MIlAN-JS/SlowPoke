import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import router from './app/app.routes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

  
)
