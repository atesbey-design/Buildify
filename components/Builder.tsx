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

const Builder = () => {
  const [reactCode, setReactCode] = useState(`import React from "react";
import Button from "./Button";

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
          <Button />
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
    <div>
      <SandpackProvider
        template="react"
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        files={{
          "/App.js": reactCode,
          "/Button.js": buttonCode,
        }}
        theme={amethyst}
      >
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default Builder;
