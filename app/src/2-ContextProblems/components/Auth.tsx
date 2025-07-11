import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const Auth = () => {
  const { isLoggedIn, login, logout } = useAuthContext();

  const loginButton = (
    <button
      className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
      onClick={ login }
    >
      Sign In
    </button>
  );

  const logoutButton = (
    <button
      className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
      onClick={ logout }
    >
      Sign Out
    </button>
  );

  return (
    <div className="flex-1 flex flex-col items-stretch justify-center">
      <div className="w-full h-full bg-gradient-to-br from-purple-50 to-blue-100 shadow rounded-xl p-8 flex flex-col items-center border border-purple-200">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Authentication</h2>
        <div className="mb-3 text-gray-700 text-center">
          { isLoggedIn ? 'You are logged in!' : 'You are not logged in.' }
        </div>
        <div className="flex justify-center w-full">{ isLoggedIn ? logoutButton : loginButton }</div>
      </div>
    </div>
  );
};

export default Auth;
