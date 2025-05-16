import Image from 'next/image';
import Link from 'next/link';

// Featured laptops data
const featuredLaptops = [
  {
    id: 1,
    name: 'Toshiba Dynabook B55',
    specs: 'Intel Core i5-6200U (Gen 6)',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 2.600.000',
    condition: 'Excellent',
    image: '/B55.jpg',
  },
  {
    id: 2,
    name: 'HP EliteBook 840 G3',
    specs: 'Intel Core i5-6300U (Gen 6)',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.000.000',
    condition: 'Very Good',
    image: '/HP.jpg',
  },
];

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
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs rounded-full mb-2 inline-block">
                  {laptop.condition}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{laptop.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1 font-medium">{laptop.specs}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{laptop.details}</p>
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
