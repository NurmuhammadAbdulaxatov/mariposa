import React from "react";
import "./TopBar.scss";

const TopBar = () => {
  let date = new Date();
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth();
  let fulldate = `${day}.${month}.${year}`;

  return (
    <>
      <div className="topbar">
        <h1 className="topbar-h1">Groups</h1>
        <p className="topbar-p">{fulldate}</p>
      </div>
    </>
  );
};

export default TopBar;
