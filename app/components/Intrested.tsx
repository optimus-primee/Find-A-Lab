import React from "react";
import bg from "@/public/logo2.jpg";
import Image from "next/image";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Intrested() {
  return (
    <div className="max-w-[1400px] mx-auto px-20">
      <h3 className="text-center font-bold text-[30px] my-7 ">
        You May Also Be Interested In
      </h3>
      <div className="grid gap-8 grid-cols-3">
        <div className="flex flex-col">
          <div className="relative h-[200px] rounded-t-[8px] group overflow-hidden">
            <Image
              src={bg}
              className="rounded-t-[8px] h-full object-cover"
              alt="logo"
            />
            <div className="overlay transition-opacity duration-300 opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 absolute inset-0"></div>
          </div>

          <div className="bg-white p-3 relative">
            <div className="w-[60px] h-[60px] bg-black rounded-full absolute -top-6 left-3 "></div>
            <h5 className="pt-6">LIman Resturants</h5>
            <p>Innovative cooking, paired with fine wine</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-[30px] h-[30px] bg-red-500 rounded-full flex justify-center items-center text-white">
                  <MdOutlineRestaurantMenu />
                </div>
                <h6>Resturants</h6>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <div className="w-[30px] h-[30px] bg-[#f4f4f4] rounded-full flex justify-center items-center text-black">
                  <FaSearchPlus />
                </div>
                <div className="w-[30px] h-[30px] bg-[#f4f4f4] rounded-full flex justify-center items-center text-black">
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-[200px] rounded-t-[8px] group overflow-hidden">
            <Image
              src={bg}
              className="rounded-t-[8px] h-full object-cover"
              alt="logo"
            />
            <div className="overlay transition-opacity duration-300 opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 absolute inset-0"></div>
          </div>

          <div className="bg-white p-3 relative">
            <div className="w-[60px] h-[60px] bg-black rounded-full absolute -top-6 left-3 "></div>
            <h5 className="pt-6">LIman Resturants</h5>
            <p>Innovative cooking, paired with fine wine</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-[30px] h-[30px] bg-red-500 rounded-full flex justify-center items-center text-white">
                  <MdOutlineRestaurantMenu />
                </div>
                <h6>Resturants</h6>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <div className="w-[30px] h-[30px] bg-[#f4f4f4] rounded-full flex justify-center items-center text-black">
                  <FaSearchPlus />
                </div>
                <div className="w-[30px] h-[30px] bg-[#f4f4f4] rounded-full flex justify-center items-center text-black">
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-[200px] rounded-t-[8px] group overflow-hidden">
            <Image
              src={bg}
              className="rounded-t-[8px] h-full object-cover"
              alt="logo"
            />
            <div className="overlay transition-opacity duration-300 opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 absolute inset-0"></div>
          </div>

          <div className="bg-white p-3 relative">
            <div className="w-[60px] h-[60px] bg-black rounded-full absolute -top-6 left-3 "></div>
            <h5 className="pt-6">LIman Resturants</h5>
            <p>Innovative cooking, paired with fine wine</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-[30px] h-[30px] bg-red-500 rounded-full flex justify-center items-center text-white">
                  <MdOutlineRestaurantMenu />
                </div>
                <h6>Resturants</h6>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <div className="w-[30px] h-[30px] bg-[#f4f4f4] rounded-full flex justify-center items-center text-black">
                  <FaSearchPlus />
                </div>
                <div className="w-[30px] h-[30px] bg-[#f4f4f4] rounded-full flex justify-center items-center text-black">
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
