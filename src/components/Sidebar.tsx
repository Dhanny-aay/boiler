import React, { useState } from "react";
import { BarChart3, TrendingUp, FileText, Settings, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const navigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, active: true },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const handleItemClick = (itemId: string): void => {
    setActiveItem(itemId);
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white border-r border-gray-200 h-screen z-40`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-gray-900">
                  Dashboard
                </h2>
                <p className="text-sm font-medium text-gray-600 tracking-wider">
                  Template
                </p>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="px-4">
          <ul className="space-y-2">
            {navigationItems.map((item: NavigationItem) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeItem === item.id
                        ? "bg-primary-50 text-primary-700 border border-primary-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium tracking-wider">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};
