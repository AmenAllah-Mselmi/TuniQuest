import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaEnvelope, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore'; // Import the zustand store
import axios from 'axios'; // Import axios for making API requests

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate
  const { signIn, signUp } = useAuthStore(); // Use signIn and signUp actions from the store

  // Static users for testing
  const staticUsers = [
    { email: 'user@gmail.com', password: 'user123', role: 'user' },
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' },
  ];

  const onSubmit = async (data) => {
    try {
      setError(null);

      // 1. Check from Static Users First
      const foundUser = staticUsers.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (foundUser) {
        // If found in static array, sign in and redirect
        if (foundUser.role === 'user') {
          signIn(data.email, data.password);
          navigate('/user');
        } else if (foundUser.role === 'admin') {
          signIn(data.email, data.password);
          navigate('/admin');
        }
      } else {
        // 2. If not found in static array, check the database (async operation)
        try {
          // Make a request to the backend to verify credentials
          const response = await axios.post('/api/auth/login', {
            email: data.email,
            password: data.password,
          });

          const user = response.data; // Assuming the API returns user data on successful login

          if (user) {
            // If user is found in database, sign in and redirect based on role
            signIn(user.email, user.password);
            if (user.role === 'user') {
              navigate('/user');
            } else if (user.role === 'admin') {
              navigate('/admin');
            }
          } else {
            setError('Invalid email or password');
          }
        } catch (err) {
          setError('Something went wrong with the database request');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Welcome Back!' : 'Create Your Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin
              ? 'Sign in to continue to your account'
              : 'Join us and start your journey'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field (Only for Sign Up) */}
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <input
                  {...register('name', { required: !isLogin })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
                <FaUser className="absolute left-3 top-3 text-gray-400" />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">Name is required</p>
              )}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 relative">
              <input
                {...register('email', { required: true })}
                type="email"
                id="email"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                {...register('password', { required: true, minLength: 6 })}
                type="password"
                id="password"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Confirm Password Field (Only for Sign Up) */}
          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  {...register('confirmPassword', {
                    required: !isLogin,
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
                <FaCheck className="absolute left-3 top-3 text-gray-400" />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>

          {/* Toggle Between Login and Sign Up */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              {isLogin
                ? 'Need an account? Sign Up'
                : 'Already have an account? Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
