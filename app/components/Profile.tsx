"use client"
import React, { useState } from "react";
import { FaBarcode } from "react-icons/fa6";
import {
  IoCaretDownCircleOutline,
  IoCaretUpCircleOutline,
} from "react-icons/io5";
import DayTimeDate from "./DayTimeDate";
import Intrested from "./Intrested";
interface ProfileProps {
  taskName: string;
  serviceNames: string[];
  maps:string;
  addresss:string;
  emaill:string;
  phone_numberr:string;

  // Assuming taskName is a string, adjust the type accordingly
}

const Profile: React.FC<ProfileProps> = ({ taskName, serviceNames,maps,addresss,emaill,phone_numberr }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto mt-10 px-20">
      <div className="grid grid-cols-6 gap-6 ">
        <div className="col-span-3 w-full flex flex-col gap-8 ">
          <div className="text-sm p-6 bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex gap-2 items-center mb-4">
              <FaBarcode className="rotate-90" />
              <h5>Description</h5>
            </div>
            <p>{taskName}</p>
          </div>
          <div className="text-sm p-6  bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex gap-2 items-center mb-4">
              <FaBarcode className="rotate-90" />
              <h5>Location</h5>
            </div>
            <div>
              <iframe
                src={maps}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="text-sm p-6 w-full bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex gap-2 items-center  mb-4">
              <FaBarcode className="rotate-90" />
              <h5>Categories</h5>
            </div>

            <ul className="list-disc">
              {serviceNames.map((serviceName, index) => (
                <li key={index}>{serviceName}</li>
              ))}
            </ul>
          </div>
       
        </div>
        <div className="col-span-3 flex flex-col items-center gap-8 w-full">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-sm flex w-full  justify-between items-center p-6 bg-white rounded-t-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]"
          >
            <div className="flex gap-2 items-center ">
              <FaBarcode className="rotate-90" />
              <h5>Open</h5>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <p>Open hours today: 9:00 AM - 04:00 PM</p>
              {toggle ? (
                <IoCaretUpCircleOutline className="text-[20px]" />
              ) : (
                <IoCaretDownCircleOutline className="text-[20px]" />
              )}
              <div></div>
            </div>
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } text-sm  w-full -mt-8 flex items-center flex-col p-6 bg-white rounded-b-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]`}
          >
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Monday</h5>
              <h5>9:00 AM - 4:00 PM</h5>
            </div>
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Tuesday</h5>
              <h5>9:00 AM - 4:00 PM</h5>
            </div>
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Wednesday</h5>
              <h5>9:00 AM - 4:00 PM</h5>
            </div>
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Thursday</h5>
              <h5>9:00 AM - 4:00 PM</h5>
            </div>
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Friday</h5>
              <h5>9:00 AM - 4:00 PM</h5>
            </div>
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Staurday</h5>
              <h5>N/A</h5>
            </div>
            <div className="flex justify-between w-full border-b-[1px] border-[#cfcfcf] py-4 items-center">
              <h5>Sunday</h5>
              <h5>N/A</h5>
            </div>
            <div className="flex justify-end items-end w-full mt-1">
              <DayTimeDate />
            </div>
          </div>
          <div className="text-sm p-6 w-full bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex gap-2 items-center  mb-4">
              <FaBarcode className="rotate-90" />
              <h5>Address</h5>
            </div>
            <p>Email: {emaill}</p>
            <p>Phone Number: {phone_numberr}</p>
            <p>Address: {addresss}</p>
          </div>
          <div className="text-sm p-6 w-full bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex gap-2 items-center mb-4">
              <FaBarcode className="rotate-90" />
              <h5>Contact business</h5>
            </div>
            <form>
              <input
                type="text"
                className="border-b-[1px] border-black w-full outline-none py-3 placeholder:text-black"
                placeholder="Your name"
              />
              <input
                type="text"
                className="border-b-[1px] border-black w-full outline-none py-3 pt-5 placeholder:text-black"
                placeholder="Your Email Address"
              />
              <input
                type="text"
                className="border-b-[1px] border-black w-full outline-none pt-5 pb-16 placeholder:text-black"
                placeholder="Your message"
              />
              <button className="w-full bg-[#76d5cb] h-[50px] flex justify-center items-center rounded-[8px] text-white mt-5">
                Submit Message
              </button>
            </form>
          </div>
          <div className="text-sm p-6 bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex gap-2 items-center mb-4">
              <FaBarcode className="rotate-90" />
              <h5>Categories</h5>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              molestiae fuga libero dignissimos facere. Ex similique qui
              mollitia sapiente harum. Voluptas mollitia eius quia inventore
              saepe, commodi harum quae sapiente? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eveniet molestiae fuga libero
              dignissimos facere. Ex similique qui mollitia sapiente harum.
              Voluptas mollitia eius quia inventore saepe, commodi harum quae
              sapiente?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;