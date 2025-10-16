import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { MetricCard as MetricCardType } from '@/types'

interface MetricCardProps {
  metric: MetricCardType
  isLoading?: boolean
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, isLoading = false }) => {
  const getChangeColor = (changeType: string): string => {
    return changeType === 'increase' ? 'text-green-600' : 'text-red-600'
  }

  const getChangeIcon = (changeType: string) => {
    return changeType === 'increase' ? TrendingUp : TrendingDown
  }

  const getCardColorClasses = (color: string): string => {
    const colorMap: Record<string, string> = {
      blue: 'border-blue-200 bg-blue-50',
      green: 'border-green-200 bg-green-50',
      purple: 'border-purple-200 bg-purple-50',
      orange: 'border-orange-200 bg-orange-50'
    }
    return colorMap[color] || 'border-gray-200 bg-gray-50'
  }

  if (isLoading) {
    return (
      <div className="card-metric">
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 skeleton rounded"></div>
            <div className="h-4 w-24 skeleton"></div>
          </div>
          <div className="space-y-2">
            <div className="h-8 w-32 skeleton"></div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 skeleton rounded"></div>
              <div className="h-4 w-12 skeleton"></div>
            </div>
            <div className="h-3 w-20 skeleton"></div>
          </div>
        </div>
      </div>
    )
  }

  const ChangeIcon = getChangeIcon(metric.changeType)

  return (
    <div className={`card-metric ${getCardColorClasses(metric.color)}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl">{metric.icon}</span>
            <h3 className="text-sm font-medium text-gray-600 tracking-wider">{metric.title}</h3>
          </div>
          <div className="flex items-baseline space-x-3">
            <p className="text-3xl font-extrabold text-gray-900">{metric.value}</p>
            <div className={`flex items-center space-x-1 ${getChangeColor(metric.changeType)}`}>
              <ChangeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">
                {Math.abs(metric.change)}%
              </span>
            </div>
          </div>
          <p className="text-xs font-medium text-gray-500 mt-2 tracking-wider">
            vs last period
          </p>
        </div>
      </div>
    </div>
  )
}
