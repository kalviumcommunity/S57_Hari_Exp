'use client'
import React, { createContext, useEffect, useState } from 'react'

export const OfflineContext = createContext(navigator.onLine)
const OfflineProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOffline, setIsOffline] = useState<boolean>()
  useEffect(() => {
    if (window !== undefined) {
      setIsOffline(navigator.onLine)
    }
    function handleOnline() {
      setIsOffline(false)
    }
    function handleOffline() {
      setIsOffline(true)
    }

    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnline)

    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }
  }, [])
  return (
    <OfflineContext.Provider value={isOffline}>
      {children}
    </OfflineContext.Provider>
  )
}

export default OfflineProvider
