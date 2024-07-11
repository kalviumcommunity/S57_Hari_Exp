import React from 'react'
import Sidebar from '@/components/layout_chunk/user/sidebar/sidebar'
import Navbar from '@/components/layout_chunk/navbar'
import { Toaster } from '@/components/ui/toaster'


const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen w-full  flex'>
      <div className=' h-full w-[6%] border fixed max-lg:w-0 max-lg:hidden'>
        <Sidebar />
      </div>
      <div className=' h-full w-[94%] ml-[92px] max-lg:w-full max-lg:ml-0 p-1'>
        <div className=' h-[9vh] fixed w-[93%]'>
          <Navbar />
        </div>
        <div className=' w-full h-[88vh] mt-[4.6rem] border rounded-lg'>
          {children}
          <Toaster />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
