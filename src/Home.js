import React from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import ReverseSection from './components/ReverseSection'
import Footer from './components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Section />
            <ReverseSection />
            <Footer />
        </div>
    )
}

export default Home;