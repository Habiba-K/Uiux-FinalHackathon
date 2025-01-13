"use client"
import { useState } from "react";
import products from "./products";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  const itemsPerPage = 12; // 3 rows * 4 columns
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white py-10">
      <div className="w-[100%]  md:w-[95%] lg:max-w-[1440px] mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  overflow-hidden">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-2 sm:px-4 py-2 rounded-md border text-xs sm:text-base ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-500 hover:bg-blue-100"
            }`}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-base ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-2 sm:px-4 py-2 rounded-md border text-xs sm:text-base ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-500 hover:bg-blue-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}