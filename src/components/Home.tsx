import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero glass-container max-w-3xl mx-auto my-24 p-12 text-center">
        <h1 className="text-5xl font-bold text-[#f39c12] mb-6 text-shadow">
          Welcome to Vehicle Maintenance System
        </h1>
        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          Your one-stop solution to effortlessly manage, monitor, and maintain your vehicles. 
          Ensure they're always in optimal condition with timely insights and reminders.
        </p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-8 py-3 text-lg font-bold text-white accent-button rounded-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}