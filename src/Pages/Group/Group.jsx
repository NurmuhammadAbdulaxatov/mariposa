import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./Group.scss";

const Group = () => {
  return (
    <>
      <div className="group">
        <SideBar />
        <TopBar />
      </div>
    </>
  );
};

export default Group;
