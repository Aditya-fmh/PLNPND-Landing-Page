import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-28 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Laptop Berkualitas di Pangandaran
          </h1>
          <p className="text-xl text-blue-100">
            Pusat Laptop Nusantara Pangandaran menyediakan laptop bekas berkualitas dengan harga terjangkau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/catalog" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition text-center"
            >
              Lihat Katalog
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition text-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>        <div className="hidden md:block">
          <div className="flex justify-center items-center h-96">
            <Image 
              src="/thinkpad-laptop.png" 
              alt="Lenovo ThinkPad Laptop" 
              width={500}
              height={380}
              className="drop-shadow-2xl object-contain"
              priority
            />
          </div>
        </div>      </div>
        {/* Store info badges */}
      <div className="container mx-auto mt-16 px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-full mr-4">
              <Image src="/file.svg" alt="Quality" width={24} height={24} className="invert" />
            </div>
            <div>
              <h3 className="font-semibold">Kualitas Terjamin</h3>
              <p className="text-sm text-blue-100">Semua laptop melalui pengujian ketat</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-full mr-4">
              <Image src="/window.svg" alt="Support" width={24} height={24} className="invert" />
            </div>
            <div>
              <h3 className="font-semibold">Garansi Toko</h3>
              <p className="text-sm text-blue-100">Garansi setiap pembelian laptop</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 p-3 rounded-full mr-4">
              <Image src="/globe.svg" alt="Service" width={24} height={24} className="invert" />
            </div>
            <div>
              <h3 className="font-semibold">Layanan Purna Jual</h3>
              <p className="text-sm text-blue-100">Dukungan teknis setelah pembelian</p>
            </div>
          </div>
        </div>
      </div>      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg className="w-full h-[70px]" 
          viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path d="M0 0L48 8C96 16 192 32 288 34.7C384 37.3 480 26.7 576 32C672 37.3 768 58.7 864 64C960 69.3 1056 58.7 1152 48C1248 37.3 1344 26.7 1392 21.3L1440 16V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" 
            fill="white" className="dark:fill-gray-900" />
        </svg>
      </div>
    </div>
  );
}
