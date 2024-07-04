import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import "../assets/css/tasks.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import myimage from "../assets/img/goal.png";

import tom from "../assets/img/tom1.png";
import patlu from "../assets/img/patlu.png";
import motu from "../assets/img/motu.png";
import shinchan from "../assets/img/shinchan.png";
import jackie from "../assets/img/jackie.png";
import pikachoo from "../assets/img/pikachoo.png";
import charlie from "../assets/img/charlie.png";
import duck from "../assets/img/duck.png";
import jerry from "../assets/img/jerry.png";
import scooby from "../assets/img/scooby.png";
import dora from "../assets/img/dora.png";
import mickey from "../assets/img/mickey1.png";
import bugs from "../assets/img/bugs.png";
import sbob from "../assets/img/spongebob.png";

const profileImages = {
  "Dr.M.Mickey Mouse": mickey,
  "Dr.B.Bugs Bunny": bugs,
  "Mr.S.SpongeBob": sbob,
  "Ms.D.Dora": dora,
  "Ms.S.D.Scooby-Doo": scooby,
  "Mr.V.Tom": tom,
  "Mr.S.Jerry": jerry,
  "Ms.D.Donald Duck": duck,
  "Dr.Charlie Brown": charlie,
  "Dr.Pikachu": pikachoo,
  "Mr.Jackie Chan": jackie,
  "Mr.Shin Chan": shinchan,
  "Mr.Motu": motu,
  "Mr.Patlu": patlu,
};

