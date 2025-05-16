import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Laptop Berkualitas?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Kunjungi toko kami hari ini atau hubungi kami melalui WhatsApp untuk konsultasi dan informasi lebih lanjut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition"
          >
            Kontak Kami
          </Link>
          <a 
            href="https://wa.me/6288221957963" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            WhatsApp
          </a>
        </div>
        <div className="mt-8 text-blue-100">
          <p>Jam Buka: 08:00 - 19:30 WIB</p>
        </div>
      </div>
    </section>
  );
}
