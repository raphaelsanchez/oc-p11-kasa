import { PropTypes } from 'prop-types'
/**
 * Logo component.
 *
 * @param {string} color - The color of the logo. Default is '#FF6060'.
 * @param {number|string} width - The width of the logo. Default is '211'.
 * @param {number|string} height - The height of the logo. Default is '68'.
 * @param {string} label - The label for the logo. Default is 'Kasa'.
 * @returns {JSX.Element} The logo component.
 */
export default function Logo({ color = '#FF6060', width, height, label }) {
    return (
        <svg
            className="logo"
            viewBox="0 0 211 68"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            width={width || '211'}
            height={height || '68'}
            role="img"
            aria-label={label || 'Kasa'}
        >
            <path d="m210.32 33.722v28.534h-8.104v-6.2997c-2.762 4.2616-8.103 6.6703-15.47 6.6703-10.682 0-17.312-5.7439-17.312-13.896 0-7.5967 4.788-13.711 18.785-13.711h13.445v-1.6676c0-7.2262-4.236-11.302-12.524-11.302-5.525 0-11.234 2.0382-14.918 5.0028l-3.499-6.485c4.789-3.891 11.787-6.1145 19.338-6.1145 13.076 0.1853 20.259 6.485 20.259 19.27zm-8.472 14.082v-6.6703h-13.076c-8.472 0-10.866 3.3352-10.866 7.2262 0 4.6321 3.867 7.5967 10.313 7.5967 6.446 0.1853 11.603-2.594 13.629-8.1526z" />
            <path d="m118.79 57.253 3.5-6.6703c4.051 2.7793 10.313 4.8174 16.391 4.8174 7.919 0 11.05-2.4087 11.05-6.485 0-10.561-29.652-1.4823-29.652-20.196 0-8.5231 7.551-14.082 19.522-14.082 6.078 0 13.076 1.6676 17.128 4.2616l-3.683 6.6703c-4.236-2.7793-8.84-3.7057-13.445-3.7057-7.366 0-11.05 2.7793-11.05 6.485 0 11.117 29.652 2.0381 29.652 20.381 0 8.5232-7.736 13.896-20.259 13.896-7.551 0.1853-15.286-2.2234-19.154-5.3733z" />
            <path d="m91.532 49.842v12.599l5.341-3.1498v-12.6l-5.341 3.1499z" />
            <path d="m106.27 34.463-21.916-12.785-12.155-7.0409-11.971 20.937 0.1842 19.64 21.732 12.785 2.21-1.297v-18.529l9.761-17.232 9.9454 5.7438v18.529l2.21-1.297v-19.455z" />
            <path d="M20.0745 34.6485L8.84014 46.1362V62.2561H0V0H8.84014V34.8338L42.359 0H52.4883L26.1521 27.9782L54.33 62.2561H44.0165L20.0745 34.6485Z" />
        </svg>
    )
}

// Props type definition
Logo.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
}
