import { useEffect } from 'react'

/**
 * A custom hook that scrolls the window to the top whenever a component is mounted.
 *
 * Use this hook in your page components to ensure that the window is always scrolled to the top when the user navigates to a new page.
 */
export function useScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
}
