'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Krawangan Premium',
      description: 'Premium concrete curbstone with enhanced durability and finish.',
      price: 35000,
      image: '/images/krawangan2.webp',
      category: 'krawangan',
    },
    {
      id: 2,
      name: 'Roster Beton Type B',
      description: 'Heavy-duty concrete roster for industrial applications.',
      price: 35000,
      image: '/images/roster2.webp',
      category: 'roster_beton',
    },
    {
      id: 3,
      name: 'Krawangan Custom',
      description: 'Custom design concrete curbstone for aesthetic landscaping projects.',
      price: 40000,
      image: '/images/krawangan1.webp',
      category: 'krawangan',
    },
    {
      id: 4,
      name: 'Roster Beton High-Capacity',
      description: 'High-capacity concrete roster for large volume water flow.',
      price: 50000,
      image: '/images/roster2.webp',
      category: 'roster_beton',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan produk terlaris dan paling diminati pelanggan kami.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 p-8">
                    <div className="max-w-md mx-auto">
                      <ProductCard product={product} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
