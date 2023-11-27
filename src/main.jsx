import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import ICT from './components/ICT.jsx'
import Elliottwave from './components/Elliottwave.jsx'
import Harmonicpattern from './components/Harmonicpattern.jsx'
import PriceAction from './components/Priceaction.jsx'
import Nav from './components/Nav.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/ict',
    element: <ICT />
  },
  {
    path: '/elliottwave',
    element: <Elliottwave />
  },
  {
    path: '/harmonicpattern',
    element: <Harmonicpattern />
  },
  {
    path: '/priceaction',
    element: <PriceAction />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
