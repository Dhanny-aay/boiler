import React from "react";
import { Plus, Settings, Wifi, WifiOff, Menu } from "lucide-react";
import { useServiceWorker } from "@/hooks/useServiceWorker";

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { isOnline } = useServiceWorker();

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu for mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <div className="hidden sm:flex items-center space-x-2">
            {isOnline ? (
              <Wifi className="w-4 h-4 text-green-500" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-500" />
            )}
            <span className="text-xs md:text-sm font-medium text-gray-600 tracking-wider">
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="btn-secondary flex items-center space-x-2 px-3 py-2 md:px-4">
            <Settings className="w-4 h-4" />
            <span className="hidden md:inline">Settings</span>
          </button>
          <button className="btn-primary flex items-center space-x-2 px-3 py-2 md:px-4">
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline">New Report</span>
          </button>
        </div>
      </div>
    </header>
  );
};
