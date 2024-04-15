import PropTypes from 'prop-types'
import React from 'react'
import './Banner.scss'

/**
 * Banner component that displays an image and an optional title.
 *
 * @component
 * @param {Object} props - The props of the component.
 * @param {string} props.title - The title to display. If not provided, no title will be displayed.
 * @param {string} props.image - The URL of the image to display.
 * @returns {React.Element} The rendered Banner component.
 */
export default function Banner({ title = '', image = '' }) {
    return (
        <header className="banner">
            {title && <h2 className="banner__title">{title}</h2>}
            {image && <img className="banner__image" src={image} alt="" />}
        </header>
    )
}

// PropTypes
Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    children: (props, componentName) => {
        if (!props.title && !props.image) {
            return new Error(
                `One of props 'title' or 'image' was not specified in '${componentName}'.`
            )
        }
    },
}
