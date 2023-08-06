import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import 'react-chatbot-kit/build/main.css';
import "./chatbot.css"

function ChatBot() {
  return (
    <div className="chatbot-container" >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBot;