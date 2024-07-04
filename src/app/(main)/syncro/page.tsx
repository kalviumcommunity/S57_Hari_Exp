import React from 'react'
import ChatInput from '@/components/ai/chat'
import LLema from '@/components/ai/syncro'


export default function Syncro() {
  return (
    <div className=' w-full h-full grid grid-rows-7'>
      <div className=' w-full row-span-6 p-6 h-full overflow-y-auto'>
        <LLema />
      </div>
      <div className=' h-fit w-full row-span-1 flex items-center justify-center p-6 fixed top-[88vh] backdrop-blur-sm'>
        <ChatInput />
      </div>
    </div>
  )
}
