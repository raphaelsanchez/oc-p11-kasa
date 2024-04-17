import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
    Navigate,
    Outlet,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
// Components
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NotFound from '@/pages/NotFound'
// Pages
import About from '@/pages/About'
import Accommodation from '@/pages/Accommodation'
import Home from '@/pages/Home'
// Styles
import './main.scss'

// Define the links for the navigation
const links = {
    home: {
        to: '/',
        label: 'Accueil',
        ariaLabel: "Aller à la page d'accueil",
    },
    about: {
        to: '/a-propos',
        label: 'À propos',
        ariaLabel: 'Aller à la page À propos',
    },
    // Ajoutez plus de liens ici
}

/**
 * Renders the main App component.
 * @returns {JSX.Element} The rendered App component.
 */
export function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Header links={links} />
                    <Outlet />
                    <Footer />
                </>
            ),
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
