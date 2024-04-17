import { useEffect } from 'react'

// Define constants for the animation duration and easing
const DURATION = 250
const EASING = 'ease-out'

/**
 * Custom hook to handle the opening and closing of the accordion
 * @param {React.RefObject} detailsRef - Ref to the details element
 * @param {React.RefObject} summaryRef - Ref to the summary element
 * @param {React.RefObject} contentRef - Ref to the content element
 */
export default function useAccordion(detailsRef, summaryRef, contentRef) {
    useEffect(() => {
        // Get the current values of the refs
        const details = detailsRef.current
        const summary = summaryRef.current
        const content = contentRef.current

        // Initialize variable for the animation
        let animation = null

        /**
         * Handle click events on the summary element
         * @param {Event} e - Click event
         */
        const onClick = (e) => {
            e.preventDefault()
            details.style.overflow = 'hidden'

            // If the accordion is open, close it
            if (details.open) {
                shrink()
                // If the accordion is closed, open it
            } else {
                open()
            }
        }

        /**
         * Close the accordion
         */
        const shrink = () => {
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Animate the height of the details element from startHeight to endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            )
            animation.onfinish = () => onAnimationFinish(false)
        }

        /**
         * Open the accordion
         */
        const open = () => {
            details.style.height = `${details.offsetHeight}px`
            details.open = true
            window.requestAnimationFrame(expand)
        }

        /**
         * Expand the accordion
         */
        const expand = () => {
            const startHeight = `${details.offsetHeight}px`
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`

            if (animation) {
                animation.cancel()
            }

            // Animate the height of the details element from startHeight to endHeight
            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            )
            animation.onfinish = () => onAnimationFinish(true)
        }

        /**
         * Clean up after the animation finishes
         * @param {boolean} open - Whether the accordion is open or not
         */
        const onAnimationFinish = (open) => {
            animation = null
            details.open = open
            details.style.height = details.style.overflow = ''
            details.removeAttribute('style')
        }

        // Add the click event listener to the summary element
        summary.addEventListener('click', onClick)

        // Remove the event listener when the component unmounts
        return () => {
            summary.removeEventListener('click', onClick)
        }
    }, [detailsRef, summaryRef, contentRef])
}
