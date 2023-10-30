import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import MobileNavbar from './mobileNav';

const LightCustomNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="m-auto flex max-w-[1100px] items-center justify-between p-2 lg:p-3">
      {/**Mobile Nav */}
      <MobileNavbar/>

      {/**Desktop */}
      <div className="hidden w-full items-center justify-between font-semibold lg:flex">
        <div className="flex flex-row items-center">
          <div className="mr-1">
            <h1 className="text-4xl font-bold">
              <Link href="/" className="text-gray-700">
                <div className="mb-1">
                  <Image
                    src="https://i.postimg.cc/XNkwcFKP/favicon.png"
                    alt="task"
                    width={200}
                    height={100}
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
            href="/about"
            className="font-medium text-white hover:text-green-500"
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className="font-medium text-white hover:text-green-500"
          >
            SERVICES
          </Link> <Link
            href="/projects"
            className="font-medium text-white hover:text-green-500"
          >
            PROJECTS          </Link> <Link
              href="/blog"
              className="font-medium text-white hover:text-green-500"
            >
            BLOG
          </Link>
          <Link
            href="/contact-us"
            className="font-medium text-white hover:text-green-500"
          >
            CONTACT US
          </Link>
        </div>
      </div>

    </div>
  );
};

export default LightCustomNavbar;
