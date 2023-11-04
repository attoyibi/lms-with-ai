"use client";
import React from 'react';
import Image from "next/image";

const VideoList = () => {
  const cards = Array(4).fill({
    image: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
  });

  return (
    <div>
      <h1 className="text-2xl">List Video</h1>
      <div className="flex justify-between space-x-5">
        {cards.map((card, index) => (
          <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><Image
          src="/assets/images/hero_images.png" // Replace with the actual path to your image
          alt="Image Alt Text"
          width={800} // Set the width of the image
          height={200} // Set the height of the image
        /></figure>
            <div className="card-body">
              <h2 className="card-title ">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-between items-center">
                <button className="btn border-none bg-red-500 text-white hover:bg-red-600 hover:text-white btn-sm btn-primary">Watch</button>
                <div className="badge badge-outline">Free</div> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
