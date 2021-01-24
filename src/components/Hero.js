import React from 'react'

const Hero = () => {

    return(
        <section className="h-96 pt-16 md:pt-32 text-center">
            <h1 className="text-4xl md:text-6xl px-4 md:px-48 font-bold">
                Responsive React and Tailwind CSS components.
            </h1>
                <p className="pt-4 px-16 text-lg">
                    This is the hero section with a button
                </p>

            <button style={{background: "#00aaff"}} className="p-1 w-9/12 md:w-40 mt-4 rounded-md bg-blue-500 text-lg text-white">
                Get Started!
            </button>

        </section>
    )
}

export default Hero;