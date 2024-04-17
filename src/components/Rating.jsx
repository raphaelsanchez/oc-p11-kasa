import PropTypes from 'prop-types'

/**
 * Star component
 *
 * @param {Object} props - Star props
 * @param {string} props.fill - The fill color of the star
 * @returns {JSX.Element} Star component JSX
 */
function Star({ fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            width="24px"
            height="24px"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    )
}

/**
 * Rating component
 * @param {Object} props - Rating props
 * @param {number} props.score - The score to display
 * @param {string} props.activeColor - The color of the active stars
 * @param {string} props.mutedColor - The color of the inactive stars
 * @returns {JSX.Element} Rating component JSX
 */
export default function Rating({
    score,
    activeColor = '#000',
    mutedColor = '#E3E3E3',
}) {
    return (
        <div className="rating" aria-label={`Note de ${score} sur 5`}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < score ? activeColor : mutedColor} />
            ))}
        </div>
    )
}

// Prop types definition
Star.propTypes = {
    fill: PropTypes.string.isRequired,
}

Rating.propTypes = {
    score: PropTypes.string.isRequired,
    activeColor: PropTypes.string,
    mutedColor: PropTypes.string,
}
