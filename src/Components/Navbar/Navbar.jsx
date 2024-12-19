import React, { useState } from 'react';
import logo from './logo.svg';
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (  
    <header className="bg-[#181b23] p-5 text-white relative">
      <div className="navbar container flex items-center justify-between mx-auto">
        <div className="logo_items flex items-center gap-24">
          <div className="logo">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </div>

          <div
            className={`nav_items flex items-center gap-12 transition-all duration-300 ease-in-out
              ${isMobileMenuOpen ? 'left-0' : 'left-[-100%]'} 
              md:left-0 md:relative md:flex-row md:gap-12 absolute md:flex
              top-0
              ${isMobileMenuOpen ? 'fixed top-0 left-0 h-[100vh] w-full bg-black flex-col pt-16' : 'hidden'}
            `}
          >
            <a href="#" className="text-white">THE STUDIO</a>
            <a href="#" className="text-white">PROJECTS</a>
            <a href="#" className="text-white">ARCHITECTURE</a>
            <a href="#" className="text-white">BLOG</a>

            <a href="#">
              <button
                id="mobile_btn"
                className="bg-transparent border border-white p-2 text-white md:hidden block"
              >
                CONTACT
              </button>
            </a>

            {isMobileMenuOpen && (
              <div
                className="close_btn absolute top-5 right-5 text-white text-3xl cursor-pointer"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <IoCloseOutline />
              </div>
            )}
          </div>
        </div>

        <div
          className="hamburger md:hidden text-3xl cursor-pointer text-white"
          onClick={toggleMobileMenu}
          aria-label="Open Menu"
        >
          <CiMenuFries />
        </div>

        <div className="nav_btn hidden md:block">
          <a href="#">
            <button className="bg-transparent border border-white p-2 text-white">
              CONTACT
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
