import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pusat Laptop Nusantara</h3>
            <p className="text-gray-300 mb-2">Toko laptop bekas berkualitas di Pangandaran</p>
            <div className="flex items-center mt-4 text-gray-300">
              <FaClock className="mr-2" />
              <p>08:00 - 19:30 WIB</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-300 hover:text-white transition">
                  Katalog Laptop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <div className="flex items-center mb-3 text-gray-300">
              <FaWhatsapp className="mr-2 text-green-500" />
              <a href="https://wa.me/6288221957963" className="hover:text-white transition">
                088221957963
              </a>
            </div>
            <div className="flex items-center mb-3 text-gray-300">
              <FaInstagram className="mr-2 text-pink-500" />
              <a href="https://instagram.com/laptopnusantara.pnd" className="hover:text-white transition">
                @laptopnusantara.pnd
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <p>Pangandaran, Jawa Barat</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Pusat Laptop Nusantara Pangandaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
