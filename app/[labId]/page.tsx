import React, { useEffect, useState } from "react";
import bgg from "@/public/logo.jpg";
import MyTabs from "../components/Tabs";
import Profile from "../components/Profile";
import axios from "axios";
import Link from "next/link";
import type { Metadata } from "next";

import getLab from "../libs/getLab";

type Params = {
  params: {
    labId: string;
  };
};

export async function generateMetadata({
  params: { labId },
}: Params): Promise<Metadata> {
  const taskData: Promise<Task> = getLab(labId);
  const task: Task = await taskData;

  return {
    title: task.name,
    description: `This is the page of ${task.name}`,
  };
}

export default async function UserPage({ params: { labId } }: Params) {
  const taskData: Promise<Task> = getLab(labId);

  const task = await taskData;
 const serviceNames = task.services && task.services.length > 0 ? [task.services[0].name] : [];

  return (
    <>
      {" "}
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
                <h3 className="text-[22px] text-bold">{task.name}</h3>
                <h3>{task.name}</h3>
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
      <Profile
        taskName={task.description}
        serviceNames={task.services.map((s) => s.name)}
        maps={task.map}
        addresss={task.address}
      />
    </>
  );
}
