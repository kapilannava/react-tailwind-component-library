import React from 'react'

const Form = () => {

    return (
        <div className="text-center my-16">
            <form className="flex flex-col">
            <h1>Form Section</h1>
            <div>
            <label htmlFor="Name">Name:</label>
            <input className="border-solid border-4 border-light-blue-500" type="text" />
            </div>
            <div>
            <label htmlFor="Phone">Phone:</label>
            <input className="border-solid border-4 border-light-blue-500" type="text" />
            </div>
            <div>
            <label htmlFor="Email">Email:</label>
            <input className="border-solid border-4 border-light-blue-500" type="text" />
            </div>
            </form>
        </div>
    )
}

export default Form