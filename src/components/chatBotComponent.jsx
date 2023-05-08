// import { useState } from "react";

// function ChatbotComponent() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userInput, setUserInput] = useState("");

//   // Definimos las preguntas y respuestas del chatbot
//   const questions = [
//     "Hola, ¿cómo te llamas?",
//     "¿Cuál es tu correo electrónico?",
//     "¿Qué tipo de proyecto quieres realizar?",
//     "¿Cuál es tu presupuesto?",
//     "¿En cuánto tiempo necesitas que esté listo el proyecto?",
//   ];
//   const answers = ["", "", "", "", ""];

//   // Función que maneja el cambio de pregunta
//   function handleNextQuestion() {
//     setCurrentQuestion(currentQuestion + 1);
//   }

//   // Función que maneja el envío de la respuesta del usuario
//   function handleSubmit() {
//     // Aquí podríamos enviar la respuesta del usuario a Dialogflow
//     // y obtener la respuesta del chatbot en función de la pregunta actual

//     // En este ejemplo, simplemente guardamos la respuesta del usuario
//     answers[currentQuestion] = userInput;

//     // Pasamos a la siguiente pregunta
//     handleNextQuestion();

//     // Limpiamos el input de usuario
//     setUserInput("");
//   }

//   return (
//     <div>
//       <div className="mb-4">
//         <label
//           htmlFor="userInput"
//           className="block font-medium text-gray-700 mb-2"
//         >
//           {questions[currentQuestion]}
//         </label>
//         <div className="relative rounded-md shadow-sm">
//           <input
//             id="userInput"
//             name="userInput"
//             type="text"
//             className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
//             placeholder="Escribe tu respuesta aquí..."
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//           />
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <button
//               type="button"
//               className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               <svg
//                 className="h-5 w-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mb-4">
//         <button
//           type="button"
//           className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           onClick={handleSubmit}
//         >
//           Enviar respuesta
//         </button>
//       </div>

//       <div className="mb-4">
//         <button
//           type="button"
//           className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           onClick={handleNextQuestion}
//         >
//           Siguiente pregunta
//         </button>
//       </div>

//       <div className="mb-4">
//         <button
//           type="button"
//           className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           onClick={() => setCurrentQuestion(0)}
//         >
//           Reiniciar chatbot
//         </button>
//       </div>

//       <div className="mb-4">
//         <button
//           type="button"
//           className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           onClick={() => window.location.reload()}
//         >
//           Finalizar chat
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatbotComponent;

import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { Transition } from "@headlessui/react";

function ChatbotComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState("");
  //   const [answers, setAnswers] = useState([]);

  // Definimos las preguntas y respuestas del chatbot
  const questions = [
    "Hola, ¿cómo te llamas?",
    "¿Cuál es tu correo electrónico?",
    "¿Qué tipo de proyecto quieres realizar?",
    "¿Cuál es tu presupuesto?",
    "¿En cuánto tiempo necesitas que esté listo el proyecto?",
  ];

  let answers = ["", "", "", "", ""];

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Función que maneja el cambio de pregunta
  const handleNextQuestion = () => {
    if (currentQuestion < 5) {
      answers[currentQuestion] = userInput;
      setCurrentQuestion(currentQuestion + 1);
      setUserInput("");
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleNextQuestion();
    }
  };

  const handleFinish = () => {
    console.log(answers);
  };

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <h2 className="mb-4 text-lg font-bold">{questions[currentQuestion]}</h2>

      <div className="mb-4">
        {/* <p>Pregunta {questions[currentQuestion]}:</p> */}
        <p>¿Cuál es tu respuesta?</p>
        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </div>

      <div className="mb-4 flex items-center p-4">
        <div>
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
      </div>

      <div className="flex items-center justify-center">
        <FaMicrophone className="text-gray-400 w-8 h-8 mr-2" />
        <span className="text-gray-400 text-sm">
          Haz clic aquí para usar el micrófono
        </span>
      </div>
    </div>
  );
}

export default ChatbotComponent;
