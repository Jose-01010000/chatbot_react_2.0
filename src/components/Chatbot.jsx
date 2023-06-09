import React, { useState, useEffect } from "react";
import axios from "axios";

function ChatBot() {
  // const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState(null);

  // const addMessage = (message) => {
  //   setMessages([...messages, message]);
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     addMessage(event.target.value);
  //     event.target.value = "";
  //   }
  // };

  // const handleOnChange = (event) => {
  //   addMessage(event.target.value);
  //   event.target.value = "";
  // };

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    };

    axios
      .post("http://localhost:3001/chatbot", data)
      .then((response) => {
        const responseData = {
          text:
            response.data["message"]["fulfillmentText"] !== ""
              ? response.data["message"]["fulfillmentText"]
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        };
        setResponses((responses) => [...responses, responseData]);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleFeedback = (feedback) => {
    setFeedback(feedback);
  };

  return (
    <div className="flex flex-col h-full">
      {/* <h1 className="mt-1 text-lg font-semibold text-black ">InterviewBuddy</h1> */}
      <div className="flex-1 overflow-y-auto overflow-auto p-4">
        {conversation.map((message, index) => (
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
      </div>
      <div className="p-4"></div>
      <div className="flex items-center p-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 border-gray-300 border-2 rounded-full p-2 mr-2"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleSendMessage}
        >
          Enviar
        </button>
      </div>
      {/* <h1 class="mt-4 text-lg font-semibold text-black ">Retroalimentación</h1>
      <div className="flex items-start p-4">
        {feedback === null && (
          <div>
            <button
              className="bg-green-500 hover:bg-green-700 font-bold text-white py-2 ml-3 px-4 rounded-full"
              onClick={() => handleFeedback("bien")}
            >
              Bien
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 font-bold text-white py-2 ml-3 px-4 rounded-full"
              onClick={() => handleFeedback("regular")}
            >
              Regular
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 font-bold text-white py-2 ml-3 px-4 rounded-full "
              onClick={() => handleFeedback("mal")}
            >
              Mal
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default ChatBot;
