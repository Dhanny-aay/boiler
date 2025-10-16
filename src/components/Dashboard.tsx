import React from 'react'
import { RefreshCw, Wifi, WifiOff } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { MetricCard } from './MetricCard'
import { DataTable } from './DataTable'
import { ChartPlaceholder } from './ChartPlaceholder'

export const Dashboard: React.FC = () => {
  const { state, refreshData } = useApp()
  const { dashboardData, error, isOnline } = state

  const handleRefresh = async (): Promise<void> => {
    await refreshData()
  }

  // Generate skeleton metrics for loading state
  const skeletonMetrics = Array.from({ length: 4 }, (_, i) => ({
    id: `skeleton-${i}`,
    title: '',
    value: '',
    change: 0,
    changeType: 'increase' as const,
    icon: '',
    color: 'gray'
  }))

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-6 font-medium tracking-wider">{error}</p>
          <button 
            onClick={handleRefresh}
            className="btn-primary"
            disabled={!isOnline}
          >
            {isOnline ? 'Retry' : 'Offline - Retry when online'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header with refresh button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2 font-medium tracking-wider">
            Last updated: {dashboardData.lastUpdated ? new Date(dashboardData.lastUpdated).toLocaleString() : 'Never'}
          </p>
        </div>
        <div className="flex items-center space-x-4">
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
          <button 
            onClick={handleRefresh}
            className="btn-secondary flex items-center space-x-2"
            disabled={dashboardData.isLoading || !isOnline}
          >
            <RefreshCw className={`w-4 h-4 ${dashboardData.isLoading ? 'animate-spin' : ''}`} />
            <span>{dashboardData.isLoading ? 'Loading...' : 'Refresh'}</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.isLoading 
          ? skeletonMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} isLoading={true} />
            ))
          : dashboardData.metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} isLoading={false} />
            ))
        }
      </div>

      {/* Charts and Table Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartPlaceholder title="Revenue Trend" type="line" />
        <ChartPlaceholder title="User Distribution" type="pie" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartPlaceholder title="Monthly Performance" type="bar" />
        <DataTable data={dashboardData.tableData} isLoading={dashboardData.isLoading} />
      </div>
    </div>
  )
}
