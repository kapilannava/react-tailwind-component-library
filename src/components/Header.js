import React, { useState } from 'react';

function Header(){

    const [mobileMenu, setmobileMenu] = useState(false);
    const showMenu = () => setmobileMenu(!mobileMenu)
    console.log(mobileMenu);

    return(
    <nav className="bg-gray-800">
    <div className="flex items-center justify-between px-4 py-2">

                                {/*Logo*/}
                                <div>
                  <img className="h-8" src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now" alt="logo" />
              </div>

                {/* Hide SVG Menu on Medium Screens and Bigger */}
              <div className="flex md:hidden">
              <button onClick={showMenu} className="block text-white hover:text-gray-500 focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="!isOpen" fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>              
    </div>

                {/* Hidden but flex out on Medium Screens and Larger */}
        <div className="hidden md:flex">
        <button className="px-2 py-1 text-white semibold rounded hover:bg-gray-700">
                Home
            </button>

            <button className="px-2 py-1 text-white semibold rounded hover:bg-gray-700">
                About
            </button>

            <button className="px-2 py-1 text-white semibold rounded hover:bg-gray-700">
                Learn more
            </button>

            <button className="px-2 py-1 text-white semibold rounded hover:bg-gray-700">
                New item
            </button>
        </div>

    </div>
        
        {/* mobileMenu toggle state is set to false
        * If mobileMenu is true, div classname="px-2 pt-2 pb-4 py-3"
        * else div className="hidden"
        */}
        <div className={mobileMenu ? 'px-2 pt-2 pb-4 py-3' : 'hidden'}>
            <button className="block px-2 py-1 text-white semibold rounded hover:bg-gray-700" href="#">
                Home
            </button>

            <button className="mt-1 block px-2 py-1 text-white semibold rounded hover:bg-gray-700" href="#">
                About
            </button>

            <button className="mt-1 block px-2 py-1 text-white semibold rounded hover:bg-gray-700" href="#">
                Learn more
            </button>

            <button className="mt-1 block px-2 py-1 text-white semibold rounded hover:bg-gray-700" href="#">
                Lols
            </button>
        </div>

    </nav>
        
    )
    }

    
export default Header