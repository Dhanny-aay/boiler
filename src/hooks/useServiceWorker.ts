import { useEffect, useState } from 'react'

interface ServiceWorkerState {
  isOnline: boolean
  isOffline: boolean
  registration: ServiceWorkerRegistration | null
}

export const useServiceWorker = (): ServiceWorkerState => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    const handleOnline = (): void => {
      setIsOnline(true)
      setIsOffline(false)
    }

    const handleOffline = (): void => {
      setIsOnline(false)
      setIsOffline(true)
    }

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((reg: ServiceWorkerRegistration) => {
          setRegistration(reg)
          console.log('Service Worker registered successfully:', reg)
        })
        .catch((error: Error) => {
          console.error('Service Worker registration failed:', error)
        })
    }

    // Listen for online/offline events
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return {
    isOnline,
    isOffline,
    registration
  }
}
