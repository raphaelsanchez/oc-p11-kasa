import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

/**
 * The router configuration for the application.
 *
 * @type {BrowserRouter}
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'a-propos',
                element: <About />,
            },
            {
                path: 'logement/:id',
                element: <Accommodation />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
])

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
    return (
        <RouterProvider router={router}>
            <Root />
        </RouterProvider>
    )
}
