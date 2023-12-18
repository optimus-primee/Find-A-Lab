"use client"
import React, { useEffect, useState } from "react";
import bgg from "@/public/logo.jpg";
import MyTabs from "../components/Tabs";
import Profile from "../components/Profile";
import axios from "axios";

export default function page() {
  const [data,setData] = useState<Task[]>([])
  useEffect(()=>
  {
axios.get("http://localhost:3031/labs")
.then(res=>setData(res.data))
.catch(err => console.log(err));
  },[])
  return (
    <>
      <div
        style={{
          // use the src property of the image object
          backgroundImage: `url(${bgg.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "70vh",
          display: "flex",
          alignItems: "end",
          justifyContent: "start",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-20 w-full">
          <div className="flex justify-between items-center w-full  py-8">
            <div className=" flex gap-4 items-center">
              <div className="bg-black w-[80px] h-[80px] rounded-full"></div>
              <div className="flex flex-col">
                <h3 className="text-[22px] text-bold">The Activity People</h3>
                <h3>Edwardian picture house, screening mainstream films</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              
              <button className=" bg-[#74d4cc] px-7 py-3 text-white rounded-[5px]">
                Direct Message
              </button>
            </div>
          </div>
        </div>
      </div>
      {data.map((d,i)=>{
        return (
          <div key={i}>
            <div>{d.name}</div>
          </div>
        );
      })}

      <Profile/>
    </>
  );
}
