import React from "react";
import "./styles.css";
const AdminDashboard = () => {
  const data = [
    {
      username: "samrat_53",
      day: 1,
      driveLink: "www.google.com",
      status: "pending",
      liveLink: "www.google.com",
    },
    {
      username: "samrat_53",
      day: 1,
      driveLink: "www.google.com",
      status: "pending",
      liveLink: "www.google.com",
    },
  ];

  return (
    <>
      <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
      <h1 className="py-5  ">Admin Dashboard</h1>
        <div className="submission-form rounded-lg flex flex-col items-center justify-center p-8 w-[50wh]">
          <div className="overflow-x-auto">
            <table className="table my-5">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Day</th>
                  <th>Drive Link</th>
                  <th>Live Link</th>
                  <th>Accept / Reject</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.username}>
                    <td>{item.username}</td>
                    <td>{item.day}</td>
                    <td>
                      <a
                        href={item.driveLink}
                        className="overflow-hidden truncate ext-ellipsis block"
                      >
                        {item.driveLink}
                      </a>
                    </td>
                    <td>
                      <a
                        href={item.liveLink}
                        className="overflow-hidden truncate max-w-xs block"
                      >
                        {item.liveLink}
                      </a>
                    </td>
                    <td>
                      {item.status == "pending" ? (
                        <div className="btn-array flex space-x-3">
                          <button
                            name="accepted"
                            value="accepted"
                            className="btn-sm btn-accept bg-green-700"
                          >
                            Accept
                          </button>
                          <button
                            name="rejected"
                            value="rejected"
                            className="btn-sm btn-reject bg-red-700"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        "Seen"
                      )}
                    </td>
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

export default AdminDashboard;
