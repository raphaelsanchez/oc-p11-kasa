/**
 * Renders the main application component wrapped in a StrictMode.
 * @module Main
 */
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
