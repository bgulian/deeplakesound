import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wider text-white pr-32">
          Deep Lake Sound<span className="text-indigo-500"></span>
        </Link>
        <nav className="hidden min-[769px]:flex flex-1 items-center justify-between space-x-24 text-sm font-medium text-neutral-400">
          <a href="./about" className="hover:text-white transition">About</a>
          <a href="./just_the_right_gear" className="hover:text-white transition">Gear</a>
          <a href="./thebuildtwo" className="hover:text-white transition">Studio Build</a>
          <a href="./samples" className="hover:text-white transition">Samples</a>
          <a href="./services" className="hover:text-white transition">Services</a>
          <a href="./contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="min-[769px]:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-indigo-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="min-[769px]:hidden border-t border-neutral-800 px-6 py-4 text-sm font-medium text-neutral-300">
          <div className="flex flex-col gap-4">
            <a href="./about" onClick={closeMenu} className="hover:text-white transition">About</a>
            <a href="./just_the_right_gear" onClick={closeMenu} className="hover:text-white transition">Gear</a>
            <a href="./thebuildtwo" onClick={closeMenu} className="hover:text-white transition">Studio Build</a>
            <a href="./samples" onClick={closeMenu} className="hover:text-white transition">Samples</a>
            <a href="./services" onClick={closeMenu} className="hover:text-white transition">Services</a>
            <a href="./contact" onClick={closeMenu} className="hover:text-white transition">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
