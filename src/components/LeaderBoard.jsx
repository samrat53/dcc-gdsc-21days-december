import React from "react";
import { useState } from "react";
import "./styles.css";

const LeaderBoard = () => {
  const [activeTab, setActiveTab] = useState("");
  const data = [
    {
      username: "samrat_53",
      score: 100,
    },
    {
      username: "samrat_53",
      score: 100,
    },
  ];

  return (
    <>
      <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
        <h1 className="text-white m-7" action="/">Leader Board</h1>
        <div className="submission-form rounded-lg lg:flex items-center justify-center p-8 w-[50wh]">
          <div role="tablist" className="tabs-lg tabs-lifted  ">
            <a
              role="tab"
              action="/web"
              className={`tab ${
                activeTab === "/web" ? "tab-active text-black" : "text-white"
              }`}
              onClick={() => setActiveTab("/web")}
            >
              Web
            </a>
            <a
              role="tab"
              className={`tab ${
                activeTab === "/android"
                  ? "tab-active text-black"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("/android")}
            >
              Android
            </a>
            <a
              role="tab"
              className={`tab ${
                activeTab === "/aiml" ? "tab-active text-black" : "text-white"
              }`}
              onClick={() => setActiveTab("/aiml")}
            >
              AI/ML
            </a>
          </div>
        </div>
        <div className="table-box-prev">
          {activeTab === "" ? (
            <h2 className="text-white items-center mt-8">Select Domain</h2>
          ) : (
            <div className="table-box overflow-x-auto">
              {activeTab && (
                <table className="table-lg my-2">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Enrollment No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.username}>
                        <td>{item.username}</td>
                        <td>{item.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
