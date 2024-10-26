import React from 'react';

const Message = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="mb-4">{message}</p>
        <button 
          onClick={onClose} 
          className="bg-orange-500 text-white py-2 px-4 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Message;
