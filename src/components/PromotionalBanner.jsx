import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="poppins-medium relative px-4 lg:px-12 mt-0  bg-[#0d0d0d] text-[#f2f2eb] mb-20">
      <div className="container mx-auto py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl leading-tight mb-6">
            Exclusive <span className="text-[#1f818c]">Holiday Deals</span> on{' '}
            <span className="text-[#bfbdb4]">Watches</span>,{' '}
            <span className="text-[#bf9999]">Headphones</span>, and{' '}
            <span className="text-[#bf9999]">Bluetooth Speakers</span>
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Limited Time Offer: Get up to{' '}
            <span className="text-[#bf9999]">50% OFF</span> on selected items!
          </p>
          <p className="text-sm md:text-md mb-6">
            Hurry up, offer ends <span className="text-[#1f818c]">Soon</span>!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/collection">
                <button className="px-8 py-3 bg-[#1f818c] hover:bg-[#bfbdb4] text-[#0d0d0d] rounded-md shadow-lg transition duration-300">
                    Shop Now
                </button>
            </Link>
            <Link to="/about">
                <button className="px-8 py-3 border border-[#1f818c] text-[#1f818c] hover:bg-[#bfbdb4] hover:text-[#0d0d0d] rounded-md shadow-lg transition duration-300">
                    Learn More
                </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-96 mt-6 md:mt-0 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1548171838-1fd4cb4ab854?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Watches"
            className="w-full h-full object-cover transform rotate-6 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
