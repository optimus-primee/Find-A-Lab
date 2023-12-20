import React from 'react'
import { ImSad } from "react-icons/im";
export default function Jobs() {
  return (
    <div className="flex justify-center items-center h-[50vh] flex-col gap-4">
      <ImSad className="text-[40px]" />
      <h6>There are no listings matching your search.</h6>
    </div>
  );
}
