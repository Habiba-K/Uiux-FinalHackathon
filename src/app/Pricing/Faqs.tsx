import React from "react";
import Arrow from "../ProductDetails/arrow";

const Faqs = () => {
  return (
    <div>
      <div className="text-center mb-12 ">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto font-bold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </div>
       {/* Content Section */}
       <div className="flex flex-col md:flex-row gap-28 w-[400px] md:w-[95%] justify-center max-w-[1440px] mx-auto ">
          {/* Text Block */}
          <div className=" w-[332px] space-y-4 gap-[5px]">
            <h2 className="flex items-center gap-2 text-[24px] font-bold text-gray-800">
              <Arrow></Arrow>the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <h2 className="flex items-center gap-2 text-[24px] font-bold text-gray-800">
              <Arrow></Arrow>the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <h2 className="flex items-center gap-2 text-[24px] font-bold text-gray-800">
              <Arrow></Arrow>the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* List Section */}
          <div className="w-[332px] space-y-4 gap-[5px]">
            {/* First List */}
            <h2 className="flex items-center gap-2 text-[24px] font-bold text-gray-800">
              <Arrow></Arrow>the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <h2 className="flex items-center gap-2 text-[24px] font-bold text-gray-800">
              <Arrow></Arrow>the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <h2 className="flex items-center gap-2 text-[24px] font-bold text-gray-800">
              <Arrow></Arrow>the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-bold text-sm leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
           
          </div>
        </div>
    </div>
  );
};

export default Faqs;
