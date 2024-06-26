import React from 'react'

const SideLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' w-full h-full bg-yellow-100'>
      {children}
    </div>
  )
}

export default SideLayout
