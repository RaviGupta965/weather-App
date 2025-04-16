import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IMAGE_RAINY } from './constants.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App BG_URL={IMAGE_RAINY}/>
  </React.StrictMode>,
)
