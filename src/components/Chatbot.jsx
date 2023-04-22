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

  const handleSendMessage = async () => {
    try {
      const response = await axios.post("http://localhost:5000/train", {
        userQuery: message,
        intent: "welcome",
        feedback: feedback,
      });

      setConversation([
        ...conversation,
        {
          message,
          sender: "user",
        },
        {
          message: response.data.message,
          sender: "bot",
        },
      ]);
      setMessage("");
      setFeedback(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFeedback = (feedback) => {
    setFeedback(feedback);
  };

  // useEffect(() => {
  //   sendMessage("Hola");
  // }, []);

  // const sendMessage = async (message) => {
  //   setMessages((prevState) => [
  //     ...prevState,
  //     { text: message, sender: "user" },
  //   ]);
  //   setInputValue("");

  //   const response = await axios.post(
  //     `https://dialogflow.googleapis.com/v2/projects/TU_PROYECTO_AGENT_ID/sessions/TU_SESION_DE_CHATBOT:detectIntent`,
  //     {
  //       queryInput: {
  //         text: {
  //           text: message,
  //           languageCode: "es-ES",
  //         },
  //       },
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_DIALOGFLOW_API_KEY}`,
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //     }
  //   );

  //   const responseMessage = response.data.queryResult.fulfillmentText;
  //   setMessages((prevState) => [
  //     ...prevState,
  //     { text: responseMessage, sender: "bot" },
  //   ]);
  // };

  // const handleInputValueChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   sendMessage(inputValue);
  // };

  return (
    <div className="flex flex-col h-full">
      <h1 class="mt-1 text-lg font-semibold text-black ">InterviewBuddy</h1>
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
      <h1 class="mt-4 text-lg font-semibold text-black ">Retroalimentación</h1>
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
      </div>
    </div>
  );
}

export default ChatBot;
