import React from "react";
import NavAfterLogin from "../NavAfterLogin/page";
import PricingHeader from "./PricingHeader";
import Pakages from "./Pakages";
import Clients from "../Components/Clients";
import Faqs from "./Faqs";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <NavAfterLogin></NavAfterLogin>
      <br /> <br />
      <PricingHeader></PricingHeader>
      <Pakages></Pakages>
      <p className="bg-252B42 text-xl text-center mt-5">
        Trusted By Over 4000 Big Companies
      </p>
      <Clients></Clients>
      <Faqs></Faqs>
      <div className="text-center mb-12 mt-20 ">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Start your 14 days free trial
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto font-bold">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
          
        </p>
            <button
                className="rounded bg-[#23A6F0] text-white md:mr-10 font-bold px-10 py-3">
                Try it free now
            </button>
          <div className="flex  justify-center">
             <Button size={"icon"} className="rounded-full">
                <FaTwitter className="text-blue-500 w-5 h-5  " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaFacebook className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaInstagram className="text-blue-500 w-5 h-5 " />
              </Button>
              <Button size={"icon"} className="rounded-full">
                <FaLinkedin className="text-blue-500 w-5 h-5 " />
              </Button>
            </div>
      </div>
      </div>
  );
};

export default page;
