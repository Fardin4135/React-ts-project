import { useState } from "react";
// import "../Components/Modal.css";
import masterCraft from "../assets/logo-mastercraft.svg";
// import bookmark from "../assets/icon-bookmark.svg";
import Modal2 from "./Modal2";
import { CiBookmark } from "react-icons/ci";
const Modal = () => {
  const [active, setActive] = useState<boolean>(false);
  const [modalBookmark, setModalBookmark] = useState<boolean>(false);


  const total = 100000;
  const raised = 89914;

  const progress = (raised / total) * 100;

  const buttonClasses = `
    p-3 rounded font-bold transition duration-300
    ${
      modalBookmark
        ? "flex items-center relative bg-[hsla(180,100%,96%,1.00)]  text-[hsl(176,72%,28%)]  font-bold rounded-full py-3 md:pl-12 lg:pl-16 pr-6  hidden md:block"
        : "flex items-center relative bg-gray-100 text-gray-500 font-bold rounded-full py-3 md:pl-12 lg:pl-16 pr-6  hidden md:block"
    }
  `;

  const iconClasses = `
          ${
            modalBookmark
              ? "md:absolute md:end-[71%] bg-[hsl(176,50%,47%)] bottom-0 border  rounded-full md:w-[48px] p-2 sm:p-3 md:p-4"
              : "md:absolute md:end-[71%] bg-black bottom-0 border  rounded-full md:w-[48px] p-2 sm:p-3  md:p-4"
          }
  `;

  const darkClasses = `  ${
    modalBookmark ? "text-black font-bold" : "text-white "
  }
  `;
  return (
    <div className="container py-5 z-10 ">
      <div className="absolute modal w-[80%] md:w-1/2 top-[84%] sm:top-[80%]  left-1/2 -translate-x-1/2   ">
        <div className="text-black bg-white rounded-lg relative py-3 px-5 md:py-6 md:px-8">
          <h3 className="text-center font-bold text-base sm:text-lg md:text-2xl pt-6">
            Mastercraft Bamboo Monitor Riser
          </h3>
          <p className="text-center text-gray-500 py-2 text-xs sm:text-sm md:text-sm">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain
          </p>
          <img
            src={masterCraft}
            className="absolute absolute absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />

          <div className="flex justify-between items-center w-full my-2  md:py-2 md:pt-4 gap-3">
            <button
              className="text-white text-[0.5rem] sm:text-[0.8rem] w-full md:w-auto md:text-sm lg-text-lg font-bold bg-[hsl(176,50%,47%)] px-2 md:px-6 lg:px-8 rounded-full py-2 md:py-3"
             onClick={() => {
  setActive(prev => {
    console.log("before:", prev);
    console.log("after:", !prev);
    return !prev;
  });
}}

            >
              Back this project
            </button>

            <button
              className={buttonClasses}
              onClick={() => {
                !modalBookmark
                  ? setModalBookmark(true)
                  : setModalBookmark(false);
              }}
            >
              {/* <img
                src={bookmark}
                alt=""
                width={48}
                className="absolute end-[70%] bottom-0 btn-img"
              /> */}

              <div className={iconClasses}>
                <CiBookmark className={darkClasses} />
              </div>
              <span className="">Bookmark</span>
            </button>

            <button
              className="inline-flex items-center justify-center p-0 rounded block md:hidden"
              onClick={() => {
                !modalBookmark
                  ? setModalBookmark(true)
                  : setModalBookmark(false);
              }}
            >
              <div className={iconClasses}>
                <CiBookmark className={darkClasses} />
              </div>

              {/* <img src={bookmark} className="w-10" /> */}
            </button>
          </div>
        </div>

        {/* <div className='text-black bg-gray-100 rounded-lg my-6 flex flex-col md:flex-row items-center justify-around py-10 gap-3 md:px-4 '>

            <div className='border-b pb-4 md:pr-9 md:border-r border-gray-400 md-px-2 '>
                <h3 className='font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center'>
                   $89,914 
                </h3>
                <p className='text-gray-500 md:pt-2 text-xs md:text-sm'>of $100,000 backend</p>
            </div>

            <div className='text-center '>
                <h3 className='font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl'>
                    5,007
                </h3>
                <p className='text-gray-500 md:pt-2 text-xs md:text-sm'>total backers</p>
            </div>
            
            <div className='md:pl-8 lg:pr-10 md:border-l border-gray-400 text-center '>
                <h3 className='font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center'>
                    56
                </h3>
                <p className='text-gray-500 md:pt-2 text-xs md:text-sm'>days left</p>
            </div>

        </div> */}

        <div className="bg-white rounded-lg my-6 py-10 md:px-4 ">
          <div className="text-black rounded-lg  flex flex-col md:flex-row items-center justify-around gap-3">
            <div className=" ">
              <h3 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center">
                $89,914
              </h3>
              <p className="text-gray-500 md:pt-2 text-xs lg:text-sm">
                of $100,000 backend
              </p>
            </div>

            <div className=" text-center border-b md:border-b-0 border-t md:border-t-0 py-3 md:py-0 md:border-l  border-gray-400 md:pl-8 lg:pl-14 xl:pl-12 2xl:pl-45">
              <h3 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                5,007
              </h3>
              <p className="text-gray-500 md:pt-2 text-xs lg:text-sm">
                total backers
              </p>
            </div>

            <div className=" md:px-2 text-center md:border-l border-gray-400 md:pl-8 lg-pr-12">
              <h3 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center">
                56
              </h3>
              <p className="text-gray-500 md:pt-2 text-xs lg:text-sm">
                days left
              </p>
            </div>
          </div>
          <div className="px-4 pt-4">
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4 ">
              <div
                className="bg-[hsl(176,50%,47%)] h-3 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-black bg-white rounded-lg p-6  lg:p-8 mb-10">
          <div className="about">
            <h3 className="font-bold text-lg md:text-xl py-1 md:py-3 ">
              About this project
            </h3>
            <p className="py-2 md:py-3 text-xs md:text-sm lg:text-base text-gray-500">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p className="py-2 md:py-3  text-xs md:text-sm lg:text-base text-gray-500">
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>



          {/* <div className=" my-4 md:my-6 border border-gray-300 rounded"> */}
            <div className="card p-5 md:p-6 y-4 md:my-6 border border-gray-300 rounded ">
              <div className="flex justify-between flex-wrap ">
                <h3 className="font-bold">Bamboo Stand</h3>
                <p className="text-[hsl(176,72%,28%)]">pledge $25 or more</p>
              </div>
              <p className="py-3 text-xs md:text-sm lg:text-base text-gray-500">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                specific Backer member list
              </p>
              <div className="flex justify-between flex-wrap gap-3">
                <h3 className="font-bold text-2xl flex items-center gap-2">
                  101{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    left
                  </span>
                </h3>
                <button className=" px-4 py-2 sm:px-8 sm:py-3 md:px-3 md:px-7 bg-[hsl(176,50%,47%)] rounded-full  text-xs px-7 font-bold text-white"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                !active ? setActive(true) : setActive(false);
              }}
                >
                  Select Reward
                </button>
              </div>
          </div>



                 {/* <div className='border-t'>
                         <div className='flex items-center justify-between p-3 mt-2
                         flex-wrap gap-3 items-center
                         '>
                        <p className='text-gray-400 text-sm cursor-pointer' 

                        >Enter your Pledge</p>

                        <div className='flex items-center gap-3'>
                          <input type="number" 
                          placeholder='$'
                          className='outline-none border border-[hsl(176,50%,47%)] rounded-full w-[80px] py-2 px-4 md:py-3 md:px-6 text-xs font-bold cursor-pointer text-xs'
                         value={number}
                         min={25}
                          onChange={(e)=>setNumber(e.target.value)}
                           
                        />
                        <button className='bg-[hsl(176,50%,47%)] text-white rounded-full py-2 px-4  md:py-3 md:px-6 text-xs font-bold' onClick={handleClick}>Continue</button>
                        </div>
                      </div>
                      </div> */}


            {/* </div> */}

            <div className="card p-5 md:p-6 my-4 md:my-6 border border-gray-300 rounded ">
              <div className="flex justify-between flex-wrap ">
                <h3 className="font-bold">Black edition Stand</h3>
                <p className="text-[hsl(176,72%,28%)]">pledge $75 or more</p>
              </div>
              <p className="py-3  text-xs md:text-sm lg:text-base text-gray-500">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                specific Backer member list
              </p>
              <div className="flex justify-between flex-wrap gap-3">
                <h3 className="font-bold text-3xl md:text-2xl  flex items-center gap-2">
                  64{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    left
                  </span>
                </h3>
                <button className="px-4 py-2 sm:px-8 sm:py-3 md:px-3 md:px-7 bg-[hsl(176,50%,47%)] rounded-full text-xs px-7 font-bold text-white"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                !active ? setActive(true) : setActive(false);
              }}
                >
                  Select Reward
                </button>
              </div>
            </div>

            <div className="card p-5 md:p-6 my-4 md:my-6 border border-gray-300 rounded  border-gray-200 opacity-50 cursor-not-allowed">
              <div className="flex justify-between flex-wrap ">
                <h3 className="font-bold">Mahogany Special Edition</h3>
                <p className="text-[hsl(176,72%,28%)]">pledge $200 or more</p>
              </div>
              <p className="py-3  text-xs md:text-sm lg:text-base text-gray-500">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                specific Backer member list
              </p>
              <div className="flex justify-between flex-wrap gap-3">
                <h3 className="font-bold text-4xl md:text-2xl flex items-center gap-2">
                  0{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    left
                  </span>
                </h3>
                <button className="px-4 py-2 sm:px-8 sm:py-3 md:px-3 md:px-7 bg-gray-700 cursor-not-allowed rounded-full text-xs px-7 font-bold text-white">
                  Out of Stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* {active && (
  <>
  
    <div className="fixed inset-0 bg-black/60 z-40"></div>

    <Modal2 setActive={setActive} />
  </>
)} */}
      {active && <Modal2 setActive={setActive} />}
    </div>
  );
};

export default Modal;
