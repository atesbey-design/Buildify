
"use client"
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";


const variants = {
  initial: { opacity: 0, y: "50%" },
  animate: { opacity: 1, y: "0%" },
  exit: { opacity: 0, y: "-50%" },
  visible: { opacity: 0, y: "-50%" ,DelayNode:1},
};




const App = () => {
  

  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
const controls = useAnimationControls();





  

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleCreate = () => {


    console.log("create with input value:", inputValue);
    setIsLoading(true);

    //api call here



    setIsVisible(true)
    controls.start('visible');
  };





  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="w-full h-full justify-center items-center flex text-center flex-col space-y-16 bg-[#060517]"
    >
     {!isVisible?
            <div className="flex flex-col space-y-2">
            <motion.p
              variants={variants}
              transition={{ delay: 1 }}
              className="text-xl text-[#CCBDEF] font-light"
            >
              Design and edit your own components and interact with them instantly.
            </motion.p>
            <motion.h1
              variants={variants}
              transition={{ delay: 1.8 }}
              className="text-5xl text-white font-bold"
            >
              Turn your dream into reality in a <br /> few clicks.
            </motion.h1>
          </div>:<>
              {
                isLoading?
                <motion.p
                variants={variants}
                transition={{ delay: 1 }}
                className="text-xl text-[#CCBDEF] font-light"
              >
                Loading...
              </motion.p>: null
              }

            </>
      
    }

      <motion.div
        variants={variants}
        transition={{ delay: 2.6 }}

        animate={controls}
        className="flex justify-between items-center flex-row border border-[#5B2ACC] rounded-sm"
      >
        <input
          type="text"
          placeholder="make a blue navbar"
          value={inputValue}
          onChange={handleInputChange}
          className="bg-transparent text-white p-6 text-center font-thin placeholder:font-extralight w-[520px] h-[52px] placeholder-center placeholder:text-slate-600 text-lg focus:outline-none"
        />
        <button
          className="text-white p-2 bg-[#5B2ACC] w-40 h-[52px] focus:outline-none active:outline-none hover:bg-[#7C3AED]"

          onClick={()=>handleCreate()}
        >
          Create
        </button>
      </motion.div>
    </motion.div>
  );
};

export default App;
