import React from "react";
import "./TopBar.scss";

const TopBar = () => {

  let newDate = new Date();
  return (
    <>
      <div className="topbar">
        <h1 className="topbar-h1">Groups</h1>
        <p>{new Date().toLocaleString() + ""}</p>
      </div>
    </>
  );
};

export default TopBar;
