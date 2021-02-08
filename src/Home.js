import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'

const Home = () => {
    return (
            <div className="flex flex-col h-screen justify-between">
            <Hero />
<Footer bgColor="red" />
</div>
    )
}

export default Home;