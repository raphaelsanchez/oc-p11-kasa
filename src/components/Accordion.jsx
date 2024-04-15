import React, { useEffect, useRef } from 'react'

import './Accordion.scss'

export default function Accordion({ title, content }) {
    // Create refs for the details, summary, and content elements
    const detailsRef = useRef()
    const summaryRef = useRef()
    const contentRef = useRef()

    useEffect(() => {
        // Get the current values of the refs
        const details = detailsRef.current
        const summary = summaryRef.current
        const content = contentRef.current

        // Initialize variables for the animation and state
        let animation = null
        let isClosing = false
        let isExpanding = false

        // Handle click events on the summary element
        const onClick = (e) => {
            e.preventDefault()
            details.style.overflow = 'hidden'

            // If the accordion is closing or closed, open it
            if (isClosing || !details.open) {
                open()
                // If the accordion is expanding or open, close it
            } else if (isExpanding || details.open) {
                shrink()
            }
        }

        // Close the accordion
        const shrink = () => {
            isClosing = true
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Animate the height of the details element from startHeight to endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: 400, easing: 'ease-out' }
            )
            animation.onfinish = () => onAnimationFinish(false)
            animation.oncancel = () => (isClosing = false)
        }

        // Open the accordion
        const open = () => {
            details.style.height = `${details.offsetHeight}px`
            details.open = true
            window.requestAnimationFrame(expand)
        }

        const expand = () => {
            isExpanding = true
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Animate the height of the details element from startHeight to endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: 400, easing: 'ease-out' }
            )
            animation.onfinish = () => onAnimationFinish(true)
            animation.oncancel = () => (isExpanding = false)
        }

        // Clean up after the animation finishes
        const onAnimationFinish = (open) => {
            details.open = open
            animation = null
            isClosing = false
            isExpanding = false
            details.style.height = details.style.overflow = ''
            details.removeAttribute('style')
        }

        // Add the click event listener to the summary element
        summary.addEventListener('click', onClick)

        // Remove the event listener when the component unmounts
        return () => {
            summary.removeEventListener('click', onClick)
        }
    }, [])

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
