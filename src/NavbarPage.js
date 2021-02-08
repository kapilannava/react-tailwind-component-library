import React from 'react';
import Header from './components/Header';

const NavbarPage = ()=> {

    return (
        <div className="py-48">
            <Header bgColor="blue" />
            <Header bgColor="red" />
            <Header bgColor="green" />
        </div>
    )
}

export default NavbarPage