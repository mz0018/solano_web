import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'

const BusinessRegistration = lazy(() => import('./pages/BusinessRegistration/BusinessRegistration.jsx'))
const ApplicationIncentives = lazy(() => import('./pages/ApplicationIncentives/ApplicationIncentives.jsx'))
const CostDoingBusiness = lazy(() => import('./pages/CostDoingBusiness/CostDoingBusiness.jsx'))

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/business", element: <BusinessRegistration /> },
  { path: "/cost", element: <CostDoingBusiness /> }, 
  { path: "/application", element: <ApplicationIncentives /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
