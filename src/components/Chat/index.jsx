import React, { useState, useRef, useEffect } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { GrSend } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const ChatIcon = () => {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show greeting when chat opens
  useEffect(() => {
    if (expanded && messages.length === 0) {
      setMessages([{ text: "Salom, sizga qanday yordam kerak?", sender: "bot" }]);
    }
  }, [expanded]);

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

  // FAQ questions and answers
  const faqs = [
    {
      question: "Kontrakt shartnomamni qayerdan olaman?",
      answer: "kontrakt.edu.uz saytidan online tarzda olinadi!",
    },
    {
      question: "Amaliyot shartnomani olish va yangilash uchun qayerga murojaat qilishim kerak?",
      answer: "kspi365.kspi.uz saytidan online tarzda olinadi",
    },
    {
      question: "Hemisga kira olmayapman, kim to'g'rilab beradi?",
      answer: "Hemis login parolni tiklash uchun, Office registratorga borishingiz kerak",
    },
    {
      question: "Universitetga qabul qachon boshlanadi?",
      answer: "Universitetning saytida va ijtimoiy tarmoqlarida e'lon beriladi",
    },
  ];

  const handleFAQClick = (faq) => {
    setMessages([
      ...messages,
      { text: faq.question, sender: "user" },
      { text: faq.answer, sender: "bot" },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      {expanded ? (
        <div className="bg-white border rounded shadow-md w-72 md:w-96 max-w-[95vw]">
          {/* Chat header */}
          <div className="flex justify-between items-center bg-[#004269] text-white py-2 px-3 rounded-t">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              className="text-white"
            >
              <IoClose />
            </button>
          </div>

          {/* FAQs */}
          <div className="p-2 border-b border-gray-300">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => handleFAQClick(faq)}
                className="block w-full text-left p-2 mb-1 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-800"
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Messages area */}
          <div className="overflow-y-auto max-h-56 p-2">
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
            <div ref={messagesEndRef} />
          </div>

          {/* Input form */}
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
          <button onClick={toggleChat} aria-label="Open chat">
            <LuMessagesSquare className="w-8 h-auto" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;