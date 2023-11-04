"use client";
import React from "react";
import Image from "next/image";
function redirectToYouTube() {
  window.location.href = 'https://www.youtube.com/channel/UCXh8wC8rrctCESTKed2aDMQ';
}
const HeroSection = () => {
  return (
    <div className="flex flex-row ">
      <div className="flex-1 flex-col flex justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start ">
        <p className=" mt-20 font-bold sm:text-sm lg:text-5xl">
          An LMS solution to your
        </p>
        <p className=" font-bold sm:text-sm lg:text-5xl">learning challenge.</p>
        <p className=" mt-5 text-lg">
          Empower your learning journey with our cutting-edge LMS.{" "}
        </p>
        <p className=" text-lg">
          Accessible from the office, on the go, or at home
        </p>
        <div className="mt-5 flex flex-row">
          <button
            className=" shadow-md bg-red-500 text-white hover:bg-red-600 hover:text-white py-2 px-4 rounded"
            onClick={() => {
              // Handle button click event here
            }}
          >
            Learn More
          </button>

          <div className="flex items-center cursor-pointer" onClick={redirectToYouTube}>
          <Image
          src="/assets/images/icon_play.png" // Replace with the actual path to your image
          alt="Image Alt Text"
          width={30} // Set the width of the image
          height={30} // Set the height of the image
        className="ml-5 mr-2"
        />
            Watch demo
          </div>
        </div>
      </div>
      <div className="flex-1 mt-2 flex justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start">
        {/* Insert the image below the div */}
        <Image
          src="/assets/images/hero_images.png" // Replace with the actual path to your image
          alt="Image Alt Text"
          width={800} // Set the width of the image
          height={200} // Set the height of the image
        />
      </div>
    </div>
  );
};

export default HeroSection;
