import React, { useEffect, useState, useCallback } from "react";
import { CiUser } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../Navbar/Header";
import Footer from "../../Navbar/Footer";
import { useAuth } from "./../../context/AuthContext"; // Import your AuthContext
import Message from "./message";
import TabButton from "../Tab";

const Home = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useAuth(); // Use authentication context
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fetch data from the backend API
  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        "https://leader-board-backend-ovod.onrender.com/api/user/v1/get-users"
      );
      const data = await response.json();

      if (data.success) {
        const sortedUsers = data.data.sort((a, b) => b.Points - a.Points);
        setUsers(sortedUsers);
      } else {
        handleError("Failed to fetch users.");
      }
    } catch (error) {
      handleError("Error fetching users.");
    }
  }, []);

  const handleError = (message) => {
    console.error(message);
    toast.error(message);
  };

  const handleClaimPoints = async (username) => {
    if (!auth.user) {
      // If user is not logged in, show popup
      setIsPopupOpen(true);
      return;
    }

    try {
      const response = await fetch(
        "https://leader-board-backend-ovod.onrender.com/api/user/v1/claim-points",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );
      const data = await response.json();

      if (data.success) {
        toast.success(`Points claimed successfully for ${username}`);
        fetchUsers(); // Refresh the user list after claiming
      } else {
        handleError("Failed to claim points.");
      }
    } catch (error) {
      handleError("Error claiming points.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Bar */}
      <Header />
      
      {/* Popup for login prompt */}
      {isPopupOpen && (
        <Message 
          message="Please login to vote."
          onClose={() => setIsPopupOpen(false)} 
        />
      )}

      {/* Tabs */}
      <div className="flex justify-center space-x-4 my-4">
        <TabButton to="/" isActive={location.pathname === "/"}>
          Daily
        </TabButton>
        <TabButton to="/weekly" isActive={location.pathname === "/weekly"}>
          Weekly
        </TabButton>
        <TabButton to="/monthly" isActive={location.pathname === "/monthly"}>
          Monthly
        </TabButton>
      </div>

      {/* Top Users */}
      <div className="flex justify-around items-center my-4">
        {users.slice(0, 3).map((user) => (
          <div className="text-center" key={user._id}>
            <div>{user.username}</div>
            <div>{user.Points}</div>
            <div className="text-orange-500">Prize: ₹{user.Points}</div>
          </div>
        ))}
      </div>

      {/* Rank List */}
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            key={user._id}
            onClick={() => handleClaimPoints(user.username)}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <div className="flex items-center space-x-4">
              <CiUser />
              <div>
                <div>{user.username}</div>
                <span>Rank: {index + 1}</span>
              </div>
            </div>
            <div className="text-orange-500">Prize: ₹{user.Points}</div>
            <div className="text-green-500">Points: {user.Points}</div>
          </li>
        ))}
      </ul>

      {/* Bottom Navigation Bar */}
      <Footer />
    </div>
  );
};

export default Home;
