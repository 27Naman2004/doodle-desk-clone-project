
import React from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Login to Doodle Desk</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full enroll-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
