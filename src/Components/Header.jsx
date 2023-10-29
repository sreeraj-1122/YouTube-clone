import React from "react";
import "../Styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import YtLogo from "../Images/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-icons">
          <MenuIcon />
        </div>
        <img className="header-logo" src={YtLogo} alt="" />
      </div>
      <div className="header-middle">
        <div className="header-input">
          <input
            type="text"
            name=""
            className="SearchInput"
            placeholder="Search"
          />
          <div className="header-searchbtn">
            <SearchIcon />
          </div>
        </div>
        <div className="headerMic-icon">
          <MicIcon />
        </div>
      </div>
      <div className="header-right">
        <div className="header-icons">
          <VideoCallIcon />
        </div>
        <div className="header-icons">
          <NotificationsIcon />
        </div>
      <div className="header-profile">
        <p>S</p>
      </div>
      </div>
    </div>
  );
}

export default Header;
