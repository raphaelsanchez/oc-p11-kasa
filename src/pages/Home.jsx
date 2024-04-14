import React from 'react'
import homeBanner from '../assets/home-banner.webp'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import './Home.scss'

/**
 * Renders the Home page component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.accommodations - The list of accommodations.
 * @returns {JSX.Element} The Home page component.
 */
export default function Home({ accommodations }) {
    return (
        <main className="content container">
            <Banner title="Chez vous, partout et ailleurs" image={homeBanner} />
            <section className="logements">
                <h2 className="sr-only">Liste de logements</h2>
                <Gallery accommodations={accommodations} />
            </section>
        </main>
    )
}
