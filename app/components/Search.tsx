import React from 'react'

export default function Search() {
  return (
    <div>
      <div className="bg-white w-[800px] h-[100px] flex items-center rounded-[6px] px-10 gap-5 mt-10">
        <input className="w-[75%] py-2 border-b-[1px] border-black bg-transparent outline-none text-black " type='text' placeholder='What are you looking for?' />
        <button className="w-[25%] bg-[#f66550] px-7 py-2 text-white rounded-[5px]">
          Search
        </button>
      </div>
    </div>
  );
}
