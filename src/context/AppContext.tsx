import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'
import { DashboardData, MetricCard, TableData } from '@/types'
import { fetchDashboardData, apiCache } from '@/services/mockApi'

interface AppState {
  dashboardData: DashboardData
  error: string | null
  isOnline: boolean
}

type AppAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_DATA'; payload: DashboardData }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_ONLINE_STATUS'; payload: boolean }
  | { type: 'UPDATE_METRICS'; payload: MetricCard[] }
  | { type: 'UPDATE_TABLE_DATA'; payload: TableData[] }

const initialState: AppState = {
  dashboardData: {
    metrics: [],
    tableData: [],
    isLoading: true,
    lastUpdated: ''
  },
  error: null,
  isOnline: navigator.onLine
}

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          isLoading: action.payload
        }
      }
    
    case 'SET_DATA':
      return {
        ...state,
        dashboardData: action.payload,
        error: null
      }
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        dashboardData: {
          ...state.dashboardData,
          isLoading: false
        }
      }
    
    case 'SET_ONLINE_STATUS':
      return {
        ...state,
        isOnline: action.payload
      }
    
    case 'UPDATE_METRICS':
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          metrics: action.payload,
          lastUpdated: new Date().toISOString()
        }
      }
    
    case 'UPDATE_TABLE_DATA':
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          tableData: action.payload,
          lastUpdated: new Date().toISOString()
        }
      }
    
    default:
      return state
  }
}

interface AppContextType {
  state: AppState
  dispatch: React.Dispatch<AppAction>
  refreshData: () => Promise<void>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const refreshData = async (): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      
      // Check cache first
      const cachedData = apiCache.get<DashboardData>('dashboard-data')
      if (cachedData && state.isOnline) {
        dispatch({ type: 'SET_DATA', payload: cachedData })
        return
      }
      
      const response = await fetchDashboardData()
      if (response.success) {
        dispatch({ type: 'SET_DATA', payload: response.data })
        // Cache the data
        apiCache.set('dashboard-data', response.data)
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message || 'Failed to fetch data' })
      }
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: error instanceof Error ? error.message : 'An unexpected error occurred' 
      })
    }
  }

  useEffect(() => {
    const handleOnline = (): void => {
      dispatch({ type: 'SET_ONLINE_STATUS', payload: true })
      refreshData()
    }

    const handleOffline = (): void => {
      dispatch({ type: 'SET_ONLINE_STATUS', payload: false })
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial data load
    refreshData()

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const value: AppContextType = {
    state,
    dispatch,
    refreshData
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): AppContextType => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
