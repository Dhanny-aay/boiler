import React, { useState } from 'react'
import { BarChart3, TrendingUp, FileText, Settings, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
  active?: boolean
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard')

  const handleItemClick = (itemId: string): void => {
    setActiveItem(itemId)
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-gray-900">Dashboard</h2>
            <p className="text-sm font-medium text-gray-600 tracking-wider">Template</p>
          </div>
        </div>
      </div>
      
      <nav className="px-4">
        <ul className="space-y-2">
          {navigationItems.map((item: NavigationItem) => {
            const IconComponent = item.icon
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    activeItem === item.id
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium tracking-wider">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      
  
    </aside>
  )
}
