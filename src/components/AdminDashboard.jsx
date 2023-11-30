import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <div className="submission-form rounded-sm flex flex-col items-center justify-center">
      <h1 className="py-5">Admin Dashboard</h1>
        <details className="dropdown">
          <summary className="m-1 btn rounded-lg cursor-pointer bg-green-200 hover:bg-green-500 hover:text-white ">
            Domain Select
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-blue-100">
            <li>
              <a>Web Development</a>
            </li>
            <li>
              <a>Android Development</a>
            </li>
            <li>
              <a>AI / ML</a>
            </li>
          </ul>
        </details>

        <label className="form-control w-full max-w-xs my-2">
          <div className="label">
            <span className="label-text">Drive Link</span>
            <span className="label-text-alt text-green-600">*</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text">Live Link</span>
            <span className="label-text-alt text-blue-600">#</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Mandatory: <span className="text-green-600">*</span></span>
            <span className="label-text-alt">Optional: <span className="text-blue-600">#</span></span>
          </div>
        </label>
        <button className="btn">Submit</button>
      </div>
    </>
  );
};

export default AdminDashboard;
