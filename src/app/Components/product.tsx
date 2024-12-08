import { title } from "process";
import React from "react";
import { HiOutlineCode } from "react-icons/hi";

interface propsType {
  title: string;
  desc: string;
  img: string;
  price : string;
  originalPrice: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, price,originalPrice ,tags }) => {
  return (
    <div className="text-center">
      <div className="overflow-hidden ">
        <div className="flex justify-center relative aspect-square">
          <img
            className="  lg:w-[239px] lg:h-[427px] object-cover"
            src={img}
            alt={title}
          />
        </div>
        
        <div className=" space-y-4 pb-4">
          <div className="text-[#252B42] font-bold text-md  truncate hover:text-clip text">
            {title}
          </div>
          <div className="text-clip overflow-hidden h-[30px]  ">{desc}</div>
          <p className="text-[16px] text-[#BDBDBD] font-bold text-sm ">
                {originalPrice}
                <span className=" text-[#23856D] ml-4 text-[16px] font-bold test-sm ">
                {price}
                
                </span>
        </p>
        

          {tags.map((el) => (
            <div
              className="tags "
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
