import { Widget, addResponseMessage } from "react-chat-widget";
import { useEffect } from "react";

import 'react-chat-widget/lib/styles.css';

const ChatRoom = () => {
  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  return (
    <div>
      <Widget
        resizable={true}
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={logo}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />

    </div>
  );
};

export default ChatRoom;