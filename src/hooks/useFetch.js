import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch data from a given URL or use local JSON data.
 *
 * @param {string | Object} urlOrData The URL to fetch data from, or the local JSON data to use.
 * @returns {Object} The fetched data and a loading state.
 */
export function useFetch(urlOrData) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (typeof urlOrData === 'string') {
            // If urlOrData is a string, use it as a URL to fetch data
            fetch(urlOrData)
                .then((response) => response.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error:', error)
                    setLoading(false)
                })
        } else {
            // If urlOrData is not a string, use it as local JSON data
            setData(urlOrData)
            setLoading(false)
        }
    }, [urlOrData])

    return { data, loading }
}
