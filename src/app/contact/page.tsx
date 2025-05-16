'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet marker icon in Next.js
const customIcon = () => {
  return new L.Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon-2x.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Store location (Pusat Laptop Nusantara Pangandaran)
// Exact coordinates from Google Maps
const storeLocation: [number, number] = [-7.6785631, 108.6372878];

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Add marker icon files if they don't already exist in the public folder
    const addMarkerIcons = async () => {
      try {
        // In a real app, you'd copy these files in your build process
        // This is a simulated approach for demonstration
        console.log('Map initialization complete');
      } catch (error) {
        console.error('Error setting up map markers:', error);
      }
    };
    
    addMarkerIcons();
  }, []);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Hubungi Kami</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ada pertanyaan atau ingin mengetahui lebih lanjut tentang produk kami? Jangan ragu untuk menghubungi kami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-300" />
                </div>
                <div>                  <h3 className="font-semibold text-gray-900 dark:text-white">Alamat</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Ruko Lovina No.37, Wonoharjo, Kec. Pangandaran, Kab. Pangandaran, Jawa Barat 46396
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    <a 
                      href="https://wa.me/6288221957963" 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      +62 88221957963
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaInstagram className="text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Instagram</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    <a 
                      href="https://instagram.com/laptopnusantara.pnd" 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      @laptopnusantara.pnd
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Jam Buka</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Setiap Hari: 08:00 - 19:30 WIB
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">
                    Nama
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
                    Pesan
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
            {isMounted && (
              <div className="h-full min-h-[500px]">
                <MapContainer 
                  center={storeLocation} 
                  zoom={15} 
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />                  <Marker position={storeLocation} icon={customIcon()}>
                    <Popup>
                      <div className="text-center p-2">
                        <strong className="text-lg">Pusat Laptop Nusantara Pangandaran</strong><br />
                        <span className="text-sm text-gray-600">Toko Laptop Bekas Berkualitas</span><br />
                        <hr className="my-2" />
                        Jam Buka: 08:00 - 19:30 WIB<br />
                        WhatsApp: <a href="https://wa.me/6288221957963" className="text-blue-600 hover:underline">088221957963</a>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
