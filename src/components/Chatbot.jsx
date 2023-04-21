import React, { useState } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addMessage(event.target.value);
      event.target.value = "";
    }
  };

  const handleOnChange = (event) => {
    addMessage(event.target.value);
    event.target.value = "";
  };

  return (
    <div className="flex flex-col h-full">
      {/* <div className="flex-1 overflow-y-auto overflow-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 ${index % 2 === 0 ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block p-2 rounded-lg shadow-lg ${
                index % 2 === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {message}
            </div>
          </div>
        ))}
      </div> */}
      <div className="p-4" >
          
      </div>
      <div className="flex items-center p-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 border-gray-300 border-2 rounded-full p-2 mr-2"
          onChange={handleKeyPress}
        /> 
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleKeyPress()}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
