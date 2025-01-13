"use client";
import React from "react";

import ProductCard from "./HomeCard"; // Import the ProductCard component
import products from "../Components/products"; // Import the product data
import ProductHeader from "../Components/ProductHeader";

export default function DisplayedProductsHome() {
  // Select the first 8 products from the list
  const displayedProducts = products.slice(0, 8);

  return (
    <div>
      <ProductHeader></ProductHeader>

      <div className="bg-white py-10">
        <div className="w-[100%]  lg:max-w-[1440px]  mx-auto px-4 ">
          
          {/* Products Grid - 2 rows and 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden ">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
