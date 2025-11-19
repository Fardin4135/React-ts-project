import { useRef, useState } from "react";
import modalClose from "../assets/icon-close-modal.svg";
import Modal3 from "./Modal3";

interface Modal2Props {
  setActive: (active: boolean) => void;
}

const Modal2: React.FC<Modal2Props> = ({ setActive }) => {
  const [selected, setSelected] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [num, setNum] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

  const minValue =
    selected === "option2" ? 25 : selected === "option3" ? 75 : 0;

  const handleClick = () => {
    if (!num || num === "") {
      alert("Please enter a value");
      return;
    }

    if (Number(num) < minValue) {
      alert(`Please enter an amount greater than or equal to $${minValue}`);
      return;
    }

    setOpen(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handlePClick = () => {
    inputRef.current?.focus();
  };

  const classes =
    selected === "option2"
      ? "border border-[hsl(176,50%,47%)] rounded my-4"
      : "border border-gray-300 rounded my-4";

  const classes2 =
    selected === "option3"
      ? "border border-[hsl(176,50%,47%)] rounded my-4"
      : "border border-gray-300 rounded my-4";

  const classes3 =
    selected === "option1"
      ? "border border-[hsl(176,50%,47%)] rounded my-4"
      : "border border-gray-300 rounded my-4";

  return (
    <div>
      {show && (
        <div>
          <div className="fixed inset-0 bg-black/60 z-40"></div>
          <div className=" p-5 sm:p-6 md:p-8 bg-white border rounded-lg text-black w-[90%] absolute md:w-1/2 top-[72%] sm:top-[46%]  left-1/2 -translate-x-1/2 z-50">
            <img
              src={modalClose}
              className="absolute top-0 right-0 cursor-pointer p-4"
              alt=""
              onClick={() => setActive(false)}
            />
            <h3 className="font-bold text-lg md:text-xl pb-2">
              Back this project
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Want to support us in bringing Bamboo Riser out in the world?
            </p>

            <div className="card">
              {/* Option 1 */}
              <div className={classes3}>
                <div className="card-item flex gap-3 items-start p-4">
                  <div>
                    <input
                      type="radio"
                      value="option1"
                      checked={selected === "option1"}
                      onChange={(e) => setSelected(e.target.value)}
                      id="option1"
                      className="
                            appearance-none
                            h-5 w-5              
                            border border-gray-400
                            rounded-full
                            checked:bg-[hsl(176,72%,28%)] 
                            checked:border-green-600
                            cursor-pointer
                            my-1
                        "
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="option1">
                        <h5 className="cursor-pointer text-[hsl(176,50%,47%)] font-bold text-sm md:text-base">
                          Pledge with no Reward
                        </h5>
                      </label>

                      <div className="flex gap-2 items-center hidden">
                        <h3 className="font-bold text-lg">101</h3>
                        <p className="font-bold text-xs text-gray-400">left</p>
                      </div>
                    </div>
                    <p className="py-3 text-sm text-gray-500">
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed to
                      receive product updates via email.
                    </p>
                  </div>
                </div>

                {selected === "option1" && (
                  <div className="border-t">
                    <div
                      className="flex items-center justify-between p-3 mt-2
                         flex-wrap gap-3 items-center
                         "
                    >
                      <p
                        className="text-gray-400 text-sm cursor-pointer"
                        onClick={handlePClick}
                      >
                        Enter your Pledge
                      </p>

                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          placeholder="$"
                          className="outline-none border border-[hsl(176,50%,47%)] rounded-full w-[80px] py-2 px-4 md:py-3 md:px-6 text-xs font-bold cursor-pointer text-xs
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none
             [-moz-appearance:textfield]"
                          value={num}
                          min={0}
                          onChange={(e) => setNum(e.target.value)}
                          ref={inputRef}
                        />

                        <button
                          className="bg-[hsl(176,50%,47%)] text-white rounded-full py-2 px-4  md:py-3 md:px-6 text-xs font-bold"
                          onClick={handleClick}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 2 */}
              <div className={classes}>
                <div className="card-item flex gap-3 p-4">
                  <div>
                    <input
                      type="radio"
                      value="option2"
                      checked={selected === "option2"}
                      onChange={(e) => setSelected(e.target.value)}
                      id="option2"
                      className="
                            appearance-none
                            h-5 w-5              
                            border border-gray-400
                            rounded-full
                            checked:bg-[hsl(176,72%,28%)] 
                            checked:border-green-600
                            cursor-pointer
                            my-1
                        "
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="option2" className="flex gap-2">
                        <h5 className="cursor-pointer text-[hsl(176,50%,47%)] font-bold text-sm md:text-base 2xl:text-xl">
                          Bamboo Stand
                        </h5>
                        <h5 className="cursor-pointer text-[hsl(176,50%,47%)] font-bold text-sm md:text-base 2xl:text-xl">
                          Pledge $25 or more
                        </h5>
                      </label>

                      <div className="flex gap-2 items-center hidden sm:block">
                        <h3 className="font-bold text-lg 2xl:text-xl inline pr-2">
                          101
                        </h3>
                        <p className="font-bold text-xs text-gray-400 2xl:text-lg inline">
                          left
                        </p>
                      </div>
                    </div>
                    <p className="py-3 text-sm text-gray-500 2xl:text-xl">
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed
                      to receive product updates via email.
                    </p>
                  </div>
                </div>

                {selected === "option2" && (
                  <div className="border-t">
                    <div className="flex items-center justify-between p-3 mt-2 flex-wrap gap-3 items-center">
                      <p
                        className="text-gray-400 text-sm cursor-pointer"
                        onClick={handlePClick}
                      >
                        Enter your Pledge
                      </p>

                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          placeholder="$"
                          className="outline-none border border-[hsl(176,50%,47%)] rounded-full w-[80px] py-2 px-4 md:py-3 md:px-6 text-xs font-bold cursor-pointer text-xs
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none
             [-moz-appearance:textfield]"
                          value={num}
                          min={0}
                          onChange={(e) => setNum(e.target.value)}
                          ref={inputRef}
                        />

                        <button
                          className="bg-[hsl(176,50%,47%)] text-white rounded-full py-2 px-4  md:py-3 md:px-6 text-xs font-bold"
                          onClick={handleClick}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 3 */}
              <div className={classes2}>
                <div className="card-item flex gap-3 items-start p-4">
                  <div>
                    <input
                      type="radio"
                      value="option3"
                      checked={selected === "option3"}
                      onChange={(e) => setSelected(e.target.value)}
                      id="option3"
                      className="
                            appearance-none
                            h-5 w-5              
                            border border-gray-400
                            rounded-full
                            checked:bg-[hsl(176,72%,28%)] 
                            checked:border-green-600
                            cursor-pointer
                            my-1
                        "
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="option3" className="flex gap-2 flex-wrap">
                        <h5 className="cursor-pointer font-bold text-sm md:text-base 2xl:text-xl">
                          Pledge with no Reward
                        </h5>
                        <h5 className="cursor-pointer text-[hsl(176,50%,47%)] font-bold text-sm md:text-base 2xl:text-xl">
                          Pledge $75 or more
                        </h5>
                      </label>

                      <div className="flex gap-2 items-center hidden sm:block">
                        <h3 className="font-bold text-lg 2xl:text-xl inline pr-2">
                          64
                        </h3>
                        <p className="font-bold text-xs text-gray-400 2xl:text-lg inline">
                          left
                        </p>
                      </div>
                    </div>
                    <p className="py-3 text-sm text-gray-500 2xl:text-xl">
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed
                      to receive product updates via email.
                    </p>
                  </div>
                </div>

                {selected === "option3" && (
                  <div className="border-t">
                    <div className="flex items-center justify-between p-3 mt-2 flex-wrap gap-3 items-center">
                      <p
                        className="text-gray-400 text-sm cursor-pointer"
                        onClick={handlePClick}
                      >
                        Enter your Pledge
                      </p>

                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          placeholder="$"
                          className="outline-none border border-[hsl(176,50%,47%)] rounded-full w-[80px] py-2 px-4 md:py-3 md:px-6 text-xs font-bold cursor-pointer text-xs
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none
             [-moz-appearance:textfield]"
                          value={num}
                          min={0}
                          onChange={(e) => setNum(e.target.value)}
                          ref={inputRef}
                        />

                        <button
                          className="bg-[hsl(176,50%,47%)] text-white rounded-full py-2 px-4  md:py-3 md:px-6 text-xs font-bold"
                          onClick={handleClick}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 4 (disabled) */}
              <div className="p-4 border border-gray-300 rounded my-4">
                <div className="card-item flex gap-3 items-start border-gray-200 opacity-50 cursor-not-allowed">
                  <div>
                    <input
                      type="radio"
                      value="option4"
                      checked={selected === "option4"}
                      onChange={(e) => setSelected(e.target.value)}
                      id="option4"
                      className="
                            appearance-none
                            h-5 w-5              
                           border
                            rounded-full
                            cursor-pointer
                            my-1
                            border-gray-400
                            cursor-not-allowed
                        "
                    />
                  </div>

                  <div>
                    <div className="flex justify-between ">
                      <label htmlFor="option4" className="flex gap-2 flex-wrap">
                        <h5 className="cursor-not-allowed font-bold text-sm md:text-base 2xl:text-xl">
                          Mahogany Special Edition
                        </h5>
                        <h5 className="cursor-not-allowed text-[hsl(176,50%,47%)] font-bold text-sm md:text-base 2xl:text-xl">
                          Pledge $200 or more
                        </h5>
                      </label>

                      <div className="flex gap-2 items-center hidden sm:block">
                        <h3 className="font-bold text-lg 2xl:text-xl inline pr-2">
                          0
                        </h3>
                        <p className="font-bold text-xs text-gray-400 2xl:text-lg inline">
                          left
                        </p>
                      </div>
                    </div>
                    <p className="py-3 text-sm text-gray-500 2xl:text-xl">
                      Choose to support us without a reward if you simply
                      believe in our project. As a backer, you will be signed
                      to receive product updates via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && <Modal3 setOpen={setOpen} setShow={setShow} />}
    </div>
  );
};

export default Modal2;
