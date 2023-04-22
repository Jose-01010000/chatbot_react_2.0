import React from "react";

function Modal({ isOpen, onClose, children }) {
  console.log(isOpen);
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center lg:block lg:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden lg:inline-block lg:align-middle lg:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 lg:align-middle lg:max-w-lg lg:w-full">
          <div className="bg-white px-4 pt-5 pb-4 lg:p-6 lg:pb-4">
            {children}
          </div>
          <div className="bg-gray-50 px-4 py-3 lg:px-6 lg:flex lg:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:ml-3 lg:w-auto lg:text-sm"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
