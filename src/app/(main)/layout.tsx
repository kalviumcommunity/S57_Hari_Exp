import React from 'react'
import dynamic from 'next/dynamic'

const SideDynaimc = dynamic(() => import('@/components/layout_chunk/user/sidebar/sidebar'))
const NavDynaimc = dynamic(() => import('@/components/layout_chunk/navbar'))

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen w-full  flex'>
      <div className=' h-full w-[6%] border fixed max-lg:w-0 max-lg:hidden'>
        <SideDynaimc />
      </div>
      <div className=' h-full w-[94%] ml-[92px] max-lg:w-full max-lg:ml-0 p-1'>
        <div className=' h-[9vh] fixed w-[93%]'>
          <NavDynaimc />
        </div>
        <div className=' w-full h-[88vh] mt-[4.6rem] border rounded-lg'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
