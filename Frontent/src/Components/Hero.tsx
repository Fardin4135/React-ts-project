import { useState } from "react";
// import heroBg from "../assets/image-hero-desktop.jpg";
import Modal from "./Modal";
import hamburger from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close-menu.svg"

const Hero = () => {

  const [active, setActive] = useState(false);
 
  return (
    
    <div
      className="bg-cover  bg-top h-[250px] sm:h-[350px] w-full bg-no-repeat text-white relative z-0 bg-[url('/image-hero-mobile.jpg')] sm:bg-[url('/image-hero-desktop.jpg')] bg-gray-100"
    >
      {/* <div className="absolute inset-0 bg-black/60"></div> */}
      <div className="navbar flex justify-between px-8 sm:px-12 md:px-24 lg:px-40 py-4 md:py-8 items-center">
        <div className="brand">
          <h1 className="font-bold text-2xl">crowdfund</h1>
        </div>
        <div className="links hidden sm:block">
          
          <ul className="flex gap-6">
            <li>
              <a href="#" className="font-bold hover:underline hover:decoration-[hsl(176,72%,28%)] hover:underline-offset-4">About</a>
            </li>
            <li>
              <a href="#" className="font-bold hover:underline hover:decoration-[hsl(176,72%,28%)] hover:underline-offset-4">Discover</a>
            </li>
            <li>
              <a href="#" className="font-bold hover:underline hover:decoration-[hsl(176,72%,28%)] hover:underline-offset-4">Get Started</a>
            </li>
          </ul>
        </div>

      {!active && (
        <div className="block sm:hidden" onClick={()=>{setActive(true)}} >
        <img src={hamburger} className="cursor-pointer" alt="" />
      </div>
    )}

      {active && (
        <div className="block sm:hidden z-50" onClick={()=>{setActive(false)}} >
        <img src={close} className="cursor-pointer" alt="" />
      </div>
      )}

      </div>

       {active && (
        
        <div>
          <div className="fixed inset-0 bg-black/60 z-40"></div>

         <div className="mt-4 mx-auto w-[90%] bg-white rounded-lg text-black relative z-50 block sm:hidden">
          
            <ul className="flex flex-col w-full">
              <li className="p-4 font-bold border-b"><a href="#" >About</a></li>
              <li className="p-4 font-bold border-b"><a href="#" >Discover</a></li>
              <li className="p-4 font-bold "><a href="#" >Get Started</a></li>
            </ul>
        </div>
        </div>
       )}

          <Modal/>
       
     
    </div>
  );
};

export default Hero;
