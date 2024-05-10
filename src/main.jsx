import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routers/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider, { AuthContext } from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </React.StrictMode>,
)
