import Accordion from '@/components/Accordion'
import Loader from '@/components/Loader'
import Person from '@/components/Person'
import Rating from '@/components/Rating'
import TagList from '@/components/TagList'
import logementsData from '@/data/logements.json'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { useFetchData } from '../hooks/useFetchData'
import './Accommodation.scss'

/**
 * Custom hook to fetch accommodation data based on the provided URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} The loading state and the accommodation data.
 */
const useAccommodation = (url) => {
    const { isLoading, data: accommodations } = useFetchData(url)
    const { id } = useParams()
    const accommodation = Array.isArray(accommodations)
        ? accommodations.find((acc) => acc.id === id)
        : null

    return { isLoading, accommodation }
}

/**
 * Accommodation component. Displays accommodation details.
 * @component
 */
export default function Accommodation() {
    useScrollToTop()
    const navigate = useNavigate()
    const { isLoading, accommodation } = useAccommodation(logementsData)

    if (isLoading) {
        return <Loader />
    }

    if (!accommodation && !isLoading) {
        navigate('404') // Redirect to the NotFound page
        return null
    }

    const {
        cover,
        title,
        location,
        host,
        rating,
        tags,
        description,
        equipments,
        pictures,
    } = accommodation

    return (
        <main className="accommodation container">
            {pictures ? (
                <Carousel key={pictures} pictures={pictures} />
            ) : (
                <img src={cover} alt="Cover image" />
            )}
            <section className="accommodation__summary">
                <hgroup className="accommodation__heading">
                    <h1 className="accommodation__title">{title}</h1>
                    {location && (
                        <p className="accommodation__location">{location}</p>
                    )}
                    <TagList className={`accommodation__tags`} tags={tags} />
                </hgroup>
                {host && (
                    <aside className="accommodation__infos">
                        <Rating score={rating} activeColor="#ff6060" />
                        <Person name={host.name} avatar={host.picture} />
                    </aside>
                )}
            </section>
            <section className="accommodation__details">
                <h2 className="sr-only">Details</h2>
                <Accordion title="Description" content={description} />
                <Accordion title="Équipements" content={equipments} />
            </section>
        </main>
    )
}
