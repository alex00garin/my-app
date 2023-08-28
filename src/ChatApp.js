import React, { useState } from "react";

const ChatApp = () => {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setMessages([
        ...messages,
        { sender: "system", text: `Welcome, ${name}!` },
      ]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message) {
      setMessages([...messages, { sender: name, text: message }]);
      e.target.reset();
    }
  };

  return (
    <div className="chat-app">
      {name ? (
        <div className="chat-container">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <span className="sender">{msg.sender}: </span>
                <span className="text">{msg.text}</span>
              </div>
            ))}
          </div>
          <form className="message-form" onSubmit={handleSendMessage}>
            <input type="text" name="message" placeholder="Type a message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <form className="name-form" onSubmit={handleNameSubmit}>
          <p>Welcome to the Chat App!</p>
          <p>Please enter your name:</p>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Start Chat</button>
        </form>
      )}
    </div>
  );
};

export default ChatApp;
