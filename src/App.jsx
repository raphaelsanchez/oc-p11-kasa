import {
    Navigate,
    Outlet,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import logements from './data/logements.json'
import { useFetch } from './hooks/useFetch'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

/**
 * Root component of the application.
 * Renders the header, outlet, and footer components.
 *
 * @returns {JSX.Element} The rendered root component.
 */
function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

/**
 * Renders the main App component.
 * @returns {JSX.Element} The rendered App component.
 */
export function App() {
    const { data, loading, error } = useFetch(logements)

    // If there is an error loading the data, return an error message
    if (error) {
        return (
            <div>Erreur lors du chargement des données : {error.message}</div>
        )
    }

    // If the data is still loading, return a loading message
    if (loading) {
        return <div>Loading...</div>
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home accommodations={data} loading={loading} />,
                },
                {
                    path: 'a-propos',
                    element: <About />,
                },
                {
                    path: 'logement/:id',
                    element: <Accommodation accommodations={data} />,
                },
                {
                    path: '404',
                    element: <NotFound />,
                },
                {
                    path: '*',
                    element: <Navigate to="/404" />,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}
