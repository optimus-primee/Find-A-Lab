import getLabs from "@/app/libs/getLabs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const metadata: Metadata = {
  title: "List of Marketing Agencies in lagos(island) ",
  description: "List of Marketing Agencies in lagos(island)",
};

export default async function TasksPage() {
  const tasksData: Promise<Task[]> = getLabs();

  const tasks = await tasksData;
  const filteredTasks = tasks.filter((task) => task.location === "enugu");

  const content = (
    <section className="pt-48 max-w-[1440px] mx-auto px-20">
      <h2 className="text-[40px] uppercase">List of Labs in Abia</h2>
      <div className="flex gap-10 mt-20">
        {filteredTasks.map((task) => {
          return (
       
                <Link
                  className="bg-[#74d4cc] py-8 px-10"
                  href={`/${task.id}`}
                  key={task.id}
                >
                  {task.name}
                </Link>
          
          );
        })}
      </div>
    </section>
  );

  return content;
}
