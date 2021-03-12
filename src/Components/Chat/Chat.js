import React from "react";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName =  useSelector(selectChannelName);
  return (
    <div className="chat">
      <ChatHeader channelName="" />

      <div className="chat__messages">
       <Message/>
      </div>

      <div className="chat__input">
        <AddCircleIcon fontsize="large" />
        <form>
          <input
            disabled
            value
            onChange
            type="text"
            placeholder
          />
          <button
            disabled
            className="chat__inputButton"
            type="submit"
            onClick
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CreditCardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
