import React, { useState } from "react";
// import { Link } from "react-router-dom";
import backgroundImg from "../assets/background.png";
import cyberLogo from "../assets/cyber-logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="relative bg-cover bg-initial border-gray-200"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,29,58,0.5)] backdrop-blur-sm z-0" />

      {/* Main navbar content */}
      <div className="relative z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-0 py-2">
        <Link to="/">
          <img
            src={cyberLogo}
            alt="Cyber Warrior 2025 Logo"
            className="h-20 w-auto"
          />
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="gap-5 text-lg font-thai font-bold flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                // to="/about"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-orange-600 md:p-0 dark:text-white md:hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                เกี่ยวกับโครงการ
              </Link>
            </li>
            <li>
              <Link
                // to="/contact"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-orange-600 md:p-0 dark:text-white mmd:hover:text-orange-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ติดต่อ
              </Link>
            </li>
            <li>
              <Link
                // to="/registration"
                className="block py-1 px-4 border-2 border-white rounded-2xl text-lg text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600"
              >
                สมัครเข้าร่วม
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
