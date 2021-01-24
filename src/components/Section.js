import React from 'react'

const Section = () => {


    return (
        <section className="h-96 md:px-32 grid grid-cols-1 md:grid-cols-2">
        <div>
        <img src="https://picsum.photos/id/237/600/300" />
        </div>
        <div className="mx-auto">
        <h1 className="text-3xl">Text on the Left</h1>
            This is the second section
        </div>
        </section>
    )
}

export default Section