// Real testimonial data from Google Reviews
const testimonials = [
  {
    id: 1,
    name: 'Dani Setiawan',
    role: 'Graphic Designer',
    content: 'Alhamdulillah, laptop ThinkPad yang saya beli di sini sangat memuaskan. Meskipun bekas tapi kondisinya sangat terawat dan performanya masih bagus. Cocok untuk kebutuhan desain grafis saya. Harga juga sangat bersaing dibanding toko lain.',
    rating: 5,
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: 2,
    name: 'Rini Wulandari',
    role: 'Mahasiswa',
    content: 'Pelayanannya ramah dan informatif. Mas Andi membantu saya memilih laptop yang sesuai dengan budget mahasiswa. Sudah 1 tahun dipakai untuk skripsi dan masih lancar. Thank you Pusat Laptop Nusantara!',
    rating: 5,
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: 3,
    name: 'Hendra Kurniawan',
    role: 'Guru SMA',
    content: 'Saya cari laptop untuk mengajar online, dan direkomendasikan HP EliteBook dari toko ini. Baterai awet, layar jernih, dan yang penting - harganya terjangkau. After-sales service juga bagus, ketika ada masalah dengan Windows langsung dibantu via telepon.',
    rating: 4,
    avatar: '/images/avatar-3.jpg',
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
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>                </div>
              </div>              <p className="text-gray-700 dark:text-gray-300">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-4 flex">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
