import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { GrSend } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const ChatIcon = () => {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      e.target.elements.message.value = "";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-1000">
      {expanded ? (
        <div className="bg-white border rounded shadow-md w-72">
          {/* Chat and hide chat button */}
          <div className="flex justify-between items-center bg-[#004269] text-white py-2 px-3 rounded-t">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button onClick={toggleChat} className="text-white">
            <IoClose />
            </button>
          </div>

          <div className="overflow-y-auto max-h-40 p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-1 rounded mb-2 ${
                  message.sender === "user"
                    ? "bg-[#004269] text-white self-end ml-3"
                    : "bg-gray-200 text-black self-start mr-3"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input and send message */}
          <form onSubmit={handleSubmit} className="flex items-center p-2">
            <input
              type="text"
              name="message"
              placeholder="Savolingizni yuboring..."
              className="flex-1 p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-[#004269]"
            />
            <button
              type="submit"
              className="ml-2 bg-[#004269] text-white p-3 rounded-full focus:outline-none"
            >
              <GrSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[#004269] text-white rounded-full w-16 h-16 flex justify-center items-center border-2 border-white">
          <button onClick={toggleChat}>
            <LuMessagesSquare className="w-8 h-auto" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
