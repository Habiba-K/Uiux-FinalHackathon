import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="bg-white mt-2">
      <section className="relative w-full  ">
        {/* Background Image */}
        <div className="w-full md:w-[90%] lg:max-w-[1440px] mx-auto h-[400px] md:h-[716px]">
          <Image
            src="/images/shop-hero-1-product-slide-1.jpg"
            alt="New Collection"
            fill
            className="object-contain"
            priority
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col md:p-40 items-center md:items-start justify-center text-center text-white px-4">
            <p className="text-sm md:text-lg font-medium">SUMMER 2020</p>
            <h1 className="text-2xl  md:text-4xl font-bold my-4">
              NEW COLLECTION
            </h1>
            <p className="text-xs md:text-base max-w-[300px] md:max-w-none">
              We know how large objects will act, but things on a small scale.
            </p>
            <Button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600">
              SHOP NOW
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;


