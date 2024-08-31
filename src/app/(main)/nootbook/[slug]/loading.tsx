import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel style={{ scrollbarWidth: 'none' }} className=' w-full h-full overflow-clip' maxSize={100} defaultSize={80}>
        <Skeleton className=' w-full h-full animate-pulse'></Skeleton>
      </ResizablePanel>
      <ResizablePanel className=' w-[25%] h-full p-2 flex flex-col gap-y-6 justify-center ' maxSize={20} minSize={0} defaultSize={20}>
        <Skeleton className=' w-full h-full'></Skeleton>
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default loading
