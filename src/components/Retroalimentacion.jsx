import React from "react";
import { MdOutlineFeedback } from "react-icons/md";

const Retroalimentacion = ({ retroalimentacion }) => {
  return (
    <div>
      <div className="pt-6 px-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-md text-yellow-900 bg-yellow-200">
            <MdOutlineFeedback className="ml-2" />
            <h2 className="mx-2 font-poppins">Retroalimentacion</h2>
          </div>
        </div>
      </div>
      <div className="mb-4 px-6 pt-3">
        {retroalimentacion.map((item, index) => (
          <h4 key={index} className="mb-4 text-lg">
            {item.text}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Retroalimentacion;
