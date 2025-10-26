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


  const products: Product[] = [
    {
      id: 1,
      name: 'Krawangan Standard',
      description: 'High-quality concrete curbstone perfect for road edges and landscaping.',
      price: 25000,
      image: '/images/krawangan1.jpg',
      category: 'krawangan',
    },
    {
      id: 2,
      name: 'Krawangan Premium',
      description: 'Premium concrete curbstone with enhanced durability and finish.',
      price: 30000,
      image: '/images/krawangan2.jpg',
      category: 'krawangan',
    },
    {
      id: 3,
      name: 'Roster Beton Type A',
      description: 'Standard concrete roster for drainage and water management.',
      price: 25000,
      image: '/images/roster1.jpg',
      category: 'roster_beton',
    },
    {
      id: 4,
      name: 'Roster Beton Type B',
      description: 'Heavy-duty concrete roster for industrial applications.',
      price: 30000,
      image: '/images/roster2.jpg',
      category: 'roster_beton',
    },
    {
      id: 5,
      name: 'Krawangan Custom',
      description: 'Custom design concrete curbstone for aesthetic landscaping projects.',
      price: 45000,
      image: '/images/krawangan3.jpg',
      category: 'krawangan',
    },
    {
      id: 6,
      name: 'Roster Beton Custom',
      description: 'Custom design concrete roster for high-load applications.',
      price: 40000,
      image: '/images/roster3.jpg',
      category: 'roster_beton',
    },
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

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
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk ditemukan dalam kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
