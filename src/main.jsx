import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppNavigator from './Navigator/AppNavigator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppNavigator />
  </StrictMode>,
)
