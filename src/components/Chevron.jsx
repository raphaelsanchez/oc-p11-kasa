import PropTypes from 'prop-types'

/**
 * Renders a Chevron component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.direction - The direction of the chevron ('left' or 'right').
 * @param {string} [props.color='currentColor'] - The color of the chevron.
 * @returns {JSX.Element} The rendered Chevron component.
 */
export default function Chevron({
    direction,
    color = 'currentColor',
    size = '5rem',
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 15 15"
            fill={color}
        >
            {direction === 'left' ? (
                <path
                    fillRule="evenodd"
                    d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023"
                    clipRule="evenodd"
                />
            ) : (
                <path
                    fillRule="evenodd"
                    d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707"
                    clipRule="evenodd"
                />
            )}
        </svg>
    )
}

// Prop types definition
Chevron.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']).isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
}
