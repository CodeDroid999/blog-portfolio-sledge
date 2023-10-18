import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="m-auto flex max-w-[1100px] items-center justify-between p-2 lg:p-3">
      {/**Mobile Nav */}
      <div className="flex min-w-full items-center justify-between lg:hidden">
        {/* Left div */}
        <div className="flex flex-row items-center space-x-1">
          <Link href="/" className="text-gray-700">
            <div className="mb-1">
              <Image
                src="https://i.postimg.cc/FRXRmLQ5/log.png"
                alt="task"
                width={130} // Set the width
                height={60} // Set the height
                className="h-[40px] w-[100%] md:h-[50px] lg:h-[60px] lg:w-[50px]"
                id="customfontsize"
              />
            </div>
          </Link>
        </div>
     
        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="bg-white p-4 space-y-2">
              <Link href="/" className="font-medium text-gray-700 hover:text-green-500">
                HOME
              </Link>
              <Link href="/settings" className="font-medium text-gray-700 hover:text-green-500">
                ABOUT
              </Link>
              {/* Add more links here */}
            </div>
          </div>
        )}
        {/* Right div */}
        <div className="flex justify-end lg:hidden">
          <div className="rounded-full p-3 text-white">
          <button onClick={toggleMenu} className="text-gray-700">
            i minute
          <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#f2a807",}} />
          </button>
          </div>
        </div>
      </div>

      {/**Desktop */}
      <div className="hidden w-full items-center justify-between font-semibold lg:flex">
        <div className="flex flex-row items-center">
          <div className="mr-1">
            <h1 className="text-4xl font-bold">
              <Link href="/" className="text-gray-700">
                <div className="mb-1">
                  <Image
                    src="https://i.postimg.cc/FRXRmLQ5/log.png"
                    alt="task"
                    width={200}
                    height={75}
                    className="h-[50px] w-[100%] md:h-[50px] lg:h-[60px] lg:w-[50px]"
                  />
                </div>
              </Link>
            </h1>
          </div>


        </div>

        {/* Right-side links */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="font-medium text-white hover:text-green-500"
          >
            HOME
          </Link>

          <Link
            href="/settings"
            className="font-medium text-white hover:text-green-500"
          >
            ABOUT
          </Link>
          <Link
            href="/settings"
            className="font-medium text-white hover:text-green-500"
          >
            SERVICES
          </Link> <Link
            href="/settings"
            className="font-medium text-white hover:text-green-500"
          >
            PROJECTS          </Link> <Link
              href="/settings"
              className="font-medium text-white hover:text-green-500"
            >
            BLOG
          </Link>
          <Link
            href="/settings"
            className="font-medium text-white hover:text-green-500"
          >
            CONTACT US
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CustomNavbar;
