import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-concertOne font-medium text-[18px] text-primary bg-dimBlue-100 hover:bg-dimBlue-500 rounded-[10px] outline-none ${styles}`}
  >
    Iniciar
  </button>
);

export default Button;
