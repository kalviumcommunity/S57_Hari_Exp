import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Editor from '@/components/tiptap/editor'



const Page = () => {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className='w-full h-full grid grid-cols-8 gap-x-3'>
        <ResizablePanel maxSize={100} className=' w-full p-3 h-full   ' defaultSize={80}>
          <Editor />
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel className=' h-full w-full' maxSize={60} defaultSize={20} minSize={0}>
          
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}

export default Page