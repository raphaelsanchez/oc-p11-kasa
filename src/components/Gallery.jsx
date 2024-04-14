import PropTypes from 'prop-types'
import React from 'react'
import Card from './Card'
import './Gallery.scss'

// PropTypes
Gallery.propTypes = {
    accommodations: PropTypes.arrayOf(PropTypes.object).isRequired,
}

/**
 * Gallery component that displays a list of accommodations.
 *
 * @component
 * @param {Object[]} props.accommodations - The accommodations to display.
 * @returns {React.Element} The rendered Gallery component.
 *
 * @example
 * return (
 *   <Gallery accommodations={accommodations} />
 * )
 */
export default function Gallery({ accommodations }) {
    return (
        <ul className="gallery">
            {accommodations.map((accommodation) => (
                <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </ul>
    )
}
