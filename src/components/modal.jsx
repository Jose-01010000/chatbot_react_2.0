import React, { useState, useEffect } from "react";
import MensajeBienvenida from "./MensajeBienvenida";
import ChatbotComponent from "./chatBotComponent";
import { obtenerRespuestaDeAPI } from "../server";
import Retroalimentacion from "./Retroalimentacion";

const Modal = ({ isOpen, onClose }) => {
  const [welcome, setWelcome] = useState(true);
  const [preguntasEntrevista, setPreguntasEntrevista] = useState([]);
  const [numeroPregunta, setNumeroPregunta] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await obtenerRespuestaDeAPI(
        numeroPregunta < 5 && numeroPregunta
      );
      setPreguntasEntrevista((respuesta) => [...respuesta, resp]);
      setCargando(false);
    })();
  }, [numeroPregunta]);

  useEffect(() => {
    (async () => {
      const resp = await obtenerRespuestaDeAPI(
        numeroPregunta < 5 && userAnswer && userAnswer
      );
      setUserAnswers((userAnswerPrev) => [...userAnswerPrev, resp]);
      setCargando(false);
    })();
  }, [userAnswer]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* <!-- Contenedor principal de la ventana modal --> */}
        <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          {/* <!-- Cabecera de la ventana modal --> */}
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 sm:px-6">
            <h4 className="text-lg leading-6 font-medium text-gray-900">
              InterviewBuddy
            </h4>
          </div>

          {/* <!-- Cuerpo de la ventana modal --> */}
          <div className="px-4 py-5 sm:p-6">
            {/* <!-- Componente de chatbot --> */}
            {welcome ? (
              <MensajeBienvenida />
            ) : numeroPregunta === 5 ? (
              <Retroalimentacion userAnswers={userAnswers} />
            ) : (
              <ChatbotComponent
                cargando={cargando}
                setCargando={setCargando}
                cambiarPregunta={setNumeroPregunta}
                obtenerRespuesta={setUserAnswer}
                preguntasEntrevista={preguntasEntrevista}
              />
            )}
          </div>

          {/* <!-- Pie de la ventana modal --> */}
          <div className="flex items-center bg-gray-100 px-4 py-3 border-t border-gray-200 sm:px-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 mx-4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 sm:text-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => onClose()}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-700 rounded-md hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 sm:text-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => setWelcome(false)}
            >
              Iniciar entrevista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
