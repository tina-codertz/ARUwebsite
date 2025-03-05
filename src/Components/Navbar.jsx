import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="bg-orange-500 p-4 text-white  fixed w-full z-40 top-30 ">
      <div className="lg:flex lg:justify-between hidden">
        <ul className="flex space-x-6 text-white ">
          <li className="hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="About Us">About Us</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="Admission">Admission</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="Academics">Academics</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="Offices and Directories">Offices and Directories</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="Research and Innovations">Research and Innovation</Link>
          </li>
        </ul>
      </div>

      <button
        onClick={toggleSidebar}
        className="lg:hidden text-white"
        aria-expanded={isSidebarOpen}
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-gray-900 p-4 z-50 transition-transform transform translate-x-0"
        style={{ transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)" }}>
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
