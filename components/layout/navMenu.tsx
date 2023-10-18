import Link from 'next/link';
import React from 'react';

const NavigationMenu: React.FC = () => {
  return (
    <div className="bg-white w-100">
      <ul className="navbar-nav p-1">
        <li className="nav-item active p-2">
          <Link href="#home" passHref>
            <span className="nav-link text-left">Home <span className="sr-only">(current)</span></span>
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link href="#about" passHref>
            <span className="nav-link">About</span>
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link href="#services" passHref>
            <span className="nav-link pl-3">Services</span>
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link href="#projects" passHref>
            <span className="nav-link pl-3">Projects</span>
          </Link>
        </li>
        <li className="nav-item p-2">
          <Link href="#contact" passHref>
            <span className="nav-link">Contact us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
