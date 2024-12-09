// pages/index.js
import Link from 'next/link';
import Topbar from './topbar';
import Projects from './Projects';


export default function Home() {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, image: '/images/product3.jpg' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Topbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shop Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* {products.map((product) => (
            // <Projects key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
