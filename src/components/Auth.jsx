import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaEnvelope, FaCheck } from 'react-icons/fa'; // Icons
import useAuthStore from '../stores/authStore';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { signIn, signUp } = useAuthStore();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      setError(null);
      if (isLogin) {
        await signIn(data.email, data.password);
      } else {
        await signUp(data.email, data.password, data.name);
      }
    } catch (err) {
      setError(err.message);
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