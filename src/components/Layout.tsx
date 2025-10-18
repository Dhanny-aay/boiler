import React, { ReactNode, useState } from "react";
import { OfflineIndicator } from "./OfflineIndicator";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      <OfflineIndicator />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0 md:pl-64">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-6 md:p-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};
