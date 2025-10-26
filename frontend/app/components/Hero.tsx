import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Krawangan & Roster Beton
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Pemasok profesional produk beton berkualitas tinggi di Tarakan.
          Solusi beton yang tahan lama, handal, dan terjangkau untuk kebutuhan konstruksi Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Lihat Produk Kami
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
