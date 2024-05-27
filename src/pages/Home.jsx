import { Button } from "flowbite-react";
import React from "react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import NewsCard from "../components/home/NewsCard";
import PaginationComponent from "../components/home/PaginationComponent";
import CarouselComponent from "../components/home/CarouselComponent";

function Home() {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //   <h1 className="text-4xl font-bold text-[#a5d6a7] bg-purple-500 p-[32px] [&:hover]:bg-purple-800 [&:hover]:text-[#ff9800] rounded-xl">
    //     Home
    //   </h1>
    //   <h1 className="text-4xl font-bold text-[#a5d6a7] bg-purple-500 p-[32px] [&:hover]:bg-purple-800 [&:hover]:text-[#ff9800]">
    //     Home
    //   </h1>
    //   <h1 className="text-4xl font-bold text-[#a5d6a7] bg-purple-500 p-[32px] [&:hover]:bg-purple-800 [&:hover]:text-[#ff9800]">
    //     Home
    //   </h1>
    //   <h1
    //     className={`text-4xl font-bold text-[#a5d6a7] bg-purple-500 p-[32px] [&:hover]:bg-purple-800 [&:hover]:text-[#ff9800]`}
    //   >
    //     Home
    //   </h1>
    // </div>
    <div className="">
      <CarouselComponent />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default Home;
