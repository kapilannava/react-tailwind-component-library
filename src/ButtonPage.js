import React from 'react'
import Button from './components/Button'


const ButtonPage = () => {
    return (
        <div>
            <div className="py-4"></div>
            <Button bgColor="blue">Button 1</Button>
            <Button bgColor="red">Button 2</Button>
            <Button bgColor="green">Button 3</Button>

        </div>
    )
}

export default ButtonPage