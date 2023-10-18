import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const CustomNavbar = () => {
  return (
    <div className="m-auto flex max-w-[1100px] items-center justify-between p-2 lg:p-3">
      {/**Mobile Nav */}
      <div className="flex min-w-full items-center justify-between lg:hidden">
        {/* Left div */}
        <div className="flex flex-row items-center space-x-1">
          <Link href="/" className="text-gray-700">
            <div className="mb-1">
              <Image
                src="/public/favicon/favicon.png"
                alt="task"
                width={130} // Set the width
                height={60} // Set the height
                className="h-[40px] w-[100%] md:h-[50px] lg:h-[60px] lg:w-[50px]"
                id="customfontsize"
              />
            </div>
          </Link>
        </div>

        {/* Right div */}
        <div className="flex justify-end lg:hidden">
          <div className="rounded-full p-3 text-white"></div>
        </div>
      </div>

      {/**Desktop */}
      <div className="hidden w-full items-center justify-between font-semibold lg:flex">
  <div className="flex flex-row items-center">
    <div className="mr-10">
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
      href="/profile"
      className="font-medium text-gray-700 hover:text-green-500"
    >
      Profile
    </Link>

    <Link
      href="/settings"
      className="font-medium text-gray-700 hover:text-green-500"
    >
      Settings
    </Link>
  </div>
</div>

    </div>
  );
};

export default CustomNavbar;
