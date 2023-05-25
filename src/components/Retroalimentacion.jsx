import React from "react";
import { MdOutlineQuestionAnswer, MdFeedback } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { retroalimentacionText } from "../constants/index";

const Retroalimentacion = ({ sentimiento }) => {
  return (
    <div className={sentimiento && "border-b-2 border-dimBlue-500"}>
      <div className="pt-6 px-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-md text-blue-900 bg-blue-200">
            <MdFeedback className="ml-2" />
            <p className="mx-2 font-poppins">Retroalimentación</p>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center mt-10 gap-3 font-bold bg-gray-50 border-y border-gray-200 h-16 text-xl">
        <MdOutlineQuestionAnswer className="ml-6" />
        <p>Retroalimentación</p>
      </div> */}
      <div className="mb-4 px-6 pt-3">
        <p className="w-full h-32 py-2 text-gray-700 border-none rounded-lg focus:outline-none focus:shadow-outline">
          {retroalimentacionText((sentimiento.toFixed(1) * 100) / 50)}
        </p>
      </div>
    </div>
  );
};

export default Retroalimentacion;
