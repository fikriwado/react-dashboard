import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/_global.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Dashboard,
  Notification,
  Schedule,
  Users,
  Wallet,
  Setting
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: 'notification',
    element: <Notification />
  },
  {
    path: 'schedule',
    element: <Schedule />
  },
  {
    path: 'users',
    element: <Users />
  },
  {
    path: 'wallet',
    element: <Wallet />
  },
  {
    path: 'setting',
    element: <Setting />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