function Userid({ filterType }) {
  const { userName } = useParams();

  const users = [
    { name: "Dr.M.Mickey Mouse", department: "CSE", designation: "HOD" },
    { name: "Dr.B.Bugs Bunny", department: "CSE", designation: "HOD" },
    { name: "Mr.S.SpongeBob", department: "Civil", designation: "Asst.Prof" },
    { name: "Ms.D.Dora", department: "CSE", designation: "Asst.Prof" },
    { name: "Ms.S.D.Scooby-Doo", department: "Mech", designation: "Asst.Prof" },
    { name: "Mr.V.Tom", department: "CSE", designation: "Asst.Prof" },
    { name: "Mr.S.Jerry", department: "CSE", designation: "Asst.Prof" },
    { name: "Ms.D.Donald Duck", department: "CSE", designation: "Asst.Prof" },
    { name: "Dr.Charlie Brown", department: "EEE", designation: "HOD" },
    { name: "Dr.Pikachu", department: "ECE", designation: "HOD" },
    { name: "Mr.Jackie Chan", department: "CSE", designation: "Asst.Prof" },
    { name: "Mr.Shin Chan", department: "IT", designation: "Asst.Prof" },
    { name: "Mr.Motu", department: "IT", designation: "Asst.Prof" },
    { name: "Mr.Patlu", department: "IT", designation: "Asst.Prof" },
  ];

  const data = useMemo(
    () => [
      {
        title: "Mr.Jack Sparrow",
        description: "Submission of CIA results",
        date: "25-04-2024",
        type: "progress",
      },
      {
        title: "Mr.Jack Sparrow",
        description: "Spread this info to students",
        date: "29-04-2024",
        type: "yet",
      },
      {
        title: "Dr.Jackie Chan",
        description: "Awareness on civil exams",
        date: "23-04-2024",
        type: "completed",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Spread this info to students",
        date: "29-04-2024",
        type: "yet",
      },
      {
        title: "Dr.Jackie Chan",
        description: "Submission of CIA results",
        date: "25-04-2024",
        type: "progress",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Awareness on civil exams",
        date: "23-04-2024",
        type: "completed",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Spread this info to students",
        date: "29-04-2024",
        type: "yet",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Spread this info to students",
        date: "29-04-2024",
        type: "yet",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Submission of CIA results",
        date: "25-04-2024",
        type: "progress",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Submission of CIA results",
        date: "25-04-2024",
        type: "progress",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Awareness on civil exams",
        date: "23-04-2024",
        type: "completed",
      },
      {
        title: "Dr.Jack Sparrow",
        description: "Awareness on civil exams",
        date: "23-04-2024",
        type: "completed",
      },
    ],
    []
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [sortDropdownVisible, setSortDropdownVisible] = useState(false);
  const [departmentSubMenuVisible, setDepartmentSubMenuVisible] =
    useState(false);
  const [designationSubMenuVisible, setDesignationSubMenuVisible] =
    useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // State to store selected task
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility

  useEffect(() => {
    if (filterType) {
      setFilteredData(data.filter((item) => item.type === filterType));
    } else {
      setFilteredData(data);
    }
  }, [filterType, data]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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

  const displayedData = filteredData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTask(null);
  };

  const user = users.find((u) => u.name === userName);

  const toggleSortDropdown = () => {
    setSortDropdownVisible(!sortDropdownVisible);
    setDepartmentSubMenuVisible(false);
    setDesignationSubMenuVisible(false);
  };

  const handleSortOptionClick = (option) => {
    if (option === "Designation") {
      setDesignationSubMenuVisible(!designationSubMenuVisible);
      setDepartmentSubMenuVisible(false);
    } else if (option === "Department") {
      setDepartmentSubMenuVisible(!departmentSubMenuVisible);
      setDesignationSubMenuVisible(false);
    } else {
      setDepartmentSubMenuVisible(false);
      setDesignationSubMenuVisible(false);
    }
  };

  return (
    <>
      <div className="land-container4">
        <div className="main-bar1">
          <div className="search-container">
            <input
              type="text"
              className="main-search1"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <SearchIcon className="search-icon" />
          </div>
          <button className="sort1" onClick={toggleSortDropdown}>
            <SwapVertIcon className="sort-icon" />
            Sort By
          </button>
          {sortDropdownVisible && (
            <div className="sort-dropdown4">
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick("All Tasks")}
              >
                All Tasks
              </div>
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick("Tasks Completed")}
              >
                Tasks Completed
              </div>
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick("Tasks Pending")}
              >
                Tasks Pending
              </div>
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick("Tasks Yet to start")}
              >
                Tasks Yet to start
              </div>
            </div>
          )}
        </div>

        <div className="taskbar4">
          <div className="main-bar6">
            <div className="sub-bar6">
              {user && (
                <img
                  src={profileImages[user.name]}
                  alt="User Icon"
                  className="user-icon"
                />
              )}
              <div className="user-info">
                <div className="name" style={{ fontWeight: "500" }}>
                  {user ? user.name : "User Not Found"}
                </div>
                <div className="designation">
                  {user ? user.designation : "Designation Not Found"}
                </div>
                <div className="task-info"></div>
              </div>
            </div>
          </div>
          <div className="task-list6">
            {displayedData.map((item, index) => (
              <div
                key={index}
                className="vertical-tag"
                id={item.type}
                onClick={() => handleTaskClick(item)}
              >
                <div className="task-details4" style={{ height: "5.5rem" }}>
                  <h3 style={{ fontWeight: "500" }}>
                    Task assigned by {item.title}
                  </h3>
                  <div className="task-info4">
                    <p>Task Description: {item.description}</p>
                    <p style={{ marginRight: "1rem" }}>Date: {item.date}</p>
                  </div>
                </div>
                <div
                  className="task-status4"
                  style={{ backgroundColor: getTaskStatusColor(item.type) }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Dialog
        onClose={handleCloseDialog}
        open={openDialog}
        fullWidth
        maxWidth="md"
        className="custom-dialog"
      >
        <DialogContent dividers>
          <div className="logo">
            <img src={myimage} alt="Logo"></img>
          </div>
          {selectedTask && (
            <div className="task-description">
              <div className="boxassign">
                <div className="texts">
                  <p>Assigned by: {selectedTask.title}</p>
                </div>
              </div>
              <div className="boxtask">
                <div className="texts">
                  <p>Task Name: {selectedTask.description}</p>
                </div>
              </div>
              <div className="boxdesc">
                <div className="texts">
                  <p>Description: {selectedTask.description}</p>
                </div>
              </div>
              <div className="boxdate">
                <div className="texts">
                  <p>Due date: {selectedTask.date}</p>
                </div>
              </div>
              <div className="boxstatus">
                <div className="texts">
                  <p>Task Status: {selectedTask.type}</p>
                </div>
              </div>
              <div className="piththaan">
                <div>
                  <Button className="piththaan1" onClick={handleCloseDialog}>
                    Done
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Userid;
