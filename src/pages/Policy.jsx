import React from 'react';
import { FaShippingFast, FaUndoAlt, FaUserShield } from 'react-icons/fa';

const Policy = () => {
  return (
    <section className="bg-[#f2f2eb] text-[#0d0d0d] poppins-regular px-6 py-10 md:px-12 lg:px-24 mt-20">
      <h1 className="text-2xl lg:text-3xl text-center mb-10 tracking-wide">Our Policies</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Shipping Policy */}
        <div className="relative p-8 bg-white rounded-lg shadow-md border-t-4 border-[#1f818c] transition-transform transform hover:scale-105">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#1f818c] text-[#f2f2eb] p-3 rounded-full">
            <FaShippingFast className="text-2xl" />
          </div>
          <h2 className="text-lg lg:text-2xl mt-8 text-[#1f818c] text-center">Shipping Policy</h2>
          <p className="text-[#0d0d0d] text-sm mt-4 text-center">
            Orders are processed within 2-3 business days and shipping times are 5-7 business days. Tracking will be provided upon dispatch.
          </p>
        </div>

        {/* Return Policy */}
        <div className="relative p-8 bg-white rounded-lg shadow-md border-t-4 border-[#bf9999] transition-transform transform hover:scale-105">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#bf9999] text-[#f2f2eb] p-3 rounded-full">
            <FaUndoAlt className="text-2xl" />
          </div>
          <h2 className="text-lg lg:text-2xl mt-8 text-[#bf9999] text-center">Return Policy</h2>
          <p className="text-[#0d0d0d] text-sm mt-4 text-center">
            We offer a 30-day return policy. Items must be unused and in original packaging. Contact our support team for returns.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="relative p-8 bg-white rounded-lg shadow-md border-t-4 border-[#0d0d0d] transition-transform transform hover:scale-105">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#0d0d0d] text-[#f2f2eb] p-3 rounded-full">
            <FaUserShield className="text-2xl" />
          </div>
          <h2 className="text-lg lg:text-2xl mt-8 text-[#0d0d0d] text-center">Privacy Policy</h2>
          <p className="text-[#0d0d0d] text-sm mt-4 text-center">
            We respect your privacy and protect your personal data. We do not share data with third parties without consent.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Policy;
