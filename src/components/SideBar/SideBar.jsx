import React from "react";
import "./SideBar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="logo" className="logo" />
        <hr className="hr" />

        <div className="sidebar-pagination">
          <Link to="/Home" className="sidebar-text">
            <i className="fa-solid fa-house"></i>
            <p className="sidebar-p">Report</p>
          </Link>
          <Link to="/students" className="sidebar-text">
            <i className="fa-solid fa-graduation-cap "></i>
            <p className="sidebar-p">Students</p>
          </Link>
          <Link to="/group" className="sidebar-text">
            <i className="fa-solid fa-people-group"></i>
            <p className="sidebar-p">Groups</p>
          </Link>
          <Link to="/" className="sidebar-text">
            <i className="fa-solid fa-credit-card"></i>
            <p className="sidebar-p">Payments</p>
          </Link>
          <Link to="/davomat" className="sidebar-text">
            <i className="fa-solid fa-clipboard-user"></i>
            <p className="sidebar-p">Attendance</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
