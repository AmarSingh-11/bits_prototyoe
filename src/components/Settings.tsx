import React, { useState } from 'react';
import { Bell, Shield, Car, User, Sliders, Gauge, Activity } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    maintenance: true,
    performance: true,
    security: false,
  });

  const [preferences, setPreferences] = useState({
    units: 'imperial',
    theme: 'light',
    language: 'en',
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Settings */}
      <div className="glass-container p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-[#f39c12] bg-opacity-20 flex items-center justify-center">
            <User className="w-10 h-10 text-[#f39c12]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#f1c40f]">John Doe</h2>
            <p className="text-gray-300">john.doe@example.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="px-4 py-2 border border-[#f39c12] rounded-md text-sm font-medium text-[#f39c12] hover:bg-[#f39c12] hover:text-white transition-colors">
            Edit Profile
          </button>
          <button className="px-4 py-2 border border-[#f39c12] rounded-md text-sm font-medium text-[#f39c12] hover:bg-[#f39c12] hover:text-white transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Vehicle Settings */}
      <div className="glass-container p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Car className="w-6 h-6 text-[#f39c12]" />
          <h2 className="text-lg font-semibold text-[#f1c40f]">Vehicle Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[rgba(33,49,61,0.5)] rounded-lg">
            <div className="flex items-center space-x-3">
              <Gauge className="w-5 h-5 text-[#f39c12]" />
              <div>
                <p className="font-medium text-[#f1c40f]">Performance Monitoring</p>
                <p className="text-sm text-gray-300">Adjust engine monitoring parameters</p>
              </div>
            </div>
            <button className="px-3 py-1 text-sm bg-[#f39c12] text-white rounded-md hover:bg-[#e67e22] transition-colors">
              Configure
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[rgba(33,49,61,0.5)] rounded-lg">
            <div className="flex items-center space-x-3">
              <Sliders className="w-5 h-5 text-[#f39c12]" />
              <div>
                <p className="font-medium text-[#f1c40f]">Maintenance Schedule</p>
                <p className="text-sm text-gray-300">Set service intervals and reminders</p>
              </div>
            </div>
            <button className="px-3 py-1 text-sm bg-[#f39c12] text-white rounded-md hover:bg-[#e67e22] transition-colors">
              Adjust
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-container p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-6 h-6 text-[#f39c12]" />
          <h2 className="text-lg font-semibold text-[#f1c40f]">Notifications</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(243,156,18,0.2)] flex items-center justify-center">
                  {key === 'maintenance' && <Sliders className="w-5 h-5 text-[#f39c12]" />}
                  {key === 'performance' && <Activity className="w-5 h-5 text-[#f39c12]" />}
                  {key === 'security' && <Shield className="w-5 h-5 text-[#f39c12]" />}
                </div>
                <div>
                  <p className="font-medium text-[#f1c40f] capitalize">{key} Alerts</p>
                  <p className="text-sm text-gray-300">
                    Receive notifications about {key} updates
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={value}
                  onChange={() => 
                    setNotifications(prev => ({
                      ...prev,
                      [key]: !prev[key]
                    }))
                  }
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f39c12] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f39c12]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="glass-container p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Sliders className="w-6 h-6 text-[#f39c12]" />
          <h2 className="text-lg font-semibold text-[#f1c40f]">Preferences</h2>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Units
              </label>
              <select
                value={preferences.units}
                onChange={(e) => setPreferences(prev => ({ ...prev, units: e.target.value }))}
                className="block w-full px-3 py-2 bg-[rgba(33,49,61,0.5)] border border-gray-600 rounded-md shadow-sm text-gray-200 focus:outline-none focus:ring-[#f39c12] focus:border-[#f39c12]"
              >
                <option value="imperial">Imperial (mph, mi)</option>
                <option value="metric">Metric (km/h, km)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                className="block w-full px-3 py-2 bg-[rgba(33,49,61,0.5)] border border-gray-600 rounded-md shadow-sm text-gray-200 focus:outline-none focus:ring-[#f39c12] focus:border-[#f39c12]"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}