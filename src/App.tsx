import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Home from './components/Home';
import VehicleStats from './components/VehicleStats';
import MaintenanceAlerts from './components/MaintenanceAlerts';
import HealthDashboard from './components/HealthDashboard';
import ChatInterface from './components/ChatInterface';
import Login from './components/Login';
import Signup from './components/Signup';
import History from './components/History';
import Settings from './components/Settings';
import { useVehicleData } from './hooks/useVehicleData';

type Page = 'home' | 'dashboard' | 'history' | 'settings';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { currentData, historicalData, alerts } = useVehicleData();

  if (!isLoggedIn) {
    return showSignup ? (
      <Signup onSignup={() => setIsLoggedIn(true)} />
    ) : (
      <Login 
        onLogin={() => setIsLoggedIn(true)} 
        onSignupClick={() => setShowSignup(true)}
      />
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'history':
        return <History historicalData={historicalData} />;
      case 'settings':
        return <Settings />;
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <VehicleStats data={currentData} />
              <div className="lg:col-span-2">
                <HealthDashboard data={currentData} historicalData={historicalData} />
              </div>
            </div>
            <div className="mt-8">
              <MaintenanceAlerts alerts={alerts} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        onLogout={() => setIsLoggedIn(false)} 
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
      
      <main className="container mx-auto px-4 py-24">
        <div className="glass-container p-6">
          {renderPage()}
        </div>
      </main>

      <footer className="footer-custom py-4 text-center text-sm">
        <p>&copy; 2024 BITS Pilani's AUTOwn'24. All rights reserved.</p>
      </footer>

      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-[#f39c12] text-white p-4 rounded-full shadow-lg hover:bg-[#e67e22] transition-colors"
        aria-label="Toggle chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </div>
  );
}

export default App;