import Image from 'next/image';

// Real testimonial data from Google Reviews
const testimonials = [
  {
    id: 1,
    name: 'Randi Nurhidayat',
    role: '',
    content: 'Saya sangat senang sekali belanja di toko ini, barangnya bagus pelayanannya ramah pokonya rekomend banget lah buat yang butuh laptop second yang berkulitas',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXOJreArHkQVyU2zH2-uR7ligXU8sZVwmh9G0grkivdWQ87lWc=w72-h72-p-rp-mo-br100',
    reviewUrl: 'https://maps.app.goo.gl/Bi95Ha3bowJdGdRK6',
  },
  {
    id: 2,
    name: 'E s t i',
    role: '',
    content: 'Pelayanannya super oke, di test satu-satu takutnya ada yang bermasalah. Barang ada garansi toko juga. Okeee banget guys 👍',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU4B7UagxQT0f1b8NhI8Gv9umftjCO-R-WZMTqeyF7DvCK2ELX9=w72-h72-p-rp-mo-br100',
    reviewUrl: 'https://maps.app.goo.gl/Ujc8oD7uGcHBmT5S7',
  },
  {
    id: 3,
    name: 'ZAG gumilar',
    role: '',
    content: 'Lengkap, jelas, nyamba dan detail.. Dg pelayanan yg sangat max.. Terimakasih PLN Cab Pangandaran',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUiGEZRoPtpro5ZVyMIR5x6DLxQuvY7Bzgh0p3TozkHOqAsVROg=w72-h72-p-rp-mo-br100',
    reviewUrl: 'https://maps.app.goo.gl/A3UDWxEWPLuRrYaT9',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Testimoni Pelanggan</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Apa kata pelanggan kami tentang produk dan layanan di Pusat Laptop Nusantara Pangandaran
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >              <div className="flex items-center mb-6">                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name}'s profile`} 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>                </div>
              </div>              <p className="text-gray-700 dark:text-gray-300">&ldquo;{testimonial.content}&rdquo;</p>              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4">
                <a 
                  href={testimonial.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
