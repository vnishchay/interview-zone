import { useEffect, useState } from "react";
import sock from "..";

// https://stackoverflow.com/questions/36788831/authenticating-socket-io-connections-using-jwt

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    sock.emit("chat-room", roomId);
  }, []);

  useEffect(() => {
    sock.on("get-message", (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: sock.id === message.senderId,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      sock.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    sock.emit("NEW_CHAT_MESSAGE_EVENT", {
      body: messageBody,
      senderId: sock.id,
    });
    setMessages((messages) => [
      ...messages,
      { body: messageBody, id: sock.id },
    ]);
  };

  return { messages, sendMessage };
};

export default useChat;
