
import Image from "next/image";
import bg from "@/public/logo.jpg";
import Search from "./Search";

export default function Hero() {
 
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden", // Make sure the background doesn't overflow
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-100",
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: "1000",
          }}
        >
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: "1",
          }}
        >
           
          <h1 className="z-[1000] text-[65px] leading-[65px] text-center font-bold text-black ">
            Discover great Labs <br />
            in Nigeria
          </h1>
          <h5 className="text-[22px] mt-5 text-black">
            Find awesome places, Laboratorities, Medical Testing Center in
            Nigeria
          </h5>
          <Search />
        </div>
      </div>
    </>
  );
}
