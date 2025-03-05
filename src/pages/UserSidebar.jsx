import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa'; // Icons

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, reset state)
    console.log('User logged out');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-indigo-600 to-blue-600 w-64 space-y-8 py-8 px-4 fixed inset-y-0 left-0   transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 shadow-2xl`}
      >
        {/* Close button for mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 p-2 text-white hover:text-gray-200"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* User Profile Section */}
        <div className="flex items-center space-x-4 px-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <FaUser className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">AmenAllah</p>
            <p className="text-sm text-blue-200">User</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/user"
                className="flex items-center py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition duration-200"
              >
                <FaHome className="w-5 h-5 mr-3" />
                Home
              </Link>
            </li>
            
            <li>
              <Link
                to="/user/learn"
                className="flex items-center py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition duration-200"
              >
                <FaShoppingCart className="w-5 h-5 mr-3" />
                Challenges
              </Link>
            </li>
            <li>
              <Link
                to="/user/marketplace"
                className="flex items-center py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition duration-200"
              >
                <FaCog className="w-5 h-5 mr-3" />
                MarketPlace
              </Link>
            </li>
            {/* <li>
              <Link
                to="/user/vr"
                className="flex items-center py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition duration-200"
              >
                <FaShoppingCart className="w-5 h-5 mr-3" />
                Virtual reality
              </Link>
            </li> */}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center  py-3 px-4 text-white hover:bg-blue-700 rounded-lg transition duration-200"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-700 text-center">
          <p className="text-sm text-blue-200">© 2025 All rights reserved.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Toggle button for mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 p-3 bg-white rounded-lg shadow-lg z-40 hover:bg-gray-100 transition duration-200"
        >
          <FaBars className="w-6 h-6 text-gray-700" />
        </button>

        {/* Outlet for nested routes */}
        <div className="p-8 pt-20"> {/* Add padding-top to account for navbar height */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;