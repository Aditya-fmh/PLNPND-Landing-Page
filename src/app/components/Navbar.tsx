'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Function to close menu and restore scrolling
  const closeMenu = () => {
    setMobileMenuOpen(false);
    // Use setTimeout to ensure the menu transition completes before restoring scrolling
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 300); // Match the transition duration from CSS (300ms)
  };
  
  // Toggle mobile menu and manage body scroll
  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      // Opening menu
      setMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Closing menu
      closeMenu();
    }
  };  // Ensure body scrolling is properly managed
  useEffect(() => {
    // Set initial state
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
      // Handle clicks on links within the mobile menu to ensure proper navigation
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if clicked element is a link or inside a link in the mobile menu
      const linkElement = target.closest('a');
      if (linkElement && mobileMenuOpen) {
        // Close menu with delay to allow smooth transition
        closeMenu();
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      // Cleanup on component unmount
      document.removeEventListener('click', handleLinkClick);
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);
  
  // Force restore scrolling on page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !mobileMenuOpen) {
        document.body.style.overflow = 'auto';
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [mobileMenuOpen]);
  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [mobileMenuOpen]);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-900">      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">        <Link href="/" className="flex items-center space-x-2 md:space-x-3 z-50 max-w-[70%]">          <Image 
            src="/new-logo.png" 
            alt="Pusat Laptop Nusantara Pangandaran" 
            width={40} 
            height={40} 
            className="rounded-md min-w-[40px]"
          />
          <div className="flex flex-col">
            <h1 className="text-sm md:text-lg font-bold text-gray-800 dark:text-white truncate">Pusat Laptop Nusantara</h1>
            <p className="text-xs text-gray-600 dark:text-gray-300">Pangandaran</p>
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Beranda
          </Link>
          <Link href="/catalog" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Katalog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Kontak
          </Link>
        </div>
          <div className="md:hidden z-50">
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>{/* Fullscreen mobile menu with slide animation */}      <div 
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden flex flex-col pt-16`}
      >
          <div className="flex flex-col items-center justify-center flex-grow">          <div className="flex flex-col space-y-10 text-center">            <Link 
              href="/" 
              className="text-2xl text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => {
                closeMenu();
                // Allow default navigation behavior
              }}
            >
              Beranda
            </Link>
            <Link 
              href="/catalog" 
              className="text-2xl text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => {
                closeMenu();
                // Allow default navigation behavior
              }}
            >
              Katalog
            </Link>
            <Link 
              href="/contact" 
              className="text-2xl text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => {
                closeMenu();
                // Allow default navigation behavior
              }}
            >
              Kontak
            </Link>
          </div>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Pusat Laptop Nusantara Pangandaran</p>
        </div>
      </div>
    </nav>
  );
}
