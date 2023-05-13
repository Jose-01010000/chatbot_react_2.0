import React, { useState, useEffect } from "react";
import { obtenerRespuestaDeAPI } from "../server";
import ComponenteCargando from "./Cargando";

const MensajeBienvenida = () => {
  const [response, setResponse] = useState([]);
  const [cagando, setCargando] = useState(true);

  useEffect(() => {
    (async () => {
      const resp = await obtenerRespuestaDeAPI("start");
      setResponse(resp);
      setCargando(false);
    })();
  }, []);

  return (
    <div className="p-10 rounded-lg shadow-2xl bg-white">
      {cagando ? (
        <ComponenteCargando />
      ) : (
        <div>
          <h1 className="mb-20 text-5xl font-bold text-justify">
            Responde 5 preguntas de la entrevista
          </h1>
          <h2 className="mb-10 text-xl">{response.text}</h2>
        </div>
      )}
    </div>
  );
};

export default MensajeBienvenida;
