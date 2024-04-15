import Accordion from '@/components/Accordion'
import Banner from '@/components/Banner'
import Person from '@/components/Person'
import Rating from '@/components/Rating'
import TagList from '@/components/TagList'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Accommodation.scss'

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
    useScrollToTop()
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

    const {
        cover,
        title,
        location,
        host,
        rating,
        tags,
        description,
        equipments,
    } = accommodation || {}

    return (
        <main className="accommodation container">
            {cover && <Banner image={cover} />}

            <section className="accommodation__summary">
                <hgroup className="accommodation__heading">
                    <h1 className="accommodation__title">{title}</h1>
                    {location && (
                        <p className="accommodation__location">{location}</p>
                    )}
                    <TagList className={`accommodation__tags`} tags={tags} />
                </hgroup>
                <aside className="accommodation__infos">
                    <Rating score={rating} activeColor="#ff6060" />
                    <Person name={host.name} avatar={host.picture} />
                </aside>
            </section>

            <section className="accommodation__details">
                <h2 className="sr-only">Details</h2>
                <Accordion title="Description" content={description} />
                <Accordion title="Équipements" content={equipments} />
            </section>
        </main>
    )
}
