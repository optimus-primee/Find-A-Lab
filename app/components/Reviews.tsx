import React, { useState } from "react";
import { FaBarcode } from "react-icons/fa6";
import {
  IoCaretDownCircleOutline,
  IoCaretUpCircleOutline,
} from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import bg from "@/public/logo2.jpg";

export default function Reviews() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1440px] mx-auto mt-10 px-20">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-4 w-full flex flex-col gap-8">
          <div className="text-sm p-6 bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex justify-between items-start gap-4 w-full">
              <div className="w-[43px] h-[43px] rounded-full bg-blue-600"></div>
              <div className="flex flex-col w-[91%]">
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h6 className="font-bold">Ben</h6>
                    <h6>September 12, 2022 at 4:29 PM</h6>
                  </div>
                  <div className="flex items-center text-[16px] gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
                <div>
                  <p className="mt-2 text-[13px]">
                    We went on a 2 hour rafting tour with this company. The
                    staff in the office is very friendly. The tour itself,
                    although we really enjoyed it, could be better. The scenery
                    is, however, hard to beat, and we thoroughly enjoyed it. We
                    also liked the little break, swimming in the water and
                    jumping off the rock.
                  </p>
                </div>
                <div className="flex gap-4 mt-3">
                  <div>
                    <Image src={bg} alt="bg" />
                    <div className="mt-7">
                      <h6>Overall Rating</h6>
                      <div className="flex items-center text-[16px] gap-1 mt-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image src={bg} alt="bg" />
                    <div className="mt-7">
                      <h6>Hospitality</h6>
                      <div className="flex items-center text-[16px] gap-1 mt-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image src={bg} alt="bg" />
                    <div className="mt-7">
                      <h6>Services</h6>
                      <div className="flex items-center text-[16px] gap-1 mt-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col items-center gap-8 w-full">
          <div className="text-sm p-6 bg-white rounded-[6px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.03),0_12px_16px_-4px_rgba(0,0,0,0.08)]">
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
                className="border-b-[1px] border-black w-full outline-none pt-5 pb-28 placeholder:text-black"
                placeholder="Your message"
              />
              <div className="flex mt-5 items-center">
                <div className="w-[20px] h-[20px] border-[2px] border-[#76d5cb]"></div>
                <p></p>
              </div>

              <button className="w-full bg-[#76d5cb] h-[50px] flex justify-center items-center rounded-[8px] text-white mt-5">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
