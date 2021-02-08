import React from 'react';
import Header from './components/Header';

const NavbarPage = ()=> {

    return (
        <div className="py-48">
            <Header bgColor="blue" linkPosition="start" textColor="red" />
            <Header bgColor="red" textColor="blue" />
            <Header bgColor="green" linkPosition="end" textColor="default" />
        </div>
    )
}

export default NavbarPage