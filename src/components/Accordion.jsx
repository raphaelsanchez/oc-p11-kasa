import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import useAccordion from '../hooks/useAccordion'
import './Accordion.scss'

/**
 * Accordion component
 * @param {Object} props - Accordion props
 * @param {string} props.title - The title of the accordion
 * @param {string | array} props.content - The content of the accordion
 * @returns {JSX.Element} Accordion component JSX
 */
export default function Accordion({ title = '', content = '' }) {
    // Create refs for the details, summary, and content elements
    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()

    // Use the custom hook to handle the opening and closing of the accordion
    useAccordion(detailsRef, summaryRef, contentRef)

    // Process the content to render a list or a paragraph depending on the type received
    const processedContent = Array.isArray(content) ? (
        <ul className="list">
            {content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    ) : (
        <p>{content}</p>
    )

    return (
        <details className="accordion" ref={detailsRef}>
            <summary className="accordion__title" ref={summaryRef}>
                {title}
            </summary>
            <div className="accordion__content" ref={contentRef}>
                {processedContent}
            </div>
        </details>
    )
}

// Props type definition
Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
