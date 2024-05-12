"use client";
import React from "react";
import Image from "next/image";
function redirectToYouTube() {
  window.location.href = 'https://www.youtube.com/channel/UCXh8wC8rrctCESTKed2aDMQ';
}
const HeroSection = () => {
  return (
    <div className=" flex flex-col md:flex-row lg:flex-row hero min-h-screen">
      <div className="md:w-1/2 lg:w-1/2 md:flex-col lg:flex-col align-center justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start ">
        <p className="mt-10 font-bold text-sm sm:text-lg lg:text-5xl">
          An LMS solution to your
        </p>
        <p className="font-bold text-sm sm:text-lg lg:text-5xl ">learning challenge.</p>
        <p className="mt-3 text-base sm:text-lg lg:mt-7">
          Empower your learning journey with our cutting-edge LMS.{" "}
        </p>
        <p className="text-base sm:text-lg ">
          Accessible from the office, on the go, or at home
        </p>
        <div className="mt-7 flex flex-col md:flex-row lg:flex-row ">
          <button
            className="shadow-md bg-red-500 text-white hover:bg-red-600 hover:text-white py-1 px-3 rounded mb-2 md:mb-0 lg:mb-0 md:mr-2 lg:mr-2 "
            onClick={() => {
              // Handle button click event here
            }}
          >
            Learn More
          </button>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/assets/images/icon_play.png"
              alt="Image Alt Text"
              width={30}
              height={30}
              className="ml-2 md:ml-5 lg:ml-5 mr-2"
            />
            Watch demo
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2 mt-5 md:mt-0 lg:mt-0 flex justify-center items-center z-[-1]">
        <Image
          src="/assets/images/hero_images.png"
          alt="Image Alt Text"
          width={800}
          height={200}
          className="w-full md:w-auto lg:w-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
