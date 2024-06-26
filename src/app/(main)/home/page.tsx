'use client'
import React, { Suspense } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useSession } from 'next-auth/react'
const Home = () => {
  const session = useSession()
  return (

    <div className=' w-full h-full'>
      <p className=' text-[24px] font-bold'>Hi,
        <Suspense fallback={<p>loading</p>}>
          {session.data?.user?.name}
        </Suspense>
      </p>
    </div >

  )
}

export default Home
