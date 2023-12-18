"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Profile from "./Profile";
import Reviews from "./Reviews";
import Event from "./Event";
import Jobs from "./Jobs";

import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LuLink } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
import Intrested from "./Intrested";
import STores from "./Stores";


function MyTabs() {
  return (
    <div className="shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
      <Tab.Group>
        <div className="max-w-[1440px] mx-auto">
          <Tab.List className="flex  justify-center items-center mt-[2px] w-[100%] bg-white  font-nunito">
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-12 border-b-[2px] border-blue-500 "
                      : "px-12 py-4  hover:border-b-[2px] hover:border-blue-500 transitio ease-in duration-75"
                  }
                >
                  <h5>Profile</h5>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-12 border-b-[2px] border-blue-500 "
                      : "px-12 py-4  hover:border-b-[2px] hover:border-blue-500 transitio ease-in duration-75"
                  }
                >
                  <h5>Review</h5>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-12 border-b-[2px] border-blue-500 "
                      : "px-12 py-4  hover:border-b-[2px] hover:border-blue-500 transitio ease-in duration-75"
                  }
                >
                  <h5>Event</h5>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-12 border-b-[2px] border-blue-500 "
                      : "px-12 py-4  hover:border-b-[2px] hover:border-blue-500 transitio ease-in duration-75"
                  }
                >
                  <h5>Jobs</h5>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-12 border-b-[2px] border-blue-500 "
                      : "px-12 py-4  hover:border-b-[2px] hover:border-blue-500 transitio ease-in duration-75"
                  }
                >
                  <h5>Store</h5>
                </div>
              )}
            </Tab>
          </Tab.List>
        </div>
        <div className="bg-[#f4f4f4] ">
          <div className="flex justify-center gap-2 items-center pt-7 text-sm">
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <CiLocationOn />
              <h5>Get Directions</h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <FiPhone />
              <h5>Call Now</h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <LuLink />
              <h5>Website</h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <IoIosHeartEmpty />

              <h5>Bookmarks</h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <CiShare2 />
              <h5>Share </h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <GoComment />
              <h5>Leave a review</h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <MdOutlineAddLocationAlt />
              <h5>Claim listing</h5>
            </div>
            <div className="flex gap-3 items-center border px-5 py-2.5 rounded-[50px]">
              <MdOutlineReport />

              <h5>Report</h5>
            </div>
          </div>

          <Tab.Panels>
            <Tab.Panel>
              <Profile />
            </Tab.Panel>
            <Tab.Panel>
              <Reviews />
            </Tab.Panel>
            <Tab.Panel>
              <Event />
            </Tab.Panel>
            <Tab.Panel>
              <Jobs />
            </Tab.Panel>
            <Tab.Panel>
              <STores />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <Intrested />
    </div>
  );
}

export default MyTabs;
