import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

// PropTypes
Card.propTypes = {
    accommodation: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        cover: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
}

/**
 * AccommodationCard component that displays a card for an accommodation.
 *
 * @component
 * @param {Object} props.accommodation - The accommodation to display.
 * @returns {React.Element} The rendered AccommodationCard component.
 *
 * @example
 * return (
 *   <AccommodationCard accommodation={accommodation} />
 * )
 */
export default function Card({ accommodation: { id, cover, title } }) {
    return (
        <li className="card" id={`accommodation-${id}`}>
            <Link to={`/logement/${id}`} className="card__link">
                <img
                    className="card__cover"
                    src={cover}
                    alt={`Vue de ${title}`}
                    loading="lazy"
                />
                <h3 className="card__title">{title}</h3>
            </Link>
        </li>
    )
}
