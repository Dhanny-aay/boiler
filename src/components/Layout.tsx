import React, { ReactNode } from 'react'
import { OfflineIndicator } from './OfflineIndicator'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <OfflineIndicator />
      <div className="flex">
        {/* Sidebar - Hidden on mobile, visible on md+ */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
