import { useState } from "react";
import "./css/LandingPage.css";

function LandingPage() {
  const data = [
    {
      title: "Dr.YYYYYYY",
      description: "Submission of CIA results",
      date: "25-04-2024",
      type: "progress",
    },
    {
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
    {
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "completed",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const getTaskStatusColor = (type) => {
    switch (type) {
      case "yet":
        return "var(--yettostart)";
      case "progress":
        return "var(--progress)";
      case "completed":
        return "var(--completed)";
      default:
        return "inherit";
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredData =
    activeTab === "all" ? data : data.filter((item) => item.type === activeTab);

  return (
    <>
      <div className="land-container">
        <div className="sidebar">
          <div
            onClick={() => handleTabClick("all")}
            className={`sidebar-item ${activeTab === "all" ? "active" : ""}`}
          >
            <h3>All Tasks</h3>
          </div>
          <div
            onClick={() => handleTabClick("yet")}
            className={`sidebar-item ${activeTab === "yet" ? "active" : ""}`}
          >
            <h3>Yet to start</h3>
          </div>
          <div
            onClick={() => handleTabClick("progress")}
            className={`sidebar-item ${
              activeTab === "progress" ? "active" : ""
            }`}
          >
            <h3>In progress</h3>
          </div>
          <div
            onClick={() => handleTabClick("completed")}
            className={`sidebar-item ${
              activeTab === "completed" ? "active" : ""
            }`}
          >
            <h3>Completed</h3>
          </div>
          <div
            onClick={() => handleTabClick("favourites")}
            className={`sidebar-item ${
              activeTab === "favourites" ? "active" : ""
            }`}
          >
            <h3>Favourites</h3>
          </div>
          <div
            onClick={() => handleTabClick("logout")}
            className={`sidebar-item ${activeTab === "logout" ? "active" : ""}`}
          >
            <h3>Logout</h3>
          </div>
        </div>
        <div className="main-content">
          <div className="main-bar">
            <input
              type="text"
              className="main-search"
              placeholder="Search..."
            />
          </div>
          <div className="taskbar">
            <h3>Tasks assigned</h3>
            <div className="task-list">
              {filteredData.map((item, index) => (
                <div key={index} id={item.type}>
                  <div>
                    <h3>{item.title} assigned</h3>
                    <div>
                      <p>Task Description: {item.description}</p>
                      <p style={{ marginRight: "10px" }}>Date: {item.date}</p>
                    </div>
                  </div>
                  <div
                    className="task-status"
                    style={{ backgroundColor: getTaskStatusColor(item.type) }}
                  >
                    &nbsp;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
