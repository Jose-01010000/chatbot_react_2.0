import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import ComponenteCargando from "./Cargando";

const ChatbotComponent = ({
  preguntasEntrevista,
  cambiarPregunta,
  cargando,
  setCargando,
  obtenerRespuesta,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  const [answers, setAnswers] = useState([]);

  // Definimos las preguntas y respuestas del chatbot

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Función que maneja el cambio de pregunta
  const handleNextQuestion = () => {
    if (currentQuestion < 5) {
      console.log(userInput);
      setCurrentQuestion(currentQuestion + 1);
      obtenerRespuesta(userInput);
      setUserInput("");
      cambiarPregunta(currentQuestion + 1);
      setCargando(true);
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleNextQuestion();
    }
  };

  const handleFinish = () => {
    // console.log(answers);
  };

  return (
    <div className="p-10 rounded-lg  bg-white">
      {cargando ? (
        <ComponenteCargando />
      ) : (
        <h2 className="mb-4 text-lg font-bold">
          {preguntasEntrevista[currentQuestion]?.text}
        </h2>
      )}
      <div className="mb-4">
        {/* <p>Pregunta {questions[currentQuestion]}:</p> */}
        <p>¿Cuál es tu respuesta?</p>
        <textarea
          className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
          value={userInput}
          required
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </div>

      <div className="mb-4 flex items-start p-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={handleNextQuestion}
        >
          Siguiente pregunta
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => setCurrentQuestion(0)}
        >
          Reiniciar chatbot
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => handleFinish()}
        >
          Finalizar Chat
        </button>
      </div>

      <div className="flex items-center justify-center">
        <FaMicrophone className="text-gray-400 w-8 h-8 mr-2" />
        <span className="text-gray-400 text-sm">
          Haz clic aquí para usar el micrófono
        </span>
      </div>
    </div>
  );
};

export default ChatbotComponent;
