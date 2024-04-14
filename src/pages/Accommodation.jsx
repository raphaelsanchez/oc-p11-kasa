import { useParams } from 'react-router-dom'

/**
 * Renders the accommodation page component.
 *
 * @returns {JSX.Element} The rendered accommodation component.
 */
export default function Accommodation() {
    // Get params from URL
    const { id } = useParams()
    return (
        <main className="container">
            <h1>Logement {id}</h1>
        </main>
    )
}
