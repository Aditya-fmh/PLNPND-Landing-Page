'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample data for laptops
const laptops = [
  {
    id: 1,
    name: 'DELL Vostro 15',
    specs: 'Intel Core i5 Gen 7',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 3.300.000',
    condition: 'Excellent',
    description: 'Laptop bisnis dengan performa handal dan baterai tahan lama.',
    image: '/Vostro.jpg',
    brand: 'dell',
  },
  {
    id: 2,
    name: 'HP EliteBook 840 G3',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.000.000',
    condition: 'Very Good',
    description: 'Laptop bisnis premium dengan performa stabil dan desain portabel.',
    image: '/HP.jpg',
    brand: 'hp',
  },
  {
    id: 3,
    name: 'Lenovo ThinkPad T460',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 256 GB, Display 14", Keyboard Backlight',
    price: 'Rp 3.250.000',
    condition: 'Excellent',
    description: 'Laptop bisnis tangguh dengan keyboard backlight dan performa stabil.',
    image: '/T460.jpg',
    brand: 'lenovo',
  },
  {
    id: 4,
    name: 'Toshiba Dynabook B55',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 2.600.000',
    condition: 'Very Good',
    description: 'Laptop bisnis dengan harga terjangkau dan performa stabil.',
    image: '/B55.jpg',
    brand: 'toshiba',
  },
  {
    id: 5,
    name: 'Toshiba Dynabook B65',
    specs: 'Intel Core i5 Gen 7',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 2.700.000',
    condition: 'Good',
    description: 'Laptop bisnis dengan performa yang lebih baik dari seri sebelumnya.',
    image: '/B65.jpg',
    brand: 'toshiba',
  },
  {
    id: 6,
    name: 'Toshiba Dynabook G83',
    specs: 'Intel Core i5 Gen 8',
    details: 'RAM 8 GB, SSD 256 GB, Display 13,3"',
    price: 'Rp 3.500.000',
    condition: 'Excellent',
    description: 'Laptop bisnis premium dengan desain ringkas dan performa tinggi.',
    image: '/G83.jpg',
    brand: 'toshiba',
  },
];

export default function Catalog() {
  const [filteredLaptops, setFilteredLaptops] = useState(laptops);
  const [filters, setFilters] = useState({
    price: '',
    brand: '',
    processor: ''
  });

  // Apply filters whenever the filter state changes
  useEffect(() => {
    let result = [...laptops];
    
    // Filter by brand
    if (filters.brand) {
      result = result.filter(laptop => laptop.brand === filters.brand);
    }
    
    // Filter by processor
    if (filters.processor) {
      result = result.filter(laptop => {
        if (filters.processor === 'i5') {
          return laptop.specs.includes('Core i5');
        } else if (filters.processor === 'i7') {
          return laptop.specs.includes('Core i7');
        }
        return true;
      });
    }
    
    // Sort by price
    if (filters.price === 'low') {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''));
        const priceB = parseInt(b.price.replace(/\D/g, ''));
        return priceA - priceB;
      });
    } else if (filters.price === 'high') {
      result.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''));
        const priceB = parseInt(b.price.replace(/\D/g, ''));
        return priceB - priceA;
      });
    }
    
    setFilteredLaptops(result);
  }, [filters]);
  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Katalog Laptop</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan laptop bekas berkualitas dengan harga terjangkau
          </p>
        </div>
        
        {/* Filters - Simple version */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Harga
              </label>
              <select 
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Harga</option>
                <option value="low">Harga Terendah</option>
                <option value="high">Harga Tertinggi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Merk
              </label>
              <select 
                name="brand"
                value={filters.brand}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Merk</option>
                <option value="lenovo">Lenovo</option>
                <option value="hp">HP</option>
                <option value="dell">Dell</option>
                <option value="toshiba">Toshiba</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Processor
              </label>
              <select 
                name="processor"
                value={filters.processor}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Processor</option>
                <option value="i5">Intel Core i5</option>
                <option value="i7">Intel Core i7</option>
              </select>
            </div>
          </div>
          
          {/* Reset filters button */}
          {(filters.price || filters.brand || filters.processor) && (
            <div className="mt-4 text-right">
              <button
                onClick={() => setFilters({ price: '', brand: '', processor: '' })}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
          {/* Laptop Grid with Empty State */}
        {filteredLaptops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredLaptops.map((laptop) => (
              <div 
                key={laptop.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
              >              
                <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 aspect-square">
                  {/* Image for all laptops */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Image
                      src={laptop.image}
                      alt={laptop.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-3"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full mb-2 inline-block">
                    {laptop.condition}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">{laptop.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 font-medium">{laptop.specs}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{laptop.details}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-2">{laptop.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{laptop.price}</span>
                    <Link 
                      href={`/catalog/${laptop.id}`}
                      className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tidak Ada Laptop Yang Sesuai</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Maaf, tidak ada laptop yang sesuai dengan filter yang dipilih. Silakan coba filter yang berbeda.
            </p>
            <button
              onClick={() => setFilters({ price: '', brand: '', processor: '' })}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
