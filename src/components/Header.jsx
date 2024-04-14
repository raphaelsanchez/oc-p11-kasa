import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import Logo from './Logo'
import Nav from './Nav'

/**
 * Represents the header component of the application.
 * @returns {JSX.Element} The header component.
 */
export default function Header() {
    return (
        <header className="header container">
            <NavLink
                className="header__logo"
                to="/"
                aria-label="Revenir à l'accueil"
            >
                <Logo />
            </NavLink>
            <Nav />
        </header>
    )
}
