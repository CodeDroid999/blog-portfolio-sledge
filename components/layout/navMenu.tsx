import React from 'react';
import Link from 'next/link';

const NavigationMenu: React.FC = () => {
  return (
    <div className="bg-white w-100">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link href="#home" passHref>
            <span className="nav-link text-left">Home <span className="sr-only">(current)</span></span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#about" passHref>
            <span className="nav-link">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#services" passHref>
            <span className="nav-link">Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#projects" passHref>
            <span className="nav-link">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#contact" passHref>
            <span className="nav-link">Contact us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
