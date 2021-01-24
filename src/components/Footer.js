import React from 'react';

const Footer = () => {

    return (
        <footer className="bg-blue-900 text-white relative bottom-0 text-center justify-center grid auto-cols-max md:grid-cols-3 grid-cols-1">
  <div>
    <h1 className="text-2xl">
    Footer Column 1
    </h1>
    </div>
  <div>
  <h1 className="text-2xl">
    Footer Column 2
    </h1>
      <ul>
        <li>
          Link 1
        </li>
        <li>
          Link 2
        </li>
        <li>
          Link 3
        </li>
      </ul>
  </div>
  <div>
  <h1 className="text-2xl">
    Footer Column 3
    </h1>
      <ul>
        <li>
          Address
        </li>
        <li>
          Address
        </li>
        <li>
          Address
        </li>
      </ul>
  </div>
</footer>
    )
}

export default Footer;