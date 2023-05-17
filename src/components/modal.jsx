import React, { useState, useEffect, useRef } from "react";
import MensajeBienvenida from "./MensajeBienvenida";
import ChatbotComponent from "./chatBotComponent";
import { obtenerRespuestaDeAPI } from "../server";
import Retroalimentacion from "./Retroalimentacion";
import { FaMicrophone } from "react-icons/fa";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ onClose, isChatOpen }) => {
  const [welcome, setWelcome] = useState(true);
  const [preguntasEntrevista, setPreguntasEntrevista] = useState([]);
  const [numeroPregunta, setNumeroPregunta] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [retroalimentacion, setRetroalimentacion] = useState([]);
  const [datos, setDatos] = useState([]);

  // const resultadosPReguntas

  const inputRef = useRef(null);

  useEffect(() => {
    obtenerPreguntas();
  }, [numeroPregunta, welcome]);

  const obtenerPreguntas = async () => {
    if (!welcome && numeroPregunta < 5) {
      let resPreguntas = await obtenerRespuestaDeAPI(numeroPregunta);
      setCargando(!cargando);
      setPreguntasEntrevista(resPreguntas);
      // setPreguntasEntrevista((respuesta) => [...respuesta, resPreguntas]);
    }
  };

  const cambiarPregunta = async () => {
    const valor = inputRef.current.value;
    inputRef.current.focus();

    if (!valor) {
      return toast.error("Debes Ingresar tu respuesta", {
        className:
          "shadow-2xl font-concertOne font-medium text-[18px] text-primary bg-dimBlue-100 rounded-[10px]",
        // icon: "⚠️",
        duration: 4000,
        position: "bottom-right",
      });
    }

    if (valor) {
      setCargando(!cargando);
      let respRetroalimentacion = await obtenerRespuestaDeAPI(
        numeroPregunta < 5 && valor && valor
      );
      // setRetroalimentacion((retroalimentacionPrev) => [
      //   ...retroalimentacionPrev,
      //   respRetroalimentacion,
      // ]);
      setRetroalimentacion(respRetroalimentacion);

      setDatos((datosPrev) => [
        ...datosPrev,
        {
          preguntas: preguntasEntrevista,
          retroalimentacion: respRetroalimentacion,
        },
      ]);

      setCargando(!cargando);
      setNumeroPregunta(numeroPregunta + 1);
    }
  };

  const IniciarEntrevistas = () => {
    setWelcome(false);
  };

  // Reiniciar estados al cerrar modal, para inicar una nueva entrevista.
  const finalizarEntrevista = () => {
    setWelcome(true);
    setPreguntasEntrevista([]);
    setNumeroPregunta(0);
    setCargando(true);
    setRetroalimentacion([]);
    onClose();
  };

  const renderizarChat = () => {
    if (welcome) {
      return <MensajeBienvenida />;
    }

    if (numeroPregunta === 5) {
      return datos.map((dato, index) => {
        if (dato.preguntas.text && dato.retroalimentacion.text) {
          return (
            <ChatbotComponent
              retroalimentacion={true}
              key={index}
              numeroPregunta={index}
              preguntasEntrevista={dato.preguntas.text}
              retroalimentacionRespuestas={dato.retroalimentacion.text}
              respuestas={dato.retroalimentacion.queryText}
              sentimiento={
                dato.retroalimentacion.sentimentAnalysisResult
                  .queryTextSentiment
              }
              cargando={false}
            />
          );
        }
      });
    }

    return (
      <ChatbotComponent
        cargando={cargando}
        setCargando={setCargando}
        numeroPregunta={numeroPregunta}
        setNumeroPregunta={setNumeroPregunta}
        preguntasEntrevista={preguntasEntrevista}
        ref={inputRef}
      />
    );
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <Toaster reverseOrder={false} />
      <div className="flex items-center justify-center max-h-36 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        {/* <!-- Contenedor principal de la ventana modal --> */}
        <div
          className={`inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full`}
        >
          {/* <!-- Cabecera de la ventana modal --> */}
          {numeroPregunta === 5 && (
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-gray-900">
                Retroalimentación
              </h4>
            </div>
          )}
          {/* <!-- Cuerpo de la ventana modal --> */}
          <div className="">
            {/* <!-- Componente de chatbot --> */}
            {renderizarChat()}
          </div>
          {/* <!-- Pie de la ventana modal --> */}
          <div className="flex justify-between bg-gray-100 px-4 py-3 border-t border-gray-200 sm:px-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 sm:text-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => finalizarEntrevista()}
            >
              Cerrar
            </button>
            {welcome ? (
              <Button accion={IniciarEntrevistas} />
            ) : (
              numeroPregunta < 5 && (
                <div className="flex gap-5">
                  <div className="flex items-center justify-center cursor-pointer border rounded-md border-dimBlue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <FaMicrophone className="text-dimBlue-500 w-12 h-4" />
                  </div>
                  <Button
                    accion={cambiarPregunta}
                    titulo="Siguiente pregunta"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
