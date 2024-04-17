import PropTypes from 'prop-types'
import './TagList.scss'

/**
 * TagList component
 *
 * @param {Object} props - TagList props
 * @param {string[]} props.tags - The tags to display
 * @param {string} props.className - The class name to add
 * @returns {JSX.Element} TagList component JSX
 */
export default function TagList({ tags, className }) {
    return (
        <ul className={`tagList ${className}`}>
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
    className: PropTypes.string,
}
