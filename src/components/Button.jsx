import React from "react";

const Button = ({ styles, accion, margin, titulo }) => (
  <button
    type="button"
    className={
      styles
        ? styles
        : `py-4 px-6 font-concertOne font-medium text-[18px] text-primary bg-dimBlue-100 hover:bg-dimBlue-500 rounded-[10px] outline-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
            margin && margin
          }`
    }
    onClick={() => accion()}
  >
    {titulo ? titulo : "Iniciar entrevista"}
  </button>
);

export default Button;
