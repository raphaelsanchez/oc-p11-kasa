import PropTypes from 'prop-types'
import Card from './Card'
import './Gallery.scss'

/**
 * Gallery component that displays a list of accommodations.
 *
 * @param {Object[]} props.accommodations - The accommodations to display.
 * @returns {React.Element} The rendered Gallery component.
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

// PropTypes
Gallery.propTypes = {
    accommodations: PropTypes.arrayOf(PropTypes.object).isRequired,
}
