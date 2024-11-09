import React, { useState } from 'react';
import { Car, Lock, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onSignupClick: () => void;
}

export default function Login({ onLogin, onSignupClick }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'demo@example.com' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid credentials. Try demo@example.com / password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="rounded-full bg-[#f39c12] p-3">
            <Car className="w-12 h-12 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Vehicle Health Monitor
        </h2>
        <p className="mt-2 text-center text-sm text-gray-200">
          Sign in to access your vehicle dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="glass-container py-8 px-4 shadow-xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#f39c12] focus:border-[#f39c12] bg-white text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#f39c12] focus:border-[#f39c12] bg-white text-gray-900"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-400">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white accent-button"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[rgba(33,49,61,0.85)] text-gray-200">
                  New to Vehicle Health Monitor?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onSignupClick}
                className="w-full flex justify-center py-2 px-4 border border-[#f39c12] rounded-md shadow-sm text-sm font-medium text-[#f39c12] hover:bg-[#f39c12] hover:text-white transition-colors"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}