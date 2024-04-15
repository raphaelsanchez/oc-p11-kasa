import aboutBanner from '@/assets/about-banner.webp'
import Accordion from '@/components/Accordion'
import Banner from '@/components/Banner'
import aboutData from '@/data/about.json'
import React from 'react'
import './About.scss'

/**
 * Renders the About page component.
 *
 * @returns {JSX.Element} The About page component.
 */
export default function About() {
    return (
        <main className="container">
            <Banner title="À propos" image={aboutBanner} />
            <section className="about-sections">
                {aboutData.map((section, index) => (
                    <Accordion
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </section>
        </main>
    )
}
