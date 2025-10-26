import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ahmad Rahman',
      role: 'Construction Contractor',
      content: 'Excellent quality concrete products. The krawangan we purchased has been performing exceptionally well in our projects. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Property Developer',
      content: 'Professional service and reliable delivery. Their roster beton products helped us complete our housing project on time and within budget.',
      rating: 5,
    },
    {
      name: 'Budi Santoso',
      role: 'Architect',
      content: 'Great attention to detail and quality control. We\'ve been working with them for multiple projects and they never disappoint.',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jangan hanya percaya kata kami. Berikut adalah apa yang dikatakan pelanggan kami yang puas tentang produk dan layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
