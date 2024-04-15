import React, { useRef } from 'react'
import useAccordion from '../hooks/useAccordion'
import './Accordion.scss'

/**
 * Accordion component
 * @param {Object} props - Accordion props
 * @param {string} props.title - The title of the accordion
 * @param {string} props.content - The content of the accordion
 * @returns {JSX.Element} Accordion component JSX
 */
export default function Accordion({ title, content }) {
    // Create refs for the details, summary, and content elements
    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()

    // Use the custom hook to handle the opening and closing of the accordion
    useAccordion(detailsRef, summaryRef, contentRef)

    return (
        <details className="accordion" ref={detailsRef}>
            <summary className="accordion__title" ref={summaryRef}>
                {title}
            </summary>
            <div className="accordion__content" ref={contentRef}>
                {content}
            </div>
        </details>
    )
}
