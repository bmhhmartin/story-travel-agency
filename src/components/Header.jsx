"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                    Travel Agency
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Explore the World</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/" className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group uppercase tracking-wide ${
                pathname === '/' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                Home
                <span className={`absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/' 
                    ? 'w-full left-0' 
                    : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link href="/about" className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group uppercase tracking-wide ${
                pathname === '/about' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                About
                <span className={`absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/about' 
                    ? 'w-full left-0' 
                    : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link href="/tours" className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group uppercase tracking-wide ${
                pathname === '/tours' || pathname.startsWith('/tours/')
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                Tours
                <span className={`absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/tours' || pathname.startsWith('/tours/')
                    ? 'w-full left-0' 
                    : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link href="/blog" className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group uppercase tracking-wide ${
                pathname === '/blog' || pathname.startsWith('/blog/')
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                Blog
                <span className={`absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/blog' || pathname.startsWith('/blog/')
                    ? 'w-full left-0' 
                    : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              <Link href="/contact" className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group uppercase tracking-wide ${
                pathname === '/contact' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                Contact
                <span className={`absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/contact' 
                    ? 'w-full left-0' 
                    : 'left-1/2 w-0 group-hover:w-full group-hover:left-0'
                }`}></span>
              </Link>
              
              {/* CTA Button */}
              <Link href="/tours" className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <nav className="py-4 space-y-2 border-t border-gray-100">
              <Link href="/" className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                pathname === '/' 
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="uppercase tracking-wide">Home</span>
                </div>
              </Link>
              <Link href="/about" className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                pathname === '/about' 
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="uppercase tracking-wide">About</span>
                </div>
              </Link>
              <Link href="/tours" className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                pathname === '/tours' || pathname.startsWith('/tours/')
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="uppercase tracking-wide">Tours</span>
                </div>
              </Link>
              <Link href="/blog" className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                pathname === '/blog' || pathname.startsWith('/blog/')
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span className="uppercase tracking-wide">Blog</span>
                </div>
              </Link>
              <Link href="/contact" className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                pathname === '/contact' 
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="uppercase tracking-wide">Contact</span>
                </div>
              </Link>
              <div className="pt-4">
                <Link href="/tours" className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Book Your Adventure
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
}
  