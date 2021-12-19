import React from "react";
import { useParams } from "react-router-dom";
import "./chat.css";
import useChat from "./useChat";

const ChatRoom = () => {
  const { id : chatID } =  useParams();
  const { messages, sendMessage } = useChat(chatID);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage( event.target.value);
		console.log(event.target.value)
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                 message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
               {message.ownedByCurrentUser}
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;