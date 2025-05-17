'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { Laptop } from '../../data/laptops';
import { laptops } from '../../data/laptops';

// Component that uses searchParams
function ProductDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [laptop, setLaptop] = useState<Laptop | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const product = laptops.find(item => item.id === productId);
      
      if (product) {
        setLaptop(product);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!laptop) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Produk Tidak Ditemukan</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.
            </p>
            <Link 
              href="/catalog" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition"
            >
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumb navigation */}
        <nav className="mb-6 text-sm">
          <ol className="flex space-x-2 text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/catalog" className="hover:text-blue-600 dark:hover:text-blue-400">
                Katalog
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 dark:text-white font-medium truncate">
              {laptop.name}
            </li>
          </ol>
        </nav>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg aspect-square">
              <Image
                src={laptop.image}
                alt={laptop.name}
                fill
                style={{ objectFit: 'contain' }}
                className="p-6"
                priority
              />
            </div>

            {/* Product Information */}
            <div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm rounded-full mb-3 inline-block">
                {laptop.condition}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{laptop.name}</h1>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {laptop.price}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Termasuk: <br />
                  Garansi Service 1 Bulan <br />
                  Garansi Software 2 Bulan <br />
                  Tas & Mouse <br />
                  Free Install Aplikasi
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Spesifikasi</h3>
                
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="w-28 flex-shrink-0 text-gray-500 dark:text-gray-400">Processor</dt>
                    <dd className="text-gray-900 dark:text-white">{laptop.specs}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-28 flex-shrink-0 text-gray-500 dark:text-gray-400">Detail</dt>
                    <dd className="text-gray-900 dark:text-white">{laptop.details}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-28 flex-shrink-0 text-gray-500 dark:text-gray-400">Kondisi</dt>
                    <dd className="text-gray-900 dark:text-white">{laptop.condition}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-28 flex-shrink-0 text-gray-500 dark:text-gray-400">Brand</dt>
                    <dd className="text-gray-900 dark:text-white capitalize">{laptop.brand}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Deskripsi</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {laptop.description}
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a 
                  href={`https://wa.me/6288221957963?text=Halo, saya tertarik dengan laptop ${laptop.name} (${laptop.price}). Apakah masih tersedia?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2">
                    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Beli via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-md transition flex items-center justify-center"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Produk Terkait</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {laptops
              .filter(item => item.brand === laptop.brand && item.id !== laptop.id)
              .slice(0, 4)
              .map((relatedLaptop) => (
                <div 
                  key={relatedLaptop.id} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
                >
                  <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 aspect-square">
                    <Image
                      src={relatedLaptop.image}
                      alt={relatedLaptop.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-3"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">{relatedLaptop.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{relatedLaptop.specs}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{relatedLaptop.price}</span>
                      <Link 
                        href={`/catalog/detail?id=${relatedLaptop.id}`}
                        className="text-xs bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded transition"
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}          </div>
        </div>
      </div>
    </div>
  );
}

// Wrapper component with Suspense
export default function CatalogDetails() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <ProductDetails />
    </Suspense>
  );
}
