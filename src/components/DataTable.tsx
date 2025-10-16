import React from 'react'
import { ArrowRight } from 'lucide-react'
import { TableData } from '@/types'

interface DataTableProps {
  data: TableData[]
  isLoading?: boolean
}

export const DataTable: React.FC<DataTableProps> = ({ data, isLoading = false }) => {
  const getStatusBadge = (status: string): string => {
    const statusClasses: Record<string, string> = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    }
    return statusClasses[status] || 'bg-gray-100 text-gray-800'
  }

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="card">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Recent Activity</h2>
        <button className="flex items-center space-x-2 text-primary-blue hover:text-primary-600 text-sm font-medium transition-colors">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item: TableData) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-blue font-extrabold text-sm">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-extrabold text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 text-xs font-extrabold rounded-full ${getStatusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-gray-900">
                    {formatCurrency(item.value)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-600 tracking-wider">
                    {formatDate(item.date)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
