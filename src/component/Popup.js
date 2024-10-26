import React from "react";

const Popup = ({ name, points, email, onClose }) => {
  // Get points from the points object
  const dailyPoints = points?.daily || 0;   // Changed from points?.monthly

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-80 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-4">
          <img
            src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-sm text-green-600">{email}</h3>
          <h3 className="text-sm text-black">{name}</h3>
        </div>

        {/* Leaderboard Statistics */}
        <div className="flex items-center justify-start mb-4">
          <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg">
            🏆 Leaderboard Statistics
          </button>
        </div>

        {/* Points Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-gray-500 p-2 rounded-lg">
            <span className="bg-green-400 text-white py-1 px-4 rounded-full">
              Daily Points
            </span>
            <span>Points: 8{dailyPoints}</span>
          </div>
          
          <button
            onClick={onClose}
            className="bg-red-500 text-white text-sm py-2 px-4 rounded-lg w-full mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
