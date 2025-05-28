'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { laptops } from '../data/laptops';

export default function Catalog() {
  const [filteredLaptops, setFilteredLaptops] = useState(laptops);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    price: '',
    brand: '',
    processor: '',
    condition: ''
  });  // Apply filters and search whenever the filter state or search query changes
  useEffect(() => {
    let result = [...laptops];
    
    // Apply search query if it exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(laptop => 
        laptop.name.toLowerCase().includes(query) || 
        laptop.specs.toLowerCase().includes(query) || 
        laptop.details.toLowerCase().includes(query) || 
        laptop.description.toLowerCase().includes(query)
      );
    }
    
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
        } else if (filters.processor === 'Celeron') {
          return laptop.specs.includes('Celeron');
        }
        return true;
      });
    }
    
    // Filter by condition
    if (filters.condition) {
      result = result.filter(laptop => {
        if (Array.isArray(laptop.condition)) {
          return laptop.condition.includes(filters.condition);
        } else {
          return laptop.condition === filters.condition;
        }
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
  }, [filters, searchQuery]);  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
    // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
    // Clear search query
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Reset all filters and search
  const resetAll = () => {
    setFilters({ price: '', brand: '', processor: '', condition: '' });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Katalog Laptop</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Temukan laptop bekas berkualitas dengan harga terjangkau
          </p>
        </div>
          {/* Search bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari laptop berdasarkan nama, spesifikasi..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 py-2 text-sm md:text-base border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
            {searchQuery && (
              <button 
                onClick={clearSearch} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Filters - Simple version */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 mb-8">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">Filter</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Harga
              </label>
              <select 
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
                className="w-full px-2 py-1 md:px-3 md:py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Harga</option>
                <option value="low">Harga Terendah</option>
                <option value="high">Harga Tertinggi</option>
              </select>
            </div>            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Merk
              </label>
              <select 
                name="brand"
                value={filters.brand}
                onChange={handleFilterChange}
                className="w-full px-2 py-1 md:px-3 md:py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Merk</option>
                <option value="lenovo">Lenovo</option>
                <option value="hp">HP</option>
                <option value="dell">Dell</option>
                <option value="toshiba">Toshiba</option>
              </select>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Processor
              </label>
              <select 
                name="processor"
                value={filters.processor}
                onChange={handleFilterChange}
                className="w-full px-2 py-1 md:px-3 md:py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Processor</option>
                <option value="Celeron">Intel Celeron</option>
                <option value="i5">Intel Core i5</option>
                <option value="i7">Intel Core i7</option>
              </select>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kegunaan
              </label>
              <select 
                name="condition"
                value={filters.condition}
                onChange={handleFilterChange}
                className="w-full px-2 py-1 md:px-3 md:py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Semua Kegunaan</option>
                <option value="Sekolah">Sekolah</option>
                <option value="Kantoran">Kantoran</option>
                <option value="Desain Grafis">Desain Grafis</option>
                <option value="Gaming Ringan">Gaming Ringan</option>
              </select>
            </div>
          </div>          {/* Reset filters and search button */}
          {(filters.price || filters.brand || filters.processor || filters.condition || searchQuery) && (
            <div className="mt-3 md:mt-4 text-right">
              <button
                onClick={resetAll}
                className="text-xs md:text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Reset Semua
              </button>
            </div>
          )}
        </div>
        
        {/* Active filters badges */}
        {(searchQuery || filters.price || filters.brand || filters.processor || filters.condition) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {searchQuery && (
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center">
                <span>Pencarian: {searchQuery}</span>
                <button onClick={clearSearch} className="ml-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            {filters.brand && (
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center">
                <span>Merk: {filters.brand}</span>
                <button onClick={() => setFilters(prev => ({ ...prev, brand: '' }))} className="ml-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            {filters.processor && (
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center">
                <span>Processor: {filters.processor === 'i5' ? 'Intel Core i5' : filters.processor === 'i7' ? 'Intel Core i7' : 'Intel Celeron'}</span>
                <button onClick={() => setFilters(prev => ({ ...prev, processor: '' }))} className="ml-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            {filters.condition && (
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center">
                <span>Kegunaan: {filters.condition}</span>
                <button onClick={() => setFilters(prev => ({ ...prev, condition: '' }))} className="ml-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            {filters.price && (
              <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center">
                <span>Urutan: {filters.price === 'low' ? 'Termurah' : 'Termahal'}</span>
                <button onClick={() => setFilters(prev => ({ ...prev, price: '' }))} className="ml-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            <button 
              onClick={resetAll} 
              className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Reset Semua
            </button>
          </div>
        )}
        
        {/* Laptop Grid with Empty State */}
        {filteredLaptops.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredLaptops.map((laptop) => (
              <div 
                key={laptop.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
              >                <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 aspect-square">
                  {/* Discount badge */}
                  {laptop.discountPercentage && (
                    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white font-bold px-2 py-1 rounded-md text-xs">
                      -{laptop.discountPercentage}%
                    </div>
                  )}
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
                </div><div className="p-3 md:p-6">                  <div className="flex flex-wrap gap-1 mb-2">
                    {Array.isArray(laptop.condition) ? (
                      laptop.condition.map((tag, index) => (
                        <button 
                          key={index} 
                          onClick={() => setFilters(prev => ({ ...prev, condition: tag }))}
                          className="px-1 py-0.5 md:px-2 md:py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full inline-block hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer transition-colors"
                        >
                          {tag}
                        </button>
                      ))                    ) : (
                      <button 
                        onClick={() => setFilters(prev => ({ ...prev, condition: laptop.condition as string }))}
                        className="px-1 py-0.5 md:px-2 md:py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full inline-block hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer transition-colors"
                      >
                        {laptop.condition}
                      </button>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mt-2">{laptop.name}</h3>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-2 font-medium">{laptop.specs}</p>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">{laptop.details}</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{laptop.description}</p>                <div className="mt-3 md:mt-4 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-bold">{laptop.price}</span>
                      {laptop.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {laptop.originalPrice}
                        </span>
                      )}
                    </div>
                    <Link 
                      href={`/catalog/detail?id=${laptop.id}`}
                      className="text-xs md:text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 md:py-2 md:px-4 rounded transition"
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
            </p>            <button
              onClick={resetAll}
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
