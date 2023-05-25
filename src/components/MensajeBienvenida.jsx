import React, { useState, useEffect } from "react";
import { obtenerRespuestaDeAPI } from "../server";
import ComponenteCargando from "./Cargando";
import { helpers } from "../constants/index";

const MensajeBienvenida = () => {
  const [response, setResponse] = useState([]);
  const [cagando, setCargando] = useState(true);

  useEffect(() => {
    (async () => {
      const resp = await obtenerRespuestaDeAPI("start");
      console.log(resp);
      setResponse(resp);
      setCargando(!cagando);
    })();
  }, []);

  return (
    <div className="p-10 rounded-lg bg-white">
      {cagando ? (
        <ComponenteCargando />
      ) : (
        <div>
          <h1 className="mb-16 text-4xl font-bold text-center">
            {`Responde ${helpers[0].value} preguntas de la entrevista`}
          </h1>
          <h2 className="text-xl text-gray-500 text-center">{response.text}</h2>
        </div>
      )}
    </div>
  );
};

export default MensajeBienvenida;
