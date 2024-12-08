import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
const EditorPick = () => {
  return (
    <div className="bg-[#FAFAFA]  mt-7">
      <div className="text-center ">
            <h2 className="text-lg md:text-2xl font-bold mb-2">
              EDITOR'S PICK
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Problems trying to resolve the conflict between
            </p>
      </div>
      <section className="py-12 md:py-16  p-32 ">
        
        <div className=" mx-auto px-4 ">
          {/* Title */}
          

          {/* Grid */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 w-[100%]  md:w-[90%] lg:max-w-[1440px] mx-auto mt-2 ">
            {/* First Column (MEN) */}
            <div className="relative flex justify-center">
              <Image
                src="/images/col-md-6.png"
                alt="Men"
                width={324}
                height={400}
                className=" md:w-[510px] md:h-[400px] object-cover "
              />
              <div className="absolute inset-0 flex items-end justify-start pl-10 pb-5 lg:pl-5 lg:pb-5">
                <Button className="bg-white text-black px-10  py-2 font-semibold">
                  MEN
                </Button>
              </div>
            </div>

            {/* Second Column (WOMEN) */}
            <div className="relative flex justify-center">
              <Image
                src="/images/card-item.png"
                alt="Women"
                width={325}
                height={400}
                className=" object-cover md:w-[240px] md:h-[400px] "
              />
              <div className="absolute inset-0 flex items-end justify-start pl-10 pb-5 lg:pl-20 lg:pb-5 ">
                <Button className="bg-white text-black px-10 py-2 font-semibold">
                  WOMEN
                </Button>
              </div>
            </div>

            {/* Third Column with Two Rows */}
            <div className="grid grid-rows-1 lg:grid-rows-2 gap-4 justify-center ">
              {/* Accessories */}
              <div className="relative ">
                <Image
                  src="/images/card-item (1).png"
                  alt="Accessories"
                  width={327}
                  height={200}
                  className="object-cover md:w-[260px] md:h-[200px]"
                />
                <div className="absolute inset-0 flex items-end justify-start pl-5 pb-2">
                  <Button className="bg-white text-black px-10 py-2 font-semibold">
                    ACCESSORIES
                  </Button>
                </div>
              </div>
              {/* Kids */}
              <div className="relative">
                <Image
                  src="/images/card-item (2).png"
                  alt="Kids"
                  width={325}
                  height={200}
                  className="object-cover md:w-[240px] md:h-[185px]"
                />
                <div className="absolute inset-0 flex items-end justify-start pl-5 pb-5">
                  <Button className="bg-white text-black px-10 py-2 font-semibold">
                    KIDS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorPick;
