'use client'
import React, { useContext, useState } from "react";

const Context = React.createContext<{ tags: string, setTags: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined)
const Provider = ({ children }: { children: React.ReactNode }) => {
  const [tags, setTags] = useState<string>('')
  return (
    <Context.Provider value={{ tags, setTags }}>
      {children}
    </Context.Provider>
  )
};

export default Provider

export const useTagContext = () => {
  const context = useContext(Context)
  return context
}