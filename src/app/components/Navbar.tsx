import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">          <Image 
            src="/new-logo.png" 
            alt="Pusat Laptop Nusantara Pangandaran" 
            width={50} 
            height={50} 
            className="rounded-md"
          />
          <div className="hidden md:flex flex-col">
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">Pusat Laptop Nusantara</h1>
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
        
        <div className="md:hidden">
          {/* Mobile menu button - we'll implement this later if needed */}
          <button className="text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
