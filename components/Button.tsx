
"use client "
import React, { useEffect } from 'react';
import Builder from './Builder';

interface ButtonProps {


    

}

const Button: React.FC<ButtonProps> = ({ }) => {



    const [query, setQuery] = React.useState("");
    const [apiData, setApiData] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

  
    const handleCreate = () => {
        setIsLoading(true); // istek gönderildiğinde loading durumunu true yap

        fetch("http://localhost:3000/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: { query },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data", data);
            setApiData(data);
          })
          .finally(() => {
            setIsLoading(false); // istek tamamlandığında loading durumunu false yap
          });
        }


        useEffect(() => {
            console.log("apiData", query);
        }
        , [query])

    return (
       <div>
                {
                    apiData && <Builder code={apiData} />
                }

           <input
          type="text"
          placeholder="make a blue navbar"

          value={query}
    
          onChange={ (e) => setQuery(e.target.value)}
          className="bg-transparent text-white p-6 text-center font-thin placeholder:font-extralight w-[520px] h-[52px] placeholder-center placeholder:text-slate-600 text-lg focus:outline-none"
        />
        <button
          className="text-white p-2 bg-[#5B2ACC] w-40 h-[52px] focus:outline-none active:outline-none hover:bg-[#7C3AED]"
          onClick={() => handleCreate()}
        >
          Create
        </button>
       </div>
    );
};

export default Button;
