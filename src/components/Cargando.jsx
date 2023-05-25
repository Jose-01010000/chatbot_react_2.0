import React from "react";

const ComponenteCargando = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="animate-spin h-5 w-5 mr-3 text-gray-500"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4c2.485 0 4.746-.879 6.5-2.344L20 12zm-4-6.709V4.062c1.864 1.114 3 2.896 3 4.938h-3z"
        ></path>
      </svg>
      <p className="text-gray-500">Cargando...</p>
    </div>
  );
};

export default ComponenteCargando;
