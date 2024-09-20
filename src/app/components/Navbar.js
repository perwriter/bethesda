"use client"
import Link from "next/link";
import { useState } from "react";

const NavItem = ({ href, children, isPrimary }) => (
  <li>
    <Link
      href={href}
      className={`block rounded-md px-5 py-2.5 text-sm font-medium transition ${
        isPrimary
          ? "bg-primary text-white hover:bg-primary"
          : "text-black hover:bg-primary"
      }`}
    >
      {children}
    </Link>
  </li>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white ">
      <div className=" px-8 mx-auto  flex h-20  w-full items-center">
        <a className="block text-primary" href="/">
          <img src="../logo1.png" className="w-16 h-auto" alt="logo" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-lg font-bold">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/donation">Donation</NavItem>
              <NavItem href="/history">History</NavItem>
              <NavItem href="/gallery">Gallery</NavItem>
              <NavItem href="/contact" isPrimary>Contact</NavItem>
            </ul>
          </nav>

          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center md:hidden h-3/4">
          <button className="absolute top-4 right-4 text-gray-600" onClick={toggleMenu}>
            &times;
          </button>
          <ul className="flex flex-col items-center gap-6 text-lg">
            <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
            <NavItem href="/donation" onClick={toggleMenu}>Donation</NavItem>
            <NavItem href="/history" onClick={toggleMenu}>History</NavItem>
            <NavItem href="/gallery" onClick={toggleMenu}>Gallery</NavItem>
            <NavItem href="/contact" isPrimary onClick={toggleMenu}>Contact</NavItem>
          </ul>
        </div>
      )}
    </header>
  );
}
