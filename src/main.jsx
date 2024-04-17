import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { Router as Routes } from './routes/router'

/**
 * Initialize and render the application.
 *
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Routes />
    </StrictMode>
)
