import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router = {router} />
  </React.StrictMode>,
)
