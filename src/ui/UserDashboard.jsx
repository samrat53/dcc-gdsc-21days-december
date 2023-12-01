import React, { useState } from "react";
import "./styles.css";
const UserDashBoard = () => {
  const data = [
    {
      day: 1,
      link: "www.google.com",
      status: true,
    },
    {
      day: 1,
      link: "www.google.com",
      status: true,
    },
  ];

  const [driveLink, setDriveLink] = useState("");
  const [liveLink, setLiveLink] = useState("");

  const handleDriveLinkChange = (e) => {
    setDriveLink(e.target.value);
  };

  const handleLiveLinkChange = (e) => {
    setLiveLink(e.target.value);
  };

  const handleSubmit = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = urlRegex.test(driveLink);

    if (!isValidUrl) {
      console.error("Invalid URL");
      alert(`Invalid link`);
      return;
    }

    console.log("Form submitted:", { driveLink, liveLink });
  };

  return (
    <>
      <div className="custom-bg-co`lor bounded flex flex-col items-center justify-center h-[100vh]">
        <h1 className="pb-7 ">User Dashboard</h1>
        <div className="submission-form rounded-lg lg:flex items-center justify-center p-8 w-[50wh]">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Domain
            </option>
            <option name="web" value="web">
              Web Development
            </option>
            <option name="android" value="android">
              Android Development
            </option>
            <option name="aiml" value="aiml">
              Artificial Intelligence & Machine Learning
            </option>
          </select>

          <label className="form-control w-full max-w-xs p-3 mb-9 ">
            <div className="label ">
              <span className="label-text text-white">Drive Link</span>
              <span className="label-text-alt text-red-500">*</span>
            </div>
            <input
              type="text"
              placeholder="Mandatory"
              name="driveLink"
              value={driveLink}
              onChange={handleDriveLinkChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mb-9">
            <div className="label flex-col">
              <span className="label-text text-white ">Live Link</span>
            </div>
            <input
              type="text"
              placeholder="Live sample (optional)"
              name="liveLink"
              value={liveLink}
              onChange={handleLiveLinkChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <button
          className="btn -mt-9 mb-8 text-white hover:bg-green-500 hover:text-white"
          onClick={handleSubmit}
          disabled={!driveLink}
          // onclick(2 colors red n green)
        >
          Submit
        </button>
        <h2 className="pt-6 -mb-3 underline text-white">Your Submissions</h2>
        <div className="table-box overflow-x-auto w-[50%] ">
          <table className="table my-2 ">
            <thead>
              <tr>
                <th>Day</th>
                <th>Link</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.day}>
                  <td>{item.day}</td>
                  <td>
                    <a
                      href={item.link}
                      className="overflow-hidden truncate max-w-xs block underline"
                    >
                      Drive Link
                    </a>
                  </td>
                  <td>{item.status ? "Accepted" : "Rejected"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
