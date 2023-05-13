import React, { useState, useEffect } from "react";

const Retroalimentacion = ({ userAnswers }) => {
  console.log(userAnswers);

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <h2 className="mb-4 text-lg font-bold">
        {/* {preguntasEntrevista[currentQuestion]?.text} */}
        Retroalimentacion
      </h2>
      {/* {preguntasEntrevista[currentQuestion]?.text} */}
      {userAnswers.map((item) => {
        // <h4 className="mb-4 text-lg">{item.text}</h4>;
        console.log(item);
      })}
      Hola
    </div>
  );
};

export default Retroalimentacion;
