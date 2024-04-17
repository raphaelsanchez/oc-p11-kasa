import App from '@/layouts/App'
import About from '@/pages/About'
import Accommodation from '@/pages/Accommodation'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

/**
 * Router component. Defines the application routes.
 *
 * @returns {JSX.Element} The Router component.
 */
export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
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
