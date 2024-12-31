import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white py-10 w-[100%]">
      {/* Headline */}
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl poppins-light text-[#0d0d0d] mb-12 leading-tight px-4">
        Discover Premium Watches, Headphones, and Bluetooth Speakers for Your Lifestyle.
      </h1>

      {/* Image Row */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 w-full px-4">
        {/* Watch Column */}
        <div
          className="relative group h-60 sm:h-72 flex-shrink-0 rounded-r-lg overflow-hidden w-full sm:w-[26%]"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2021/11/03/05/33/fitness-band-6764739_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Button positioned in the top-right corner */}
           <Link to="/collection">
            <button className="absolute top-4 right-4 bg-transparent border border-[#F2F2EB] text-[#F2F2EB] poppins-light text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 cursor-pointer">
              Buy Now
            </button>
          </Link>
          {/* Styled h1 block */}
          <div className="absolute left-4 bottom-4 bg-transparent text-white rounded-xl px-4 sm:px-6 py-4 shadow-lg backdrop-blur-md w-auto max-w-xl">
            <p className="poppins-light text-xs sm:text-sm leading-relaxed">
              Track your fitness and stay connected with style.
            </p>
          </div>
        </div>

        {/* Headphone Column */}
        <div
          className="relative group h-60 sm:h-72 flex-shrink-0 rounded-lg overflow-hidden w-full sm:w-[37%]"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2015/09/04/23/28/headphones-923186_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Button positioned in the top-right corner */}
          <Link to="/collection">
            <button className="absolute top-4 right-4 bg-transparent border border-[#F2F2EB] text-[#F2F2EB] poppins-light text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 cursor-pointer">
              Buy Now
            </button>
          </Link>
          {/* Styled h1 block */}
          <div className="absolute left-4 bottom-4 bg-transparent text-white rounded-xl px-4 sm:px-6 py-4 shadow-lg backdrop-blur-md w-auto max-w-xl">
            <p className="poppins-light text-xs sm:text-sm leading-relaxed">
              Exceptional Sound, Ultimate Comfort.
            </p>
          </div>
        </div>

        {/* Bluetooth Speaker Column */}
        <div
          className="relative group h-60 sm:h-72 flex-shrink-0 rounded-l-lg overflow-hidden w-full sm:w-[37%]"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Button positioned in the top-right corner */}
          <Link to="/collection">
            <button className="absolute top-4 right-4 bg-transparent border border-[#F2F2EB] text-[#F2F2EB] poppins-light text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 cursor-pointer">
              Buy Now
            </button>
          </Link>
          {/* Styled h1 block */}
          <div className="absolute left-4 bottom-4 bg-transparent text-white rounded-xl px-4 sm:px-6 py-4 shadow-lg backdrop-blur-md w-auto max-w-xl">
            <p className="poppins-light text-xs sm:text-sm leading-relaxed">
              Music On-the-Go with Clear Sound and Powerful Bass.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
