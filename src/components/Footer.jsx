import './Footer.scss'
import Logo from './Logo'

/**
 * Footer component.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
    return (
        <footer className="footer">
            <Logo color="currentColor" />
            <p className="footer__credit">© 2020 Kasa - All rights reserved</p>
        </footer>
    )
}
