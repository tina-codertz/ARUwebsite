import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-orange-500 p-4 text-white fixed w-full z-40 top-30">
      {/* Desktop Navbar */}
      <div className="lg:flex lg:justify-between hidden">
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/admission">Admission</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/academics">Academics</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/offices-and-directories">Offices and Directories</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/research-and-innovations">Research and Innovation</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Button (Center Aligned) */}
      <div className="lg:hidden flex justify-center items-center w-10">
        <button
          onClick={toggleSidebar}
          className="text-black z-20 p-6 text-3xl"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Sidebar for Small Devices */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-gray-900 p-4 z-50 transition-transform transform translate-x-0"
          style={{
            transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <ul className="text-white space-y-10">
            <li className="hover:text-yellow-400">
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/about-us" onClick={toggleSidebar}>
                About Us
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/admission" onClick={toggleSidebar}>
                Admission
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/academics" onClick={toggleSidebar}>
                Academics
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/offices-and-directories" onClick={toggleSidebar}>
                Offices and Directories
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link to="/research-and-innovations" onClick={toggleSidebar}>
                Research and Innovations
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
