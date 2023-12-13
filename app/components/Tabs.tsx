"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";


function MyTabs() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Tab.Group>
        <div className="">
          <Tab.List className="flex justify-center items-center mb-[33px] w-[100%] border-b border-gray-300 font-nunito">
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-6  text-white bg-blue-700 rounded-t-[4px]  "
                      : "px-5 py-4 text-gray-500 rounded-t-[4px]   "
                  }
                >
                 
                  <h5>Digital Services</h5>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-6 text-white  bg-blue-700 rounded-t-[4px]  "
                      : "px-5 py-4 text-gray-500 rounded-t-[4px]  text-base  "
                  }
                >
                 
                  <h5>Traditional Services</h5>
                </div>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
          1
          </Tab.Panel>
          <Tab.Panel>
           2
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MyTabs;
