import React from 'react';

const UserDashboard = () => {
  return (
    <div className="relative overflow-x-auto shadow-md h-screen sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Username</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Points</th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              johndoe
            </th>
            <td className="px-6 py-4">AmenAllah@gmail.com</td>
            <td className="px-6 py-4">Admin</td>
            <td className="px-6 py-4">120</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              foulen
            </th>
            <td className="px-6 py-4">foulen@gmail.com</td>
            <td className="px-6 py-4">User</td>
            <td className="px-6 py-4">80</td>
            <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
