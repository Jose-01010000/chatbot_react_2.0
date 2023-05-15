import React, { useEffect, useState, forwardRef } from "react";
import ComponenteCargando from "./Cargando";

import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";

const ChatbotComponent = forwardRef(
  (
    {
      preguntasEntrevista,
      cargando,
      setCargando,
      obtenerRespuesta,
      numeroPregunta,
      setNumeroPregunta,
    },
    ref
  ) => {
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
      setUserInput("");
    }, [numeroPregunta]);

    // const handleEnterPress = (event) => {
    //   if (event.key === "Enter") {
    //     handleNextQuestion();
    //     cambiarPregunta(numeroPregunta + 1);
    //   }
    // };

    return (
      <div>
        <div className="pt-6 px-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center rounded-md text-green-900 bg-green-200">
              <BsQuestionCircle className="ml-2" />
              <p className="mx-2 font-poppins">Habilidades blandas</p>
            </div>
            <div>
              <p>{`${numeroPregunta + 1}/5`}</p>
            </div>
          </div>
          {cargando ? (
            <ComponenteCargando />
          ) : (
            <h2 className="mt-1 text-base font-normal font-poppins">
              {preguntasEntrevista[numeroPregunta]?.text}
            </h2>
          )}
        </div>
        <div className="flex items-center mt-10 gap-3 font-bold bg-gray-100 border-y border-gray-200 h-16 text-xl">
          <MdOutlineQuestionAnswer className="ml-6" />
          <p>Tu respuesta</p>
        </div>
        <div className="mb-4 px-6 pt-3">
          <textarea
            className="w-full h-56 py-2 text-gray-700 resize-none border-none rounded-lg focus:outline-none focus:shadow-outline"
            value={userInput}
            placeholder="¿Cuál es tu respuesta?"
            required={true}
            ref={ref}
            onChange={(e) => setUserInput(e.target.value)}
            // onKeyDown={handleEnterPress}
          />
        </div>
      </div>
    );
  }
);

export default ChatbotComponent;
