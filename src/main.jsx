import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import kasaLogo from '/kasa.svg'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* TODO: Ajouter React Router pour charger les différentes page */}
        <div>
            <h1>
                <img src={kasaLogo} className="logo" alt="Logo de Kasa" />
            </h1>
            <p className="read-the-docs">© 2020 Kasa. All rights reserved</p>
        </div>
    </StrictMode>
)
