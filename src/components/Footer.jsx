import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="poppins-regular bg-[#0d0d0d] text-[#f2f2eb] py-10 px-4 lg:px-12 mt-10 lg:mt-20">
      <div className="grid gap-10 md:grid-cols-3">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl mb-4 text-[#1f818c]">CZ2M Gadgets</h2>
          <p className="text-[#bfbdb4] text-sm">
            Your ultimate destination for the latest and greatest in tech gadgets.
            Discover high-quality products designed to simplify and enhance your life.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-md mb-4 text-[#f2f2eb]">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-[#bfbdb4] hover:text-[#1f818c] transition">Home</Link></li>
            <li><Link to="/collection" className="text-[#bfbdb4] hover:text-[#1f818c] transition">Collection</Link></li>
            <li><Link to="/about" className="text-[#bfbdb4] hover:text-[#1f818c] transition">About</Link></li>
            <li><Link to="/contact" className="text-[#bfbdb4] hover:text-[#1f818c] transition">Contact</Link></li>
          </ul>
        </div>
        
        {/* Contact & Social Media */}
        <div>
          <h2 className="mb-4 text-md text-[#f2f2eb]">Contact Us</h2>
          <p className="text-[#bfbdb4] text-sm mb-4">Email: support@gadgethaven.com</p>
          <p className="text-[#bfbdb4] text-sm mb-4">Phone: +1 (234) 567-890</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-[#1f818c] rounded-full hover:bg-[#bf9999] transition">
              <FaFacebookF className="text-[#f2f2eb]" />
            </a>
            <a href="#" className="p-3 bg-[#1f818c] rounded-full hover:bg-[#bf9999] transition">
              <FaTwitter className="text-[#f2f2eb]" />
            </a>
            <a href="#" className="p-3 bg-[#1f818c] rounded-full hover:bg-[#bf9999] transition">
              <FaInstagram className="text-[#f2f2eb]" />
            </a>
            <a href="#" className="p-3 bg-[#1f818c] rounded-full hover:bg-[#bf9999] transition">
              <FaLinkedinIn className="text-[#f2f2eb]" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#bfbdb4] pt-6 text-center text-sm text-[#bfbdb4]">
        <p>&copy; {new Date().getFullYear()} CZ2M Gadgets. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
