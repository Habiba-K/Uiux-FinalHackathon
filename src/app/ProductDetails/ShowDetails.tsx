import Image from "next/image";
import Clients from "../Components/Clients";
import { Button } from "@/components/ui/button";
import Tags from "../Components/tags";
import {
  Eye,
  Heart,
  ShoppingCart,
} from "lucide-react";

export default function Pages() {
  return (
    <div>
      {/* Product Section */}
      <div className="bg-[#FAFAFA] container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 ">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative">
            <Image
              src="/images/pdetails1.png"
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            />
            {/* Arrows */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4">
            <Image
              src="/images/pdetails1a.jpg"
              alt="Thumbnail 1"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
            <Image
              src="/images/pdetails1b.jpg"
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          {/* Product Title and Rating */}
          <h1 className="text-2xl font-normal text-[#252B42]">
            Floating Phone
          </h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            </span>
            <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
          </div>

          {/* Price and Availability */}
          <p className="text-xl font-semibold text-black mt-4">$1,139.33</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability:{" "}
            <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>

            <Tags></Tags>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
              Select Options
            </button>
            <div className="flex items-center gap-4">
              <Button
                color={"blue"}
                size={"icon"}
                className="bg-white rounded-full "
              >
                <Heart />
              </Button>

              <Button size={"icon"} className="bg-white rounded-full">
                <ShoppingCart />
              </Button>

              <Button size={"icon"} className="bg-white rounded-full">
                <Eye />
              </Button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
