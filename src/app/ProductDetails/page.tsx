import React from "react";
import Image from "next/image";
import Topbar from "../Components/topbar";
import Navbar from "../Navbar/Navbar";
import ShowDetails from "./ShowDetails";
import Arrow from "./arrow";
import BestSellerProducts from "./BestSellerProducts";
import AdditionalDetails from "./AdditionalDetails";
import Clients from "../Components/Clients";
const page = () => {
  return (
    <div>
      <Topbar bgColor="bg-[#23856D]"></Topbar>
      <Navbar /> <br /> <br />
      {/* Shop Section */}
      <div className=" mt-5 w-full h-[40px] bg-[#FAFAFA]">
        {/* category */}
        <div className="px-4 md:px-8 text-[#2A254B] ">
          {/* Breadcrumb */}
          <div className=" flex items-center justify-start gap-[5px]">
            <div className="font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Arrow></Arrow>
            <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>
      <ShowDetails></ShowDetails>
       {/* ProductsCards */}
       <AdditionalDetails></AdditionalDetails>
      
      <BestSellerProducts></BestSellerProducts>
      {/* cards */}
      <Clients></Clients>
    </div>
  );
};

export default page;
