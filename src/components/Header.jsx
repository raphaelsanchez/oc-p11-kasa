import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import Logo from './Logo'
import Nav from './Nav'

/**
 * Represents the header component of the application.
 * @param {Object[]} links - The links to display in the header.
 * @returns {JSX.Element} The header component.
 */
export default function Header({ links = [] }) {
    return (
        <header className="header container">
            <NavLink
                className="header__logo"
                to="/"
                aria-label="Revenir à l'accueil"
            >
                <Logo label="Logo Kasa" />
            </NavLink>
            <Nav links={links} />
        </header>
    )
}

// PropTypes definition
Header.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}
