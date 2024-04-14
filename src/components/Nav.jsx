import { NavLink } from 'react-router-dom'
import './Nav.scss'

/**
 * Renders the navigation component.
 * @returns {JSX.Element} The rendered navigation component.
 */
export default function Nav() {
    return (
        <nav aria-label="Menu principal">
            <ul className="nav">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/" aria-label="Accueil">
                        Accueil
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav__link"
                        to="/a-propos"
                        aria-label="À propos de Kasa"
                    >
                        À propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
