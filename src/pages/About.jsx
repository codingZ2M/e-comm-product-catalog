import React from 'react';
import { FaMicrophoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-[#fff] py-16 px-6 sm:px-8 md:px-20 lg:px-40 shadow-lg border rounded-lg poppins-regular">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl lg:text-3xl  text-[#0d0d0d]">Who We Are</h2>
          <p className="mt-4 text-sm lg:text-lg text-[#bfbdb4] max-w-2xl mx-auto">
            Driven by innovation, quality, and customer satisfaction, we bring you gadgets that enhance your lifestyle.
          </p>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <FaMicrophoneAlt className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 cursor-pointer text-[#0D0D0D] mx-auto lg:mx-0" />
          <div className="space-y-6 text-[#0d0d0d]">
            <h3 className="text-lg lg:text-2xl text-[#1f818c]">About Us</h3>
            <p className="text-sm lg:text-lg leading-relaxed text-justify">
              Our store is your one-stop destination for cutting-edge tech gadgets. We source the latest and most innovative products, from wristwatches to smart home devices, ensuring top-notch quality and a premium shopping experience.
            </p>
            <p className="text-sm lg:text-lg leading-relaxed text-justify">
              With us, you're not just purchasing a gadget; you're stepping into a world of possibilities, where technology seamlessly integrates with everyday life.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#1f818c] text-[#f2f2eb] rounded-lg py-12 px-8 sm:px-12 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-lg lg:text-2xl">Our Values</h3>
            <p className="text-sm lg:text-lg mt-4 max-w-2xl mx-auto">
              We believe in values that guide us to be more than just a store.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <h4 className="text-md lg:text-2x">Innovation</h4>
              <p className="text-md text-[#bfbdb4]">Leading in new tech and trends.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-md lg:text-2x">Quality</h4>
              <p className="text-md text-[#bfbdb4]">Only the best products for you.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-md lg:text-2x">Sustainability</h4>
              <p className="text-md text-[#bfbdb4]">Eco-conscious product choices.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-md lg:text-2x">Customer First</h4>
              <p className="text-md text-[#bfbdb4]">Your satisfaction is our goal.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center">
          <h3 className="text-lg lg:text-2xl text-[#0d0d0d]">Our Mission</h3>
          <p className="mt-4 text-sm lg:text-lg text-[#0d0d0d] max-w-3xl mx-auto leading-relaxed text-justify">
            To provide you with high-quality gadgets that elevate your daily experiences. We aim to bridge the gap between people and technology, making innovation accessible, intuitive, and stylish.
          </p>
          <p className="mt-4 text-sm lg:text-lg text-[#0d0d0d] max-w-3xl mx-auto leading-relaxed text-justify">
            Join us on this journey towards a smarter, more connected world, where technology serves as an extension of who you are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
