import Image from 'next/image';
import Link from 'next/link';
import { laptops } from '../data/laptops';

// Get featured laptops from the shared data
const featuredLaptops = laptops
  .filter(laptop => laptop.id === 9 || laptop.id === 7)
  .map(laptop => ({
    ...laptop,
    // Override condition for featured display with custom tags
    condition: laptop.id === 9 ? ['Harga Termurah', 'Popular'] : ['Best Deal', 'Terlaris']
  }));

export default function FeaturedLaptops() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Laptop Pilihan</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Koleksi laptop bekas berkualitas dengan harga terjangkau
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredLaptops.map((laptop) => (            <div key={laptop.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">              <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 flex justify-center items-center aspect-[4/3]">
                {laptop.discountPercentage && (
                  <div className="absolute top-3 left-3 z-10 bg-red-500 text-white font-bold px-3 py-1 rounded-md text-sm">
                    -{laptop.discountPercentage}%
                  </div>
                )}
                <div className="relative w-full h-full py-3 px-4 flex justify-center items-center">
                  <Image
                    src={laptop.image}
                    alt={laptop.name}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    priority={laptop.id === 1}
                  />
                </div>
              </div><div className="p-6">
                <div className="flex flex-wrap gap-1 mb-2">
                  {Array.isArray(laptop.condition) ? (
                    laptop.condition.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full inline-block">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full inline-block">
                      {laptop.condition}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{laptop.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1 font-medium">{laptop.specs}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{laptop.details}</p>                <div className="mt-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{laptop.price}</span>
                    {laptop.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {laptop.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link 
                    href={`/catalog/detail?id=${laptop.id}`}
                    className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Lihat Semua Laptop
          </Link>
        </div>
      </div>
    </section>
  );
}
