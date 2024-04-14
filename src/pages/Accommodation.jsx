import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// Props type definition
Accommodation.propTypes = {
    accommodations: PropTypes.array.isRequired,
}

/**
 * Renders the accommodation page component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.accommodations - The list of accommodations.
 * @returns {JSX.Element} The rendered accommodation component.
 */
export default function Accommodation({ accommodations }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const accommodation = Array.isArray(accommodations)
        ? accommodations.find((acc) => acc.id === id)
        : null

    // Redirect to 404 page if accommodation is not found
    useEffect(() => {
        if (!accommodation) {
            navigate('/404')
        }
    }, [accommodation, navigate])

    const { cover, title, location } = accommodation
    return (
        <main className="container">
            <img src={cover} alt={`Vue de ${title}`} />
            <h1>{title}</h1>
            {location && <p>{location}</p>}
        </main>
    )
}
