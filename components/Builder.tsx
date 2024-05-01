import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  Sandpack,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { useState } from "react";

import {
  githubLight,
  sandpackDark,
  amethyst,
} from "@codesandbox/sandpack-themes";

const Builder = (code : any) => {

  console.log("builder code", code);
  
  const [reactCode, setReactCode] = useState(`import React from "react";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            My Website
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="#" className="navbar-item">
              Home
            </a>
            <a href="#" className="navbar-item">
              About
            </a>
            <a href="#" className="navbar-item">
              Contact
            </a>
          </div>
        
        </div>
      </div>
    </nav>
  );
}
`);

  const [buttonCode, setButtonCode] = useState(
    `export default function Button() {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button denem
      </button>
    )
  }`
  );
  return (
    <div
        className="w-full h-full bg-[#060517] flex justify-center items-center"
    >

      
      <Sandpack
          options={{
            showLineNumbers: false, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 420, // default - 300
            editorWidthPercentage: 40, // default - 50


            autoReload: true, // default - false
            autorun: true, // default - false

            externalResources: ["https://cdn.tailwindcss.com"]
            
              
            
          }}
          template="react"
          theme={amethyst}
        

          files={{
            "App.js": {
              code: code.code,

              language: "javascript",

            }
          }}

          

          
      />
    </div>
  );
};

export default Builder;
