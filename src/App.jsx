import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NotFound from '@/pages/NotFound'
import { lazy, Suspense } from 'react'
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from 'react-router-dom'
import Loader from './components/Loader'

// Lazy load pages
const About = lazy(() => import('@/pages/About'))
const Accommodation = lazy(() => import('@/pages/Accommodation'))
const Home = lazy(() => import('@/pages/Home'))

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
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: 'a-propos',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <About />
                        </Suspense>
                    ),
                },
                {
                    path: 'logement/:id',
                    element: (
                        <Suspense fallback={<Loader />}>
                            <Accommodation />
                        </Suspense>
                    ),
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
