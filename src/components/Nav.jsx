import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

/**
 * Renders the navigation component.
 * 
 * @param {JSON} links - An array of link objects.
 * @param {string} links.to - The URL of the link.
 * @param {string} links.label - The label of the link.
 * @param {string} links.ariaLabel - The aria-label of the link.
 * @returns {JSX.Element} The rendered navigation component.
 */

export default function Nav({ links }) {
    if (!links || Object.keys(links).length === 0) {
        return null
    }

    return (
        <nav aria-label="Menu principal">
            <ul className="nav">
                {Object.values(links).map((link, index) => (
                    <li className="nav__item" key={index}>
                        <NavLink
                            className="nav__link"
                            to={link.to}
                            aria-label={link.ariaLabel}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// PropTypes definition

Nav.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}
