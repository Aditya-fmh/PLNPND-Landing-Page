export interface LaptopVariant {
  id: string;
  details: string;
  price: string;
  originalPrice?: string; // Original price before discount
  discountPercentage?: number; // Discount percentage
}

export interface Laptop {
  id: number;
  name: string;
  specs: string;
  details: string;
  price: string;
  originalPrice?: string; // Original price before discount
  discountPercentage?: number; // Discount percentage (e.g., 15 for 15%)
  condition: string | string[];
  description: string;
  image: string;
  brand: string;
  variants?: LaptopVariant[];
}

export const laptops: Laptop[] = [  {
    id: 9,
    name: 'DELL Chromebook P22T',
    specs: 'Intel Celeron N2840',
    details: 'RAM 4 GB, SD 16 GB, Display 11,6"',
    price: 'Rp 1.350.000',
    condition: ['Bekas', 'Sekolah', 'Kantoran'],
    description: 'Laptop Chromebook dengan performa baik untuk tugas sehari-hari.',
    image: '/P22T.jpg',
    brand: 'dell',
  },
  {    id: 10,
    name: 'DELL Latitude 5480',
    specs: 'Intel Core i5 Gen 7',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.500.000',
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis'],
    description: 'Laptop bisnis dengan performa handal dan desain premium.',
    image: '/5480.jpg',
    brand: 'dell',
  },  {
    id: 1,
    name: 'DELL Vostro 15',
    specs: 'Intel Core i5 Gen 7',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 3.300.000',
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis'],
    description: 'Laptop bisnis dengan performa handal dan baterai tahan lama.',
    image: '/Vostro.jpg',
    brand: 'dell',
  },  {
    id: 8,
    name: 'HP EliteBook 640 G2',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.100.000',
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis'],
    description: 'Laptop bisnis premium dengan performa stabil dan desain portabel.',
    image: '/640 G2.jpg',
    brand: 'hp',
  },
  {    id: 2,
    name: 'HP EliteBook 840 G3',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.000.000',
    originalPrice: 'Rp 3.600.000',
    discountPercentage: 17,
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis', 'Gaming Ringan'],
    description: 'Laptop bisnis premium dengan performa stabil dan desain portabel.',
    image: '/HP.jpg',
    brand: 'hp',
  },  {
    id: 7,
    name: 'Lenovo ThinkPad L480',
    specs: 'Intel Core i5 Gen 8',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.600.000',
    originalPrice: 'Rp 4.000.000',
    discountPercentage: 10,
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis', 'Gaming Ringan'],
    description: 'Laptop bisnis premium dengan desain ringkas dan performa tinggi.',
    image: '/L480.jpg',
    brand: 'lenovo',
    variants: [
      {
        id: "512gb",
        details: 'RAM 8 GB, SSD 512 GB, Display 14"',
        price: 'Rp 3.850.000',
        originalPrice: 'Rp 4.250.000',
        discountPercentage: 9
      }
    ]
  },  {
    id: 11,
    name: 'Lenovo ThinkPad L560',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 256 GB, Display 15,6"',
    price: 'Rp 3.250.000',
    condition: ['Bekas', 'Kantoran', 'Desain Grafis'],
    description: 'Laptop bisnis premium dengan desain kokoh dan performa tinggi.',
    image: '/L560.jpg',
    brand: 'lenovo',
  },  {
    id: 3,
    name: 'Lenovo ThinkPad T460',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 256 GB, Display 14"',
    price: 'Rp 3.250.000',
    originalPrice: 'Rp 3.800.000',
    discountPercentage: 14,
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis', 'Gaming Ringan'],
    description: 'Laptop bisnis premium yang tangguh dengan performa stabil.',
    image: '/T460.jpg',
    brand: 'lenovo',
  },  {
    id: 4,
    name: 'Toshiba Dynabook B55',
    specs: 'Intel Core i5 Gen 6',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 2.600.000',
    originalPrice: 'Rp 2.800.000',
    discountPercentage: 7,
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis'],
    description: 'Laptop bisnis dengan harga terjangkau dan performa stabil.',
    image: '/B55.jpg',
    brand: 'toshiba',
  },  {
    id: 5,
    name: 'Toshiba Dynabook B65',
    specs: 'Intel Core i5 Gen 7',
    details: 'RAM 8 GB, SSD 120 GB, Display 15,6"',
    price: 'Rp 2.700.000',
    originalPrice: 'Rp 2.900.000',
    discountPercentage: 7,
    condition: ['Bekas', 'Sekolah', 'Kantoran', 'Desain Grafis'],
    description: 'Laptop bisnis dengan performa yang lebih baik dari seri sebelumnya.',
    image: '/B65.jpg',
    brand: 'toshiba',
  },
  {    id: 6,
    name: 'Toshiba Dynabook G83',
    specs: 'Intel Core i5 Gen 8',
    details: 'RAM 8 GB, SSD 256 GB, Display 13,3"',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 3.700.000',
    discountPercentage: 5, 
    condition: ['Bekas', ' Sekolah', 'Kantoran', 'Desain Grafis', 'Gaming Ringan'],
    description: 'Laptop bisnis premium dengan desain ringkas dan performa tinggi.',
    image: '/G83.jpg',
    brand: 'toshiba',
  },
];
