/**
 * Renders the main application component wrapped in a StrictMode.
 * @module Main
 */
import { App } from '@/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
