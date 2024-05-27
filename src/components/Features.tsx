'use client'
import React from "react";
import { ImageList } from "@/utils/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Button } from "./ui/button";

const Features = () => {
  return (
    <div className="py-10 mb-10 bg-gray-200 dark:bg-gray-950 dark:text-white">
      <div className="container">
        {/* header */}
        <div className="justify-center mb-24 text-center">
          <p data-aos="fade-up" className="font-bold text-primary">
            Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sequi voluptatem in suscipit velit. 
          </p>
        </div>
        {/* product cards */}
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {
                ImageList.map((product)=>(
                    <div key={product.id}
                    data-aos="zoom-in"
                    className="relative max-w-xs duration-300 bg-white shadow-2xl rounded-2xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white group"
                    >
                        <div className="h-[100px]">
                            <Image src={product.img} alt="products" width="150" height="100"
                            className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
                        </div>
                        {/* product detail */}
                        <div className="p-4 space-y-3 text-center">
                            <div className="flex items-center justify-center w-full gap-1">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <h1>{product.title}</h1>
                            <p className="text-sm text-gray-500 duration-500 group-hover:text-white line-clamp-2">{product.description}</p>
                            <Button 
                            className="mt-4 text-white duration-300 rounded-full hover:scale-105 dark:bg-gray-600"
                            // onClick={handleClick}
                            >
                                Start Shopping
                            </Button>
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
