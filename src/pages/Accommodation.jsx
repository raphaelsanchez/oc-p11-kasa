import { useParams } from 'react-router-dom'

/**
 * Renders the accommodation page component.
 *
 * @returns {JSX.Element} The rendered accommodation component.
 */
export default function Accommodation({ accommodations, loading }) {
    const { id } = useParams()
    // Find the accommodation with the given id
    const accommodation = accommodations
        ? accommodations.find((acc) => acc.id === id)
        : null

    if (loading) {
        return <div>Loading...</div>
    }

    if (!accommodation) {
        return <div>No accommodation found with id {id}</div>
    }

    const { cover, title, location } = accommodation
    return (
        <main className="container">
            <img src={cover} alt={`Vue de ${title}`} />
            <h1>{title}</h1>
            {location && <p>{location}</p>}
        </main>
    )
}
