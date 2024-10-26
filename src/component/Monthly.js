import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import Header from "../Navbar/Header";
import Footer from "../Navbar/Footer";
import TabButton from "../Pages/Tab";

const Monthly = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);

  // Fetch data from backend API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/user/v1/your-monthly-history"
      );
      const data = response.data; // Correctly access data
      if (data.success) {
        const sortedUsers = data.data.sort((a, b) => b.Points - a.Points);
        setUsers(sortedUsers);
      } else {
        console.error("Failed to fetch users:", data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error); // Log the error
    }
  };

  // Call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      <Header/>
     
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
            <div>{user._id}</div>
            <div>{user.totalPointsAwarded}</div>
            <div className="text-orange-500">
              Prize: ₹{user.totalPointsAwarded}
            </div>
          </div>
        ))}
      </div>
      {/* Rank List */}
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            key={user._id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <CiUser />
              <div>
                <div>{user._id}</div> {/* Assuming user.username exists */}
                <span>Rank: {index + 1}</span>
              </div>
            </div>
            <div className="text-orange-500">
              Prize: ₹{user.totalPointsAwarded}
            </div>
            
            <div className="text-green-500">{user.totalPointsAwarded}</div>
          </li>
        ))}
      </ul>
      <Footer/>
      {/* Bottom Navigation Bar */}
    </div>
  );
};

export default Monthly;