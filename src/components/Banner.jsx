import PropTypes from 'prop-types'
import './Banner.scss'

/**
 * Banner component that displays an image and an optional title.
 *
 * @param {Object} props - The props of the component.
 * @param {string} props.title - The title to display. If not provided, no title will be displayed.
 * @param {string} props.image - The URL of the image to display.
 * @returns {React.Element} The rendered Banner component.
 */
export default function Banner({ title = '', image = '' }) {
    return (
        <header
            className="banner"
            style={{ '--background-image': `url(${image})` }}
        >
            {title && <h2 className="banner__title">{title}</h2>}
        </header>
    )
}

// PropTypes
Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}
