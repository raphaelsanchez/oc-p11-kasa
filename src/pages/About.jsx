import aboutBanner from '@/assets/about-banner.webp'
import Accordion from '@/components/Accordion'
import Banner from '@/components/Banner'
import Loader from '@/components/Loader'
import aboutData from '@/data/about.json'
import { useFetchData } from '@/hooks/useFetchData'
import './About.scss'

/**
 * Renders the About page component.
 *
 * @returns {JSX.Element} The About page component.
 */
export default function About() {
    const { isLoading, data } = useFetchData(aboutData)

    return (
        <main className="container">
            <Banner title="À propos" image={aboutBanner} />

            <section className="about-sections">
                {isLoading ? (
                    <Loader />
                ) : !data ? (
                    <div>Pas de données disponibles</div>
                ) : (
                    data.map((section, index) => (
                        <Accordion
                            key={index}
                            title={section.title}
                            content={section.content}
                        />
                    ))
                )}
            </section>
        </main>
    )
}
