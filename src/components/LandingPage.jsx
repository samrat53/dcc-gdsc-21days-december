import React from "react";
import { useState } from "react";
import "./styles.css";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
        <h1 className="text-white m-7" action="/">
          Hall of Fame!
        </h1>
        <div className="domain-tabs w-[80%]">
        <div role="tablist" className="tabs tabs-lifted">
            <a role="tab" className={`tab ${activeTab === "/web" ? 'tab-active text-black' : 'text-white'}`} onClick={() => setActiveTab("/web")}>Web</a>
            <a role="tab" className={`tab ${activeTab === "/android" ? 'tab-active text-black' : 'text-white'}`} onClick={() => setActiveTab("/android")}>Android</a>
            <a role="tab" className={`tab ${activeTab === "/aiml" ? 'tab-active text-black' : 'text-white'}`} onClick={() => setActiveTab("/aiml")}>AI/ML</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
