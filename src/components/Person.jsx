import PropTypes from 'prop-types'
import './Person.scss'

/**
 * Person component
 *
 * @param {Object} props - Person props
 * @param {string} props.name - The name of the person
 * @param {string} props.avatar - The URL of the avatar of the person
 * @returns {JSX.Element} Person component JSX
 */
export default function Person({ name = '', avatar = '' }) {
    return (
        <figure className="person">
            <img
                className="person__avatar"
                src={avatar}
                alt={`Photo de profil de ${name}`}
            />
            <figcaption className="person__name">{name}</figcaption>
        </figure>
    )
}

// Props type definition
Person.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
}
