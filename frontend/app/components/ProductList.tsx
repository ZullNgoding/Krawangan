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

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  const products: Product[] = [
    {
      id: 1,
      name: 'Krawangan Standard',
      description: 'High-quality concrete curbstone perfect for road edges and landscaping.',
      price: 30000,
      image: '/images/krawangan1.webp',
      category: 'krawangan',
    },
    {
      id: 2,
      name: 'Krawangan Premium',
      description: 'Premium concrete curbstone with enhanced durability and finish.',
      price: 35000,
      image: '/images/krawangan2.webp',
      category: 'krawangan',
    },
    {
      id: 3,
      name: 'Roster Beton Type A',
      description: 'Standard concrete roster for drainage and water management.',
      price: 30000,
      image: '/images/roster1.webp',
      category: 'roster_beton',
    },
    {
      id: 4,
      name: 'Roster Beton Type B',
      description: 'Heavy-duty concrete roster for industrial applications.',
      price: 35000,
      image: '/images/roster2.webp',
      category: 'roster_beton',
    },
    {
      id: 5,
      name: 'Krawangan Custom',
      description: 'Custom design concrete curbstone for aesthetic landscaping projects.',
      price: 40000,
      image: '/images/krawangan1.webp', 
      category: 'krawangan',
    },
    {
      id: 6,
      name: 'Roster Beton Custom',
      description: 'Custom design concrete roster for high-load applications.',
      price: 40000,
      image: '/images/roster1.webp', 
      category: 'roster_beton',
    },
    {
      id: 7,
      name: 'Krawangan Eco-Friendly',
      description: 'Environmentally friendly concrete curbstone made with recycled materials.',
      price: 30000,
      image: '/images/krawangan2.webp',
      category: 'krawangan',
    },
    {
      id: 8,
      name: 'Roster Beton Reinforced',
      description: 'Reinforced concrete roster for extreme durability.',
      price: 35000,
      image: '/images/roster2.webp',
      category: 'roster_beton',
    },
    {
      id: 9,
      name: 'Krawangan Decorative',
      description: 'Decorative concrete curbstone for garden and park applications.',
      price: 35000,
      image: '/images/krawangan1.webp',
      category: 'krawangan',
    },
    {
      id: 10,
      name: 'Roster Beton Large',
      description: 'Large-sized concrete roster for major drainage systems.',
      price: 45000,
      image: '/images/roster1.webp',
      category: 'roster_beton',
    },
    {
      id: 11,
      name: 'Krawangan Industrial',
      description: 'Heavy-duty concrete curbstone for industrial sites.',
      price: 30000,
      image: '/images/krawangan2.webp',
      category: 'krawangan',
    },
    {
      id: 12,
      name: 'Roster Beton Modular',
      description: 'Modular concrete roster for easy installation and maintenance.',
      price: 30000,
      image: '/images/roster2.webp',
      category: 'roster_beton',
    },
    // {
    //   id: 13,
    //   name: 'Krawangan Waterproof',
    //   description: 'Waterproof concrete curbstone resistant to moisture and weathering.',
    //   price: 33000,
    //   image: '/images/krawangan1.webp',
    //   category: 'krawangan',
    // },
    // {
    //   id: 14,
    //   name: 'Roster Beton Anti-Slip',
    //   description: 'Anti-slip surface concrete roster for safety in wet conditions.',
    //   price: 36000,
    //   image: '/images/roster1.webp',
    //   category: 'roster_beton',
    // },
    // {
    //   id: 15,
    //   name: 'Krawangan Colored',
    //   description: 'Colored concrete curbstone for aesthetic enhancement.',
    //   price: 34000,
    //   image: '/images/krawangan2.webp',
    //   category: 'krawangan',
    // },
    // {
    //   id: 16,
    //   name: 'Roster Beton High-Capacity',
    //   description: 'High-capacity concrete roster for large volume water flow.',
    //   price: 50000,
    //   image: '/images/roster2.webp',
    //   category: 'roster_beton',
    // },
    // {
    //   id: 17,
    //   name: 'Krawangan Slope',
    //   description: 'Sloped concrete curbstone for better water drainage.',
    //   price: 27000,
    //   image: '/images/krawangan1.webp',
    //   category: 'krawangan',
    // },
    // {
    //   id: 18,
    //   name: 'Roster Beton Underground',
    //   description: 'Underground concrete roster for concealed drainage systems.',
    //   price: 42000,
    //   image: '/images/roster1.webp',
    //   category: 'roster_beton',
    // },
    // {
    //   id: 19,
    //   name: 'Krawangan Barrier',
    //   description: 'Barrier-style concrete curbstone for traffic control.',
    //   price: 39000,
    //   image: '/images/krawangan2.webp',
    //   category: 'krawangan',
    // },
    // {
    //   id: 20,
    //   name: 'Roster Beton Eco',
    //   description: 'Eco-friendly concrete roster with sustainable materials.',
    //   price: 31000,
    //   image: '/images/roster2.webp',
    //   category: 'roster_beton',
    // },
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
    setCurrentPage(1); 
  }, [selectedCategory]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const categories = [
    { value: 'all', label: 'Semua Produk' },
    { value: 'krawangan', label: 'Krawangan' },
    { value: 'roster_beton', label: 'Roster Beton' },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Produk Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai produk beton berkualitas tinggi kami yang dirancang untuk ketahanan dan performa.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk ditemukan dalam kategori ini.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === number
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
