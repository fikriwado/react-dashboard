import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/_global.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, Notification } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: 'notification',
    element: <Notification />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
