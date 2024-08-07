import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from "@mui/icons-material/SwapVert";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/users.css";
import { SidebarContext } from './Sidebar';


import bugs from "../assets/img/bugs.png";
import charlie from "../assets/img/charlie.png";
import dora from "../assets/img/dora.png";
import duck from "../assets/img/duck.png";
import jackie from "../assets/img/jackie.png";
import jerry from "../assets/img/jerry.png";
import mickey from "../assets/img/mickey1.png";
import motu from "../assets/img/motu.png";
import patlu from "../assets/img/patlu.png";
import pikachoo from "../assets/img/pikachoo.png";
import scooby from "../assets/img/scooby.png";
import shinchan from "../assets/img/shinchan.png";
import sbob from "../assets/img/spongebob.png";
import tom from "../assets/img/tom1.png";

function Users() {
  const { filter, setFilter } = useContext(SidebarContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortDropdownVisible, setSortDropdownVisible] = useState(false);
  const [departmentSubMenuVisible, setDepartmentSubMenuVisible] = useState(false);
  const [designationSubMenuVisible, setDesignationSubMenuVisible] = useState(false);
  const navigate = useNavigate();

  const data = useMemo(() => [
    { name: "Dr.M.Mickey Mouse", department: "CSE", designation: "HOD"},
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
  ], []);

  useEffect(() => {
    let newData = [...data];

    if (filter.type === "designation" && filter.value !== "All") {
      newData = newData.filter((item) => item.designation === filter.value);
    } else if (filter.type === "department" && filter.value !== "All") {
      newData = newData.filter((item) => item.department === filter.value);
    }

    newData = newData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(newData);
  }, [searchQuery, filter, data]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUserClick = (userName) => {
    navigate(`user/${userName}`);
  };

  const getTitle = () => {
    if (!filter.type) {
      return "All Users";
    }
    if (filter.type === "designation") {
      return `Users by Designation: ${filter.value}`;
    }
    if (filter.type === "department") {
      return `Users by Department: ${filter.value}`;
    }
    return "All Users";
  };

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

  const toggleSortDropdown = () => {
    setSortDropdownVisible(!sortDropdownVisible);

    setDepartmentSubMenuVisible(false);
    setDesignationSubMenuVisible(false);
  };

  const handleSortOptionClick = (option) => {
    if (option === 'Designation') {
      setDesignationSubMenuVisible(!designationSubMenuVisible);
      setDepartmentSubMenuVisible(false); 
    } else if (option === 'Department') {
      setDepartmentSubMenuVisible(!departmentSubMenuVisible);
      setDesignationSubMenuVisible(false); 
    } else {
      setFilter({ type: null, value: "All" });
      setDepartmentSubMenuVisible(false);
      setDesignationSubMenuVisible(false);
    }
  };

  const handleSubFilterClick = (type, value) => {
    setFilter({ type, value });
  };

  return (
    <>
      <div className="land-container1">
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
            <div className="sort-dropdown">
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick('Designation')}
              >
                Designation
                {designationSubMenuVisible && (
                  <KeyboardDoubleArrowRightIcon
                    style={{ position: "absolute", top: "0.7rem", right: "0.6rem" }}
                  />
                )}
                {designationSubMenuVisible && (
                  <div className="submenu">
                    <div onClick={() => handleSubFilterClick('designation', 'HOD')}>
                      HOD
                    </div>
                    <div onClick={() => handleSubFilterClick('designation', 'Asst.Prof')}>
                      Asst.Prof
                    </div>
                  </div>
                )}
              </div>
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick('Department')}
              >
                Department
                {departmentSubMenuVisible && (
                  <KeyboardDoubleArrowRightIcon
                    style={{ position: "absolute", top: "2.7rem", right: "0.6rem" }}
                  />
                )}
                {departmentSubMenuVisible && (
                  <div className="submenu">
                    <div onClick={() => handleSubFilterClick('department', 'CSE')}>
                      CSE
                    </div>
                    <div onClick={() => handleSubFilterClick('department', 'IT')}>
                      IT
                    </div>
                    <div onClick={() => handleSubFilterClick('department', 'ECE')}>
                      ECE
                    </div>
                    <div onClick={() => handleSubFilterClick('department', 'EEE')}>
                      EEE
                    </div>
                    <div onClick={() => handleSubFilterClick('department', 'Civil')}>
                      Civil
                    </div>
                    <div onClick={() => handleSubFilterClick('department', 'Mech')}>
                      Mech
                    </div>
                  </div>
                )}
              </div>
              <div
                className="sort-menu-item"
                onClick={() => handleSortOptionClick('All')}
              >
                All
              </div>
            </div>
          )}
        </div>

        <div className="taskbar1">
          <h3>{getTitle()}</h3>
          <div className="task-list1">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="vertical-tag"
                  onClick={() => handleUserClick(item.name)}
                >
                  <div className="content1">
                    <div className="icn1">
                      <img
                        src={profileImages[item.name]}
                        alt="User Icon"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%"
                        }}
                      />
                    </div>

                    <div className="det1-btn1">
                      <div className="det1">
                        <h3 style={{ fontWeight: "500", color: "var(--user-text)" }}>
                          {item.name}
                        </h3>
                        <p className="user-des" style={{ color: "var(--user-text)" }}>
                          Designation: {item.designation}
                        </p>
                      </div>

                      <div className="btn1">
                        <button
                          style={{
                            borderRadius: "25px",
                            border: "none",
                            width: "120px",
                            height: "40px",
                            fontWeight: "bolder",
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "150px",
                  justifyContent: "center",
                  background: "none",
                  color: "var(--text-side)",
                }}
              >
                We didn't find any users. Perhaps another search term?
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
