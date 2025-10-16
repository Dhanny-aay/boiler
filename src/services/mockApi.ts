import { MetricCard, TableData, ApiResponse, DashboardData } from '@/types'

// Mock data generation
const generateMockMetrics = (): MetricCard[] => [
  {
    id: 'total-users',
    title: 'Total Users',
    value: '12,345',
    change: 12.5,
    changeType: 'increase',
    icon: '👥',
    color: 'blue'
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: '$45,678',
    change: -2.3,
    changeType: 'decrease',
    icon: '💰',
    color: 'green'
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    value: '3.24%',
    change: 8.1,
    changeType: 'increase',
    icon: '📈',
    color: 'purple'
  },
  {
    id: 'active-sessions',
    title: 'Active Sessions',
    value: '1,234',
    change: 15.7,
    changeType: 'increase',
    icon: '🔗',
    color: 'orange'
  }
]

const generateMockTableData = (): TableData[] => [
  {
    id: '1',
    name: 'John Smith',
    status: 'active',
    value: 1250,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    status: 'pending',
    value: 890,
    date: '2024-01-14'
  },
  {
    id: '3',
    name: 'Mike Wilson',
    status: 'inactive',
    value: 2100,
    date: '2024-01-13'
  },
  {
    id: '4',
    name: 'Emily Davis',
    status: 'active',
    value: 1560,
    date: '2024-01-12'
  },
  {
    id: '5',
    name: 'David Brown',
    status: 'active',
    value: 980,
    date: '2024-01-11'
  }
]

// Simulate network delay
const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms))

// Mock API functions
export const fetchDashboardData = async (): Promise<ApiResponse<DashboardData>> => {
  await delay(1000) // Simulate network delay
  
  const data: DashboardData = {
    metrics: generateMockMetrics(),
    tableData: generateMockTableData(),
    isLoading: false,
    lastUpdated: new Date().toISOString()
  }
  
  return {
    data,
    success: true,
    message: 'Data fetched successfully',
    timestamp: new Date().toISOString()
  }
}

export const fetchMetrics = async (): Promise<ApiResponse<MetricCard[]>> => {
  await delay(800)
  
  return {
    data: generateMockMetrics(),
    success: true,
    message: 'Metrics fetched successfully',
    timestamp: new Date().toISOString()
  }
}

export const fetchTableData = async (): Promise<ApiResponse<TableData[]>> => {
  await delay(600)
  
  return {
    data: generateMockTableData(),
    success: true,
    message: 'Table data fetched successfully',
    timestamp: new Date().toISOString()
  }
}

// Cache utility
class ApiCache {
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number }> = new Map()
  
  set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void { // 5 minutes default TTL
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }
  
  get<T>(key: string): T | null {
    const cached = this.cache.get(key)
    if (!cached) return null
    
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key)
      return null
    }
    
    return cached.data as T
  }
  
  clear(): void {
    this.cache.clear()
  }
}

export const apiCache = new ApiCache()
