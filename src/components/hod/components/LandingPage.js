import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/landingpage.css";
import "../App.css";
import IMG from "../assets/img/img3.png";
import Button from "@mui/material/Button";
import Userdata from "./Account.json";

function LandingPage() {
  const [assignedTo, setAssignedTo] = useState("");
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => {
    setAssignedTo("");
    setTaskName("");
    setDescription("");
    setDueDate("");
  };

  const handleAssign = () => {
    if (
      assignedTo === "" ||
      taskName === "" ||
      description === "" ||
      dueDate === ""
    ) {
      toast.error("Fill the details to assign the task", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Task assigned successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      handleCancel();
    }
  };

  return (
    <>
      <div className="land-container">
        <div className="main-bar">
          <div className="user-wel">
            <div className="welc">
              <div id="welc">
                <h3 style={{ fontWeight: "400" }}>Welcome....!!</h3>
              </div>
            </div>
            <div className="uname">
              <div id="uname">
                <h1
                  style={{
                    color: "var(--uname)",
                    marginTop: "1rem",
                    fontWeight: "450",
                  }}
                >
                  {Userdata[0].username}
                </h1>
              </div>
              <div id="desig">
                <h5 style={{ color: "var(--uname)", fontWeight: "500" }}>
                  {Userdata[0].designation}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="taskbar">
          <h3>Assign a Task</h3>
          <div className="task-list">
            <form onSubmit={handleSubmit} className="form">
              <div className="inputs">
                <div className="input-container">
                  {" "}
                  <div
                    className="side-tag"
                    style={{
                      backgroundColor: "#7384DE",
                      width: "5px",
                      height: "6%",
                      position: "fixed",
                      marginTop: "0.1px",
                    }}
                  >
                    &nbsp;
                  </div>
                  <input
                    type="text"
                    id="box1"
                    name="email"
                    className="box"
                    placeholder="Assigned To"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <div
                    className="side-tag"
                    style={{
                      backgroundColor: "#7384DE",
                      width: "5px",
                      height: "6.1%",
                      position: "fixed",
                      marginTop: "0.1px",
                    }}
                  >
                    &nbsp;
                  </div>
                  <input
                    type="text"
                    name="task"
                    className="box"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <div
                    className="side-tag"
                    style={{
                      backgroundColor: "#7384DE",
                      width: "5px",
                      height: "10.4%",
                      position: "fixed",
                    }}
                  >
                    &nbsp;
                  </div>
                  <textarea
                    name="desc"
                    id="desc"
                    className="box"
                    placeholder="Description of the task"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="input-container">
                  <div
                    className="side-tag"
                    style={{
                      backgroundColor: "#7384DE",
                      width: "5px",
                      height: "6%",
                      position: "fixed",
                      marginTop: "0.1px",
                    }}
                  >
                    &nbsp;
                  </div>
                  <input
                    type="text"
                    name="duedate"
                    className="box"
                    placeholder="Due Date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="btn">
                <Button variant="contained" onClick={handleCancel} id="cancel">
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleAssign} id="submit">
                  Assign Task
                </Button>
              </div>
            </form>
            <div className="side">
              <img src={IMG} alt="Task Illustration" />
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default LandingPage;
