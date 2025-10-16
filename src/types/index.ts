export interface MetricCard {
  id: string
  title: string
  value: string | number
  change: number
  changeType: 'increase' | 'decrease'
  icon: string
  color: string
}

export interface TableData {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending'
  value: number
  date: string
}

export interface DashboardData {
  metrics: MetricCard[]
  tableData: TableData[]
  isLoading: boolean
  lastUpdated: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  timestamp: string
}
