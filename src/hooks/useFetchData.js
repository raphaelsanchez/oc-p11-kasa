import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch data from a given URL or use local JSON data.
 *
 * @param {string | Object} urlOrData - The URL to fetch data from, or the local JSON data to use.
 * @returns {Object} The fetched data, the loading state, and the error state.
 * @property {Object} data - The fetched data.
 * @property {boolean} loading - The loading state.
 * @property {Object} error - The error state.
 */
export function useFetchData(urlOrData) {
    const [state, setState] = useState({
        isLoading: true,
        data: [],
        error: null,
    })

    useEffect(() => {
        if (typeof urlOrData === 'string') {
            const fetchData = async () => {
                try {
                    const response = await fetch(urlOrData)
                    const data = await response.json()
                    setState({ isLoading: false, data, error: null })
                } catch (error) {
                    setState({ isLoading: false, data: null, error: error })
                }
            }
            fetchData()
        } else {
            setState({ isLoading: false, data: urlOrData })
        }
    }, [urlOrData])

    return state
}
