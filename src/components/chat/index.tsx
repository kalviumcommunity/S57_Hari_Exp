import React from 'react'
import Sidebar from './sidebar'
import Chat from './chat'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'

const Index = () => {
  return (
    <ResizablePanelGroup className=' w-full h-full  grid grid-cols-12' direction='horizontal'>
      <ResizablePanel maxSize={0} defaultSize={0} minSize={0}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel maxSize={100} defaultSize={100} minSize={60}>
        <Chat />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Index
