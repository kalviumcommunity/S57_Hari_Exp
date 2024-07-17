import React from 'react'

export const runtime = "edge"

const Notebook = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' w-full h-full'>
      {children}
    </div>
  )
}

export default Notebook
