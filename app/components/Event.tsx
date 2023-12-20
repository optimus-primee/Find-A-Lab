import React from "react";
import bg from "@/public/logo2.jpg";
import Image from "next/image";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Event() {
  return (
    <div className="max-w-[1400px] mx-auto p-20">
     
      <div className="grid gap-8 grid-cols-3 ">
        <div className="flex flex-col">
          <div className="relative h-[200px] rounded-t-[8px] group overflow-hidden">
            <Image
              src={bg}
              className="rounded-t-[8px] h-full object-cover "
              alt="logo"
            />
            <div className="overlay transition-opacity duration-300 opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 absolute inset-0"></div>
          </div>

          <div className="bg-white p-3 relative">
          
            <h5 className="pt-6">LIman Resturants</h5>
            <p>Innovative cooking, paired with fine wine</p>
            
          </div>
        </div>
       
        
      </div>
    </div>
  );
}
