import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavbar = () => {
  return (
    <div className="flex min-w-full items-center justify-between lg:hidden">
      {/* Left div */}
      <div className="flex flex-row items-center space-x-1">
        <Link href="/" className="text-gray-700">
          <div className="mb-1">
            <Image
              src="https://i.postimg.cc/FRXRmLQ5/log.png"
              alt="task"
              width={130}
              height={60}
              className="h-[40px] w-[100%] md:h-[50px] lg:h-[60px] lg:w-[50px]"
              id="customfontsize"
            />
          </div>
        </Link>
      </div>

      {/* Right div (Sticky bar) */}
      <div className="flex items-center justify-end">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#f2a807", fontSize: "24px" }}
          />
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;