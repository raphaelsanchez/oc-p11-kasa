import PropTypes from 'prop-types'
import React from 'react'
import './Banner.scss'

// PropTypes
Banner.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    image: PropTypes.string.isRequired,
}

/**
 * Banner component that displays an image and an optional title.
 *
 * @component
 * @param {Object} props - The props of the component.
 * @param {string | null} props.title - The title to display. If not provided, no title will be displayed.
 * @param {string} props.image - The URL of the image to display.
 * @returns {React.Element} The rendered Banner component.
 *
 * @example
 * return (
 *   <Banner title="Welcome" image="/path/to/image.jpg" />
 * )
 */
export default function Banner({ title = null, image }) {
    return (
        <header className="banner">
            {title && <h2 className="banner__title">{title}</h2>}
            <img className="banner__image" src={image} alt="" />
        </header>
    )
}
