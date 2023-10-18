import Link from 'next/link';
import React from 'react';

const NavMenu: React.FC = () => {
  return (
    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link href="#home">
            <a className="nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#services">
            <a className="nav-link">Services</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#projects">
            <a className="nav-link">Projects</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#contact">
            <a className="nav-link">Contact us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
