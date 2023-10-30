import React from "react";
import "../Styles/Header.css";
import SidebarRow from "./SidebarRow";
import "../Styles/sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import YtLogo from "../Images/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import SubscriptionRow from "./SubscriptionRow";

function Header(props) {
  return (
    <div className="parent-header">
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
      <div className="sidebar">
        <SidebarRow icon={HomeIcon} title="Home" />
        <SidebarRow icon={ExploreIcon} title="Shorts" />
        <SidebarRow icon={SubscriptionsIcon} title="Subscriptions" />
        <hr />
        <SidebarRow icon={AccountBoxIcon} title="Your channel" />
        <SidebarRow icon={HistoryOutlinedIcon} title="History" />
        <SidebarRow icon={SlideshowOutlinedIcon} title="Your videos" />
        <SidebarRow icon={QueryBuilderOutlinedIcon} title="Watch later" />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="More" />
        <hr />
        <h4 className="sidebar-heading">Subscriptions</h4>
        <SubscriptionRow img="https://yt3.googleusercontent.com/XF3jjEEUxiWUSNM95ydbn8FuhaSZmebPEU8HpjhBdtFRkIPy_F4N3KxD3d-6WtZeYOKwjijswuU=s176-c-k-c0x00ffffff-no-rj" name="Brototype Malayalam"/>
      </div>
    </div>
  );
}

export default Header;
