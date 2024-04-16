import notFound404 from '@/assets/404.svg'
import { Link } from 'react-router-dom'
import './NotFound.scss'

/**
 * Renders the NotFound page component.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
export default function NotFound() {
    return (
        <main className="notFound container">
            <img src={notFound404} alt="" />
            <h1>Oups! La page que vous demandez n&apos;existe pas.</h1>
            <p>
                <Link to="/">Retrouner sur la page d&apos;accueil</Link>
            </p>
        </main>
    )
}
