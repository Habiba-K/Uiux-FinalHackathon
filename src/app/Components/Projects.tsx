import { title } from "process";
import React from "react";
import Card from "./product";
const data = [
  {
    id: 0,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/product-cover-5.png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 1,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height (1).png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 2,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height (2).png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 3,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height (3).png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 4,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height.png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 5,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height (4).png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 6,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height (5).png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
  {
    id: 7,
    title: "Graphic Design",
    desc: "English Department",
    img: "/images/fixed-height (6).png",
    price: '$6.48',
    originalPrice: '$16.48',
    tags: ["","", "", ""],
  },
];

const Projects = () => {
  let projectcard = data.map((el) => {
    return (
      <Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        price ={el.price}
        originalPrice={el.originalPrice}
        tags={el.tags}
      />
    );
  });

  return (
    <div className=" container relative overflow-hidden text-base w-[80%]  md:w-[95%] lg:max-w-[1440px]  mx-auto px-4 ">
      <div className=" text-center lg:pl-20 lg:pr-20 lg:pb-10 ">
        <p className="text-gray-500 text-md md:text-base">Featured Products</p>
        <h2 className="text-lg md:text-2xl font-bold mb-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-gray-500   text-sm md:text-base">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className=" grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-4 ">
        {projectcard}
      </div>
    </div>
  );
};

export default Projects;
