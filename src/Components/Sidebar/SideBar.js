import React from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import { Headset, InfoOutlined, SignalCellularAlt } from "@material-ui/icons";
import SideBarChannel from "./SideBarChannel";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>CloneServer</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon onClick className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsLisr">
          <SideBarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcon">
          <InfoOutlined />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src={user.photo} onClick={() => auth.signOut()} />

        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <Headset />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
