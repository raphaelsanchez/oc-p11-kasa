import './Loader.scss'

/**
 * Loader component that displays a spinner.
 *  
 * @returns {JSX.Element} The rendered Loader component.
 */
const Loader = () => (
    <div className="loader">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
    </div>
)

export default Loader
