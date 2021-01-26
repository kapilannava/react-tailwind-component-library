import React from 'react'
import Button from './components/Button'


const ButtonPage = () => {
    return (
        <div>
            These are buttons!
            <div className="py-4"></div>
            <Button bgColor="blue" bgHover="red">Button 1</Button>
            <Button bgColor="red" bgHover="green">Button 2</Button>
            <Button bgColor="green" bgHover="blue">Button 3</Button>

        </div>
    )
}

export default ButtonPage