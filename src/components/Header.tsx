import React from 'react';
import { Car, Settings, LogOut, History, LayoutDashboard, Home } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
  currentPage: string;
  onPageChange: (page: 'home' | 'dashboard' | 'history' | 'settings') => void;
}

export default function Header({ onLogout, currentPage, onPageChange }: HeaderProps) {
  return (
    <header className="navbar-custom fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Car className="w-8 h-8 text-[#f1c40f]" />
            <h1 className="text-xl font-semibold text-[#f1c40f]">Vehicle Health Monitor</h1>
          </div>
          
          <nav className="flex items-center space-x-2">
            <button 
              onClick={() => onPageChange('home')}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-colors navbar-link ${
                currentPage === 'home'
                  ? 'bg-[#f39c12] text-white'
                  : ''
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button 
              onClick={() => onPageChange('dashboard')}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-colors navbar-link ${
                currentPage === 'dashboard'
                  ? 'bg-[#f39c12] text-white'
                  : ''
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button 
              onClick={() => onPageChange('history')}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-colors navbar-link ${
                currentPage === 'history'
                  ? 'bg-[#f39c12] text-white'
                  : ''
              }`}
            >
              <History className="w-4 h-4" />
              <span>History</span>
            </button>

            <button 
              onClick={() => onPageChange('settings')}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-colors navbar-link ${
                currentPage === 'settings'
                  ? 'bg-[#f39c12] text-white'
                  : ''
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>

            <div className="h-6 w-px bg-gray-600 mx-2" />

            <button 
              onClick={onLogout}
              className="flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium text-white bg-[#e74c3c] hover:bg-[#c0392b] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}