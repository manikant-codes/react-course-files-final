import { Button } from "flowbite-react";
import React from "react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

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

    <Button
      className="m-8"
      // size="xs"
      outline
      gradientDuoTone="purpleToBlue"
      pill
      isProcessing
    >
      Default
      {/* <HiOutlineArrowRight className="h-4 w-4" /> */}
    </Button>
  );
}

export default Home;
