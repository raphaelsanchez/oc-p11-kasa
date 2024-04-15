import PropTypes from 'prop-types'
import React from 'react'
import './TagList.scss'

/**
 * TagList component
 * @param {Object} props - TagList props
 * @param {string[]} props.tags - The tags to display
 * @returns {JSX.Element} TagList component JSX
 */
export default function TagList({ tags }) {
    return (
        <ul className="tagList">
            {tags.map((tag) => (
                <li key={tag}>
                    <span className="tag">{tag}</span>
                </li>
            ))}
        </ul>
    )
}

// Prop types definition
TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}