import React from 'react'


const Section = () => {
    return (
        <section className="h-96 flex flex-col md:flex-row">
        <div>
        <img src="https://picsum.photos/600/300" alt="" />
        </div>
        <div className="mx-auto px-8">
        <h1 className="text-4xl pb-4 font-bold">Section #1</h1>
            <p>
            Lorem Ipsum has been the industry's standard dummy
             text ever since the 1500s, when an unknown printer 
             took a galley of type and scrambled it to make a type
              specimen book. 
            </p>
        </div>
        </section>
    )
}

export default Section