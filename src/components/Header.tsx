import React from 'react'
import { Plus, Settings, Wifi, WifiOff } from 'lucide-react'
import { useServiceWorker } from '@/hooks/useServiceWorker'

export const Header: React.FC = () => {
  const { isOnline } = useServiceWorker()

  return (
    <header className="bg-white border-b border-gray-200 px-6 md:px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h1>
          <div className="flex items-center space-x-2">
            {isOnline ? (
              <Wifi className="w-4 h-4 text-green-500" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-500" />
            )}
            <span className="text-sm font-medium text-gray-600 tracking-wider">
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="btn-secondary flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Report</span>
          </button>
        </div>
      </div>
    </header>
  )
}
