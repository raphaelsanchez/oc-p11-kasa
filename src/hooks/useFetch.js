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
export function useFetch(urlOrData) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleData = (data) => {
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        if (typeof urlOrData === 'string') {
            const fetchData = async () => {
                try {
                    const response = await fetch(urlOrData)
                    const data = await response.json()
                    setData(data)
                } catch (error) {
                    console.error(
                        'Erreur lors de la récupération des données :',
                        error
                    )
                    setError(error)
                } finally {
                    setLoading(false)
                }
            }

            fetchData()
        } else {
            handleData(urlOrData)
        }
    }, [urlOrData])

    return { data, loading, error }
}
