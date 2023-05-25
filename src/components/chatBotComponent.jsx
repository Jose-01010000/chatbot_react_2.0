import React, { useEffect, useState, forwardRef } from "react";
import ComponenteCargando from "./Cargando";

import { BsQuestionCircle } from "react-icons/bs";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdOutlineQuestionAnswer } from "react-icons/md";

import { helpers } from "../constants/index";

const ChatbotComponent = forwardRef(
  (
    {
      preguntasEntrevista,
      cargando,
      numeroPregunta,
      retroalimentacion = false,
      retroalimentacionRespuestas,
      respuestas,
      sentimiento = "",
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
      <div className={retroalimentacion && "border-b-2 border-dimBlue-500"}>
        <div className="pt-6 px-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center rounded-md text-green-900 bg-green-200">
              <BsQuestionCircle className="ml-2" />
              <p className="mx-2 font-poppins">Habilidades blandas</p>
            </div>
            <div>
              <p className="font-bold">
                {`${numeroPregunta + 1}`}
                <span className="text-gray-500">/{helpers[0].value}</span>
              </p>
            </div>
          </div>
          {cargando ? (
            <ComponenteCargando />
          ) : (
            <h2 className="mt-1 text-base font-normal font-poppins">
              {!retroalimentacion
                ? preguntasEntrevista?.text
                : preguntasEntrevista}
            </h2>
          )}
        </div>
        <div className="flex justify-between items-center mt-10 font-bold bg-gray-50 border-y border-gray-200 h-16 text-xl">
          <div className="flex items-center gap-3">
            <MdOutlineQuestionAnswer className="ml-6" />
            <p>Tu respuesta</p>
          </div>
          {sentimiento && (
            <div
              className={`flex items-center gap-1 mr-6 ${
                parseFloat(sentimiento.score).toFixed(1) < 0.5
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              <VscDebugBreakpointLog />
              <p>{parseFloat(sentimiento.score).toFixed(1)}</p>
            </div>
          )}
        </div>
        <div className="mb-4 px-6 pt-3">
          {!retroalimentacion ? (
            <textarea
              className="w-full h-32 py-2 text-gray-700 resize-none border-none rounded-lg focus:outline-none focus:shadow-outline"
              value={userInput}
              placeholder="¿Cuál es tu respuesta?"
              required={true}
              ref={ref}
              onChange={(e) => setUserInput(e.target.value)}
              // onKeyDown={handleEnterPress}
            />
          ) : (
            <p className="w-full h-32 py-2 text-gray-700 border-none rounded-lg focus:outline-none focus:shadow-outline">
              {respuestas}
            </p>
          )}
        </div>
        {retroalimentacion && (
          <>
            <div className="flex items-center mt-10 gap-3 font-bold bg-gray-50 border-y border-gray-200 h-16 text-xl">
              <MdOutlineQuestionAnswer className="ml-6" />
              <p>Retroalimentación</p>
            </div>
            <div className="mb-4 px-6 pt-3">
              <p className="w-full h-32 py-2 text-gray-700 border-none rounded-lg focus:outline-none focus:shadow-outline">
                {retroalimentacionRespuestas}
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default ChatbotComponent;
