"use client";
import Builder from "@/components/Builder";
import { setPrompt } from "@/store/Slice/PromptSlice";
import { motion, useAnimationControls } from "framer-motion";

import { createContext, useContext, useState } from 'react';
import { useAppContext } from "./context";
import Button from "@/components/Button";



const variants = {
  initial: { opacity: 0, y: "50%" },
  animate: { opacity: 1, y: "0%" },
  exit: { opacity: 1, y: "100%" },

  visible: { opacity: 0, y: "-50%" },
};




const App = () => {
  const {data, setData} = useAppContext();


  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);


  const [isLoading, setIsLoading] = useState(false);
  const controls = useAnimationControls();




  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleCreate = () => {
    console.log("create with input value:", inputValue);
    setIsVisible(true);
    setIsLoading(true);


      setData(inputValue);
    //api call here

   
    controls.start(variants.visible);
  };


  console.log("prompt", data);
  



  

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="w-full h-full justify-center items-center flex text-center flex-col space-y-16 bg-[#060517]"
    >
      {!isVisible ? (
        <div className="flex flex-col space-y-2">
          <motion.p
            variants={variants}
            transition={{ delay: 1 }}
            className="text-xl text-[#CCBDEF] font-light"
          >
            Design and edit your own components and interact with them
            instantly.
          </motion.p>
          <motion.h1
            variants={variants}
            transition={{ delay: 1.8 }}
            className="text-5xl text-white font-bold"
          >
            Turn your dream into reality in a <br /> few clicks.
          </motion.h1>
        </div>
      ) : (
        <>
          {isLoading ? (
            <motion.p
              variants={variants}
              transition={{ delay: 1 }}
              className="text-xl text-[#CCBDEF] font-light"
            >
              <Builder prompt={prompt} />
            </motion.p>
          ) : null}
        </>
      )}

      <motion.div
        variants={variants}
        transition={
          isVisible
            ? { delay: 0.5, duration: 0.5 }
            : { delay: 2.6 }
        }
        animate={isVisible ? variants.exit : variants.animate}
        className="flex justify-between items-center flex-row border border-[#5B2ACC] rounded-sm"
      >
        <Button />
      </motion.div>
    </motion.div>
  );
};

export default App;
