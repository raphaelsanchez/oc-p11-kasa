import { Link } from 'react-router-dom'

/**
 * Renders the NotFound page component.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
export default function NotFound() {
    return (
        <main className="container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p>
                <Link to="/">Retrouner sur la page d'accueil</Link>
            </p>
        </main>
    )
}
