import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch data from a given URL or use local JSON data.
 *
 * This hook takes a URL or local JSON data as input and returns an object containing
 * the fetched data, a loading state, and an error state.
 *
 * The loading state is `true` while the data is being fetched and `false` once the data
 * has been fetched. If an error occurs during the fetch, the error state is set to the
 * error object, otherwise it is `null`.
 *
 * @param {string | Object} urlOrData - The URL to fetch data from, or the local JSON data to use.
 * @returns {Object} The fetched data, the loading state, and the error state.
 * @property {Object} data - The fetched data.
 * @property {boolean} loading - The loading state.
 * @property {Object} error - The error state.
 *
 * @example
 * // Using the hook with a URL
 * const { data, loading, error } = useFetch('https://api.example.com/data')
 *
 * @example
 * // Using the hook with local JSON data
 * const localData = { key: 'value' }
 * const { data, loading, error } = useFetch(localData)
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
