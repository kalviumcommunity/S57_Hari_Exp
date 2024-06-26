import Navbar from '@/components/layout_chunk/navbar'
import Sidebar from '@/components/layout_chunk/sidebar'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import React, { Suspense } from 'react'
import Events from './(side)/events/page'


const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
          <ResizablePanelGroup direction="horizontal" className='w-full h-full grid grid-cols-8 gap-x-3'>
            <ResizablePanel maxSize={100} className=' w-full   p-3 h-full  bg-slate-50  '>
              {children}
            </ResizablePanel>

            <ResizableHandle withHandle />
            <ResizablePanel className=' h-full w-full' maxSize={60} defaultSize={20} minSize={0}>
              <Events />
            </ResizablePanel>
          </ResizablePanelGroup>

        </div>
      </div>
    </div>
  )
}

export default MainLayout
