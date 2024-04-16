import Accordion from '@/components/Accordion'
import Banner from '@/components/Banner'
import Loader from '@/components/Loader'
import Person from '@/components/Person'
import Rating from '@/components/Rating'
import TagList from '@/components/TagList'
import logementsData from '@/data/logements.json'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'
import './Accommodation.scss'

const useAccommodation = (url) => {
    const { isLoading, data: accommodations } = useFetchData(url)
    const { id } = useParams()
    const accommodation = Array.isArray(accommodations)
        ? accommodations.find((acc) => acc.id === id)
        : null

    return { isLoading, accommodation }
}

export default function Accommodation() {
    useScrollToTop()
    const navigate = useNavigate()
    const { isLoading, accommodation } = useAccommodation(logementsData)

    if (isLoading) {
        return <Loader />
    }

    if (!accommodation && !isLoading) {
        navigate('NotFound')
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
    } = accommodation

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
