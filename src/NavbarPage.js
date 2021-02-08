import React from 'react';
import Header from './components/Header';

const NavbarPage = ()=> {

    return (
        <div className="py-48">
            <Header bgColor="blue" linkPosition="start" />
            <Header bgColor="red" />
            <Header bgColor="green" linkPosition="end" />
        </div>
    )
}

export default NavbarPage