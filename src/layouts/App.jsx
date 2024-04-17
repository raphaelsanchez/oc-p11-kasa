import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

/**
 * The main layout component for the app.
 *
 * @returns {JSX.Element} The JSX element for the layout.
 */
export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
