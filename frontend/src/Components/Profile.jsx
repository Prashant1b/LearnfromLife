import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Profile({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Backend logout API
      await axios.get('http://localhost:4001/signout', { withCredentials: true });
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-300">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 px-4 py-10">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Profile
        </h1>

        <div className="space-y-3 text-gray-200">
          <p>
            <strong className="text-blue-400">Name:</strong> {user.name}
          </p>
          <p>
            <strong className="text-blue-400">Email:</strong> {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
