import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rabbite from './components/rabbite.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rabbite />
  </StrictMode>,
)
