import React from "react";
import "../Styles/Header.css";
import SidebarRow from "./SidebarRow";
import MorefromYtRow from "./MorefromYtRow";
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
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import OnlinePredictionOutlinedIcon from "@mui/icons-material/OnlinePredictionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagTwoToneIcon from "@mui/icons-material/OutlinedFlagTwoTone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";

import premium from "../Images/premium.png";
import studio from "../Images/studio.png";
import music from "../Images/music.png";
import kids from "../Images/kids.png";
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
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr />
        <h4 className="sidebar-heading">Subscriptions</h4>
        <SubscriptionRow />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr />
        <h4 className="sidebar-heading">Explore</h4>
        <SidebarRow icon={WhatshotOutlinedIcon} title="Trending" />
        <SidebarRow icon={ShoppingBagOutlinedIcon} title="Shopping" />
        <SidebarRow icon={MusicNoteOutlinedIcon} title="Music" />
        <SidebarRow icon={MovieCreationOutlinedIcon} title="Films" />
        <SidebarRow icon={CellTowerOutlinedIcon} title="Live" />
        <SidebarRow icon={SportsEsportsOutlinedIcon} title="Gaming" />
        <SidebarRow icon={NewspaperOutlinedIcon} title="News" />
        <SidebarRow icon={EmojiEventsOutlinedIcon} title="Sport" />
        <SidebarRow icon={LightbulbOutlinedIcon} title="Learning" />
        <SidebarRow icon={DiscountOutlinedIcon} title="Fashion & beauty" />
        <SidebarRow icon={OnlinePredictionOutlinedIcon} title="Podcasts" />
        <hr />

        <h4 className="sidebar-heading">More from YouTube</h4>
        <MorefromYtRow image={premium} title="YouTube Premium" />
        <MorefromYtRow image={studio} title="YouTube Studio" />
        <MorefromYtRow image={music} title="YouTube Music" />
        <MorefromYtRow image={kids} title="YouTube Kids" />
        <hr />
        <SidebarRow icon={SettingsOutlinedIcon} title="Settings " />
        <SidebarRow icon={OutlinedFlagTwoToneIcon} title="Report history" />
        <SidebarRow icon={HelpOutlineIcon} title="Help" />
        <SidebarRow icon={SmsFailedOutlinedIcon} title="Send feedback" />
        <hr />
        <div className="footer">
            <p>About &nbsp; Press &nbsp; Copyright &nbsp;</p>
            <p>Contact us &nbsp; Creator &nbsp; Advertise &nbsp;</p>
            <p>Developers</p>
            <p style={{marginTop:"12px"}}>Terms  &nbsp; Privacy &nbsp; Policy & Safety &nbsp;</p>
            <p>How YouTube works</p>
            <p>Test new features</p>
            <p style={{margin:"10px 0" ,color:"gray"}}>© 2023 Google LLC</p>


        </div>

      </div>
    </div>
  );
}

export default Header;
