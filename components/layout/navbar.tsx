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
                    width={200} // Set the width
                    height={75} // Set the height
                    className="h-[50px] w-[100%] md:h-[50px] lg:h-[60px] lg:w-[50px]"
                  />
                </div>
              </Link>
            </h1>
          </div>

          <div className="flex flex-row items-center space-x-5">
            <Link
              href="/post-task"
              className="rounded-3xl bg-green-500  px-5 py-[6px] font-medium text-white hover:bg-sky-500"
            >
              Post a task
            </Link>

            <Link
              href="/browse-tasks"
              className="font-medium text-gray-700 hover:text-green-500"
            >
              Browse tasks
            </Link>

            <Link
              href="/blog"
              className="font-medium text-gray-700 hover:text-green-500"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
