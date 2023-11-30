import React, { useState } from "react";
import "./styles.css";

const UserDashBoard = () => {
  const data = [
    {
      day: 1,
      link: "www.google.com",
      status: 30,
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
    // Your submission logic here
    console.log("Form submitted:", { driveLink, liveLink });
  };

  return (
    <>
      <div className="bounded flex flex-col items-center justify-center h-[100vh]">
        <div className="submission-form rounded-lg flex flex-col items-center justify-center p-8 w-[50wh]">
          <h1 className="py-5  ">User Dashboard</h1>

          <details className="dropdown">
            <summary className="m-1 text-white btn rounded-lg cursor-pointer bg-green-200 hover:bg-green-500 hover:text-white ">
              Domain Select
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-white">
              <li className="text-black">
                <a>Web Development</a>
              </li>
              <li li className="text-black">
                <a>Android Development</a>
              </li>
              <li className="text-black">
                <a>AI / ML</a>
              </li>
            </ul>
          </details>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text text-white">Drive Link</span>
              <span className="label-text-alt text-green-600">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="driveLink"
              value={driveLink}
              onChange={handleDriveLinkChange}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text text-white">Live Link</span>
              <span className="label-text-alt text-blue-600">#</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="liveLink"
              value={liveLink}
              onChange={handleLiveLinkChange}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt">
                Mandatory: <span className="text-green-600">*</span>
              </span>
              <span className="label-text-alt">
                Optional: <span className="text-blue-600">#</span>
              </span>
            </div>
          </label>
          <button
            className="btn my-2 text-white hover:bg-green-500 hover:text-white"
            onClick={handleSubmit}
            disabled={!driveLink}
          >
            Submit
          </button>
          <div className="overflow-x-auto">
            <table className="table my-5">
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
                        className="overflow-hidden truncate max-w-xs block"
                      >
                        {item.link}
                      </a>
                    </td>
                    <td>{item.status ? "Accepted" : "Rejected"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
