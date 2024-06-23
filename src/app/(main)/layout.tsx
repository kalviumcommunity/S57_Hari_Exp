import Navbar from '@/components/layout_chunk/navbar'
import Sidebar from '@/components/layout_chunk/sidebar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen w-full  flex'>
      <div className=' h-full w-[6%] border fixed max-lg:w-0 max-lg:hidden'>
        <Sidebar />
      </div>
      <div className=' h-full w-[94%] ml-24 max-lg:w-full max-lg:ml-0'>
        <div className=' h-[8%]'>
          <Navbar />
        </div>
        <div className=' w-full h-[92%] bg-emerald-600'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
