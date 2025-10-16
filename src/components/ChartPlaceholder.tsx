import React from 'react'
import { TrendingUp, BarChart3, PieChart, AreaChart, Info } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ChartPlaceholderProps {
  title?: string
  type?: 'line' | 'bar' | 'pie' | 'area'
}

export const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({ 
  title = 'Chart Placeholder', 
  type = 'line' 
}) => {
  const getChartIcon = (chartType: string): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      line: TrendingUp,
      bar: BarChart3,
      pie: PieChart,
      area: AreaChart
    }
    return icons[chartType] || BarChart3
  }

  const IconComponent = getChartIcon(type)

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
        <div className="flex items-center space-x-2">
          <IconComponent className="w-5 h-5 text-primary-blue" />
          <span className="text-sm font-medium text-gray-600 tracking-wider capitalize">{type} Chart</span>
        </div>
      </div>
      
      <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center">
          <div className="mb-4">
            <IconComponent className="w-12 h-12 text-gray-400 mx-auto" />
          </div>
          <h3 className="text-lg font-extrabold text-gray-600 mb-2">Chart Placeholder</h3>
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider">
            This area is reserved for a {type} chart visualization.
          </p>
          <div className="space-y-2">
            <div className="flex justify-center space-x-4 text-xs font-medium text-gray-400">
              <span>• Integration ready for Chart.js, D3.js, or Recharts</span>
            </div>
            <div className="flex justify-center space-x-4 text-xs font-medium text-gray-400">
              <span>• Responsive design included</span>
            </div>
            <div className="flex justify-center space-x-4 text-xs font-medium text-gray-400">
              <span>• TypeScript support configured</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-200">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Info className="w-5 h-5 text-primary-blue" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-primary-800">
              <strong>Integration Note:</strong> Replace this placeholder with your preferred charting library. 
              The component structure and TypeScript interfaces are ready for seamless integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
