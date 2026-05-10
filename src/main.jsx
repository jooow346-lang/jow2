import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FoodPage from './components/food.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodPage />
  </StrictMode>,
)
